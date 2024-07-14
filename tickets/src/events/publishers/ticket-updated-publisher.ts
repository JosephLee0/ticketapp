import { Publisher, Subjects, TicketUpdatedEvent } from "@jtolatickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
