import { Publisher, OrderCreatedEvent, Subjects } from "@jtolatickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
