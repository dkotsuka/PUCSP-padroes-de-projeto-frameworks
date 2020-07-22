import { ResolverChain } from "./ResolverChain";
import { Payload } from "./interfaces";
import { searchHandler, uploadHandler, executeHandler, neighborsHandler } from "./Handlers";

const payloadResolverChain = new ResolverChain<Payload, boolean>()

payloadResolverChain.setHandler(searchHandler)
payloadResolverChain.setHandler(uploadHandler)
payloadResolverChain.setHandler(executeHandler)
payloadResolverChain.setHandler(neighborsHandler)

export default payloadResolverChain