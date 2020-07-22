import { Payload } from "./interfaces";
import { Handler } from "./ResolverChain";


export const searchHandler: Handler<Payload, string> = (payload: Payload) => {
  if (payload?.command != "search")
    return null

  if (payload?.args.includes("mp3"))
    return "Diga não à pirataria."

  return `Resultado da busca para: ${payload.args}.`
}

export const uploadHandler: Handler<Payload, string> = (payload: Payload) => {
  if (payload?.command != "upload")
    return null

  return `Resultado do upload do arquivo: ${payload.args}.`
}

export const executeHandler: Handler<Payload, string> = (payload: Payload) => {
  if (payload?.command != "execute")
    return null

  return `Script executado: ${payload.args}.`
}

export const neighborsHandler: Handler<Payload, string> = (payload: Payload) => {
  if (payload?.command != "neighbors")
    return null

  return `Neighbors for depth of ${payload.args} of this instance.`
}