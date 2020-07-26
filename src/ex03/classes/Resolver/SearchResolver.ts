import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface SearchPayload extends Payload {
  keywords: string,
  destination: string
}

export class SearchResolver extends Resolver {

  resolve(payload: SearchPayload, result: Object, origin: net.Socket) {
    if (payload.command == "search") {

      if (origin) {
        console.log("origin")
        return origin.write(JSON.stringify({ result: `Result for search with params ${payload.keywords}` }))
      }
      console.log("destination")
      const destination = Connections.init().getOne(payload.destination)
      if (!destination) {
        return console.log("ERROR: destination is not connected.")
      }

      destination.write(JSON.stringify(payload))
    }
  }
}