import { Peer } from "./classes/Peer"

const port = process.env.PORT;
const peer = new Peer(port);

peer.onConnection = socket => {
  const firstPayload = {
    message: "Hi !! I'm on port " + this.port
  }
  socket.write(JSON.stringify(firstPayload))
};

peer.onData = (socket, data) => {
  const json = data.toString();
  const payload = JSON.parse(json);
  console.log("recebido> ", payload.message)
};

process.argv.slice(2).forEach(otherPeerAddress =>
  peer.connectTo(otherPeerAddress)
);

process.stdin.on('data', data => {
  const message = data.toString().replace(/\n/g, "");
  peer.broadcast(JSON.stringify({ message }));
})