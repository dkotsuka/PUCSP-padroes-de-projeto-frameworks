import * as net from "net"
import { Payload } from "./interfaces";
import payloadResolverChain from "./PayloadResolverChain";
export class Peer {
  private port: number
  private connections: net.Socket[]

  constructor(port) {
    this.port = port;
    this.connections = [];

    const server = net.createServer((socket) => {
      this.onSocketConnected(socket)
    });

    server.listen(port, () => console.log("Listening port " + port))
  }

  connectTo(address) {
    if (address.split(":").length !== 2)
      throw Error("Peer address must be formatted like as host:port ");

    const [host, port] = address.split(":");

    const socket = net.createConnection({ port, host }, () =>
      this.onSocketConnected(socket)
    );
  }

  onSocketConnected(socket: net.Socket) {
    console.log("Nova conexão estabelecida.");
    this.connections.push(socket);
    socket.on('data', (data) =>
      this.onData(socket, data)
    );

    this.onConnection(socket);
  }

  onData(socket, data) {
    const json = data.toString();
    const payload: Payload = JSON.parse(json);
    console.log("received -> ", payload)

    if (payload.command == "result")
      return null

    const result = payloadResolverChain.execute(payload, socket)
    //socket.write(JSON.stringify({ command: "result", args: result }))
  }

  onConnection(socket: net.Socket) {
    console.log(`Connected to socket: ${socket.localAddress}:${socket.localPort}`)
  }

  getNeighbors() {

  }

  execute({ command, args }) {
    this.connections.forEach((socket: net.Socket) => {
      socket.write(JSON.stringify({ command, args }))
    })
  }
}
