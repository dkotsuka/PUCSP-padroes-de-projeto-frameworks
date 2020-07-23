import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface NeighborsPayload extends Payload {
  depth: number
  destination: string
}

export class NeighborsResolver extends Resolver {

  execute(payload: NeighborsPayload, result: Object, origin: net.Socket) {
    if (payload.command == "neighbors") {

    }
    this.executeNext(payload, result, origin)
  }
}