import { Peer } from "./classes/Peer"

const peer = new Peer(process.env.PORT);

process.stdin.on('data', data => {
  const [command, ...args] = data.toString().replace(/\n/g, "").split(" ")

  const payload = { command }

  try {
    args.map(arg => {
      if (arg.split(":").length !== 2)
        throw Error("ERROR: Arguments must be formatted as name:value");

      const [attribute, value] = arg.split(":")
      payload[attribute] = value
    })
  } catch (error) {
    return console.log(error.message)
  }

  peer.execute(payload)
})

