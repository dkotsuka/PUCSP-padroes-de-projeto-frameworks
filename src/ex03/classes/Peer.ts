import * as net from "net"
export class Peer {
  private port
  private connections

  constructor(port) {
    this.port = port;
    this.connections = [];

    const server = net.createServer((socket) => {
      console.log("alguém connectou")
    });

    server.listen(port, () => console.log("Ouvindo porta " + port))
  }

  connectTo(address) {
    if (address.split(":").length !== 2)
      throw Error("O endereço do outro peer deve ser composto por host:port ");

    const [host, port] = address.split(":");

    const socket = net.createConnection({ port, host }, () =>
      console.log("Conexão criada")
    );
  }
}