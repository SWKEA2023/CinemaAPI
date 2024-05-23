import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../Impl/create-order.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Screening } from 'src/Domain/Entities/screening.entity';
import { Ticket } from 'src/Domain/Entities/ticket.entity';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly esService: ElasticsearchService) {}

  
  /**
   * @remarks This method is a command handler for creating an ticket
   * @param CreateOrderCommand
   * @returns Promise<Ticket>
   */
  async execute(command: CreateOrderCommand): Promise<Ticket> {
    const searchResult = await this.esService.search({
      query: {
        match: {
          screeningId: command.order.fkScreeningId,
        },
      },
    });

    const screening = searchResult.hits.hits[0]._source as Screening;

    const ticket = new Ticket(
      command.order.seat,
      command.order.order,
      screening,
    );
    delete ticket.fkScreeningId;

    return ticket;
  }
}
