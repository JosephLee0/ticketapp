import { Publisher, Subjects, TicketCreatedEvent } from "@jtolatickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
