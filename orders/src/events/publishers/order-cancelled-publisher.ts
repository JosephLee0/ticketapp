import { Subjects, Publisher, OrderCancelledEvent } from "@jtolatickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
