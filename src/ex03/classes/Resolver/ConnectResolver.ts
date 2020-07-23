import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface ConnectPayload extends Payload {
  address: string
}

export class ConnectResolver extends Resolver {

  execute(payload: ConnectPayload, result: Object, origin: net.Socket) {
    if (payload.command == "connect") {

      if (origin) {
        Connections.init().add(origin)
        const { address, port, family }: any = origin.address()
        return console.log(`[NEW CONNECTION] ${family}:${address}:${port}.`)
      }

      if (payload.address.split(":").length !== 2)
        return console.log("ERROR: Address must be formatted as host:port");

      const [host, port] = payload.address.split(":")
      const socket = net.createConnection({ host, port: parseInt(port) }, () => {
        Connections.init().add(socket)
        socket.write(JSON.stringify({ command: "connect" }))
        const { address, port, family }: any = socket.address()
        console.log(`[NEW CONNECTION] ${family}:${address}:${port}.`)
      })
    }

    this.executeNext(payload, result, origin)
  }
}