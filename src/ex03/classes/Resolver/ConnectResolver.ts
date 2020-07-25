import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface ConnectPayload extends Payload {
  host: string
  port: string
}

export class ConnectResolver extends Resolver {

  resolve(payload: ConnectPayload, result: Object, origin: net.Socket) {
    if (payload.command == "connect") {

      if (origin) {
        Connections.init().add(origin)
        const { address, port, family }: any = origin.address()
        return console.log(`[NEW CONNECTION] ${family}:${address}:${port}.`)
      }

      const { host, port } = payload
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