import { Subjects, Publisher, PaymentCreatedEvent } from "@jtolatickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
