import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface NeighborsPayload extends Payload {
  depth: number
  destination: string
}

//ADICIONAR MÉTODOS GETADDRESS NA CLASSE CONNECTION PARA LIMPAR ESSE CÓDIGO

export class NeighborsResolver extends Resolver {

  resolve(payload: NeighborsPayload, result: Object, origin: net.Socket) {

    if (payload.command == "neighbors") {

      this.sendToDestination(payload)

      if (payload.depth > 1) {
        this.sendToNext(payload, origin)
      }
    }
    this.executeNext(payload, result, origin)
  }

  getLocalAddress() {
    const { address, port }: any = Connections.init().getServer().address()
    return `${address}:${port}`
  }

  sendToNext(payload: NeighborsPayload, origin: net.Socket) {
    const connections = Connections.init()
    const request = Object.assign({}, payload)
    request.depth -= 1

    const addresses = connections.getAddresses()
      .filter(addr => addr != payload.destination)
      .filter(addr => addr != Connections.getStringAddress(origin))

    addresses.forEach(addr => {
      const socket: net.Socket = connections.getOne(addr)
      socket.write(JSON.stringify(request))
    })
  }

  sendToDestination(payload: NeighborsPayload) {
    const connections = Connections.init()
    const response = { [this.getLocalAddress()]: connections.getAddresses(), command: "response" }
    if (connections.getOne(payload.destination)) {
      const destination: net.Socket = connections.getOne(payload.destination)
      return destination.write(JSON.stringify(response))
    }
    const [host, port] = payload.destination.split(":")
    const socket = net.createConnection({ host, port: parseInt(port) })
    socket.write(JSON.stringify(response))
    socket.destroy()
  }

}