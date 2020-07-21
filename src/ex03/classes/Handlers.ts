import { SearchPayload, Payload, UploadPayload, ExecutePayload, NeighborsPayload } from "./interfaces";
import { Handler } from "./ResolverChain";


export const searchHandler: Handler<Payload, string> = (payload: SearchPayload) => {
  if (payload.command != "search")
    return null

  return `Search result for keys: ${payload.keywords}.`
}

export const uploadHandler: Handler<Payload, string> = (payload: UploadPayload) => {
  if (payload.command != "upload")
    return null

  return `Upload success for file: ${payload.filename}.`
}

export const executeHandler: Handler<Payload, string> = (payload: ExecutePayload) => {
  if (payload.command != "execute")
    return null

  return `Execute result for command: ${payload.script}.`
}

export const neighborsHandler: Handler<Payload, string> = (payload: NeighborsPayload) => {
  if (payload.command != "neighbors")
    return null

  return `Neighbors for depth of ${payload.depth} of this instance.`
}