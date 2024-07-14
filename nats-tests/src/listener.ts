import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticketCreatedListener";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS.");

  stan.on("close", () => {
    console.log("Nats connection closed");
    process.exit();
  });

  new TicketCreatedListener(stan).listen();

  // const options = stan
  //   .subscriptionOptions()
  //   .setManualAckMode(true)
  //   .setDeliverAllAvailable()
  //   .setDurableName("accounting-service");

  // const subscription = stan.subscribe(
  //   "ticket:created",
  //   "listenerQgroup",
  //   options
  // );

  // subscription.on("message", (msg: Message) => {
  //   const data = msg.getData();

  //   if (typeof data === "string") {
  //     console.log(
  //       `this message has a sequence number of ${msg.getSequence()} and a data of ${data}`
  //     );
  //   }

  //   msg.ack();
  // });
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
