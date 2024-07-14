import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticketCreatedPublisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("publisher connected to NATS.");

  const data = {
    id: "123",
    title: "concert",
    price: 22,
  };
  try {
    await new TicketCreatedPublisher(stan).publish(data);
  } catch (err) {
    console.log(err);
  }

  // stan.publish("ticket:created", data, () => {
  //   console.log("successfuly published");
  // });
});
