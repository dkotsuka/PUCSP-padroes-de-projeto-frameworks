import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface SearchPayload extends Payload {
  keywords: string,
  destination: string
}

export class SearchResolver extends Resolver {

  execute(payload: SearchPayload, result: Object, origin: net.Socket) {
    if (payload.command == "search") {

    }
    this.executeNext(payload, result, origin)
  }
}