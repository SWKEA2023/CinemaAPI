import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../Impl/create-order.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Screening } from 'src/Domain/Entities/screening.entity';
import { Ticket } from 'src/Domain/Entities/ticket.entity';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: CreateOrderCommand) {
    const searchResult = await this.esService.search({
      query: {
        match: {
          screeningId: command.order.fkScreeningId,
        },
      },
    });

    const screening = searchResult.hits.hits[0]._source as Screening;

    const ticket = new Ticket(command.order.seats, command.order.order, screening);
    delete ticket.fkScreeningId;

    return ticket;
  }
}
