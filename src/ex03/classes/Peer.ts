import * as net from "net"
import { Connections } from "./Connections";
import { Payload, Resolver } from "./Resolver/AbstractResolver";
import { ConnectResolver } from "./Resolver/ConnectResolver";
import { SearchResolver } from "./Resolver/SearchResolver";
import { UploadResolver } from "./Resolver/UploadResolver";
import { ExecuteResolver } from "./Resolver/ExecuteResolver";
import { NeighborsResolver } from "./Resolver/Neighbors";
export class Peer {
  private connections: Connections
  private resolver: Resolver

  constructor(port) {
    this.connections = Connections.init();
    this.connections.onAddListener(socket => this.onSocketConnected(socket))
    this.resolver = new ConnectResolver()
    this.resolver.setNext(new SearchResolver)
      .setNext(new UploadResolver)
      .setNext(new ExecuteResolver)
      .setNext(new NeighborsResolver)

    const server = net.createServer((socket) => {
      this.onSocketConnected(socket)
    });

    this.connections.setServer(server)

    server.listen(port, () => console.log("Listening port " + port))
  }

  onSocketConnected = (socket: net.Socket) => {
    socket.on('data', (data) =>
      this.onData(socket, data)
    );
  }

  onData(origin: net.Socket, data: Buffer) {
    const json = data.toString();
    console.log(json)
    const payload: Payload = JSON.parse(json);
    console.log("received -> ", payload)

    this.execute(payload, origin)
  }

  execute(payload: Payload, origin?: net.Socket) {
    this.resolver.execute(payload, {}, origin)
  }
}
