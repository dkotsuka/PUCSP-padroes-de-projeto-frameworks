import { Peer } from "./classes/Peer"

const peer = new Peer(process.env.PORT);

process.argv.slice(2).forEach(otherPeerAddress =>
  peer.connectTo(otherPeerAddress)
);

process.stdin.on('data', data => {
  const [command, ...args] = data.toString().replace(/\n/g, "").split(" ")

  if (command == "connect") {
    return peer.connectTo(`localhost:${args[0]}`)
  }

  peer.execute({ command, args })
})

