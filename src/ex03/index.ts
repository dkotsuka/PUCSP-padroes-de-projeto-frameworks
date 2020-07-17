import { Peer } from "./classes/Peer"

const peer = new Peer(process.env.PORT);

process.argv.slice(2).forEach(otherPeerAddress =>
  peer.connectTo(otherPeerAddress)
);