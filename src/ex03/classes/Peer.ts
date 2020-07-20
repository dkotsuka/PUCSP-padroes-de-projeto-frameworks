import * as net from "net"
export class Peer {
  private port
  private connections

  constructor(port) {
    this.port = port;
    this.connections = [];

    const server = net.createServer((socket) => {
      this.onSocketConnected(socket)
    });

    server.listen(port, () => console.log("Ouvindo porta " + port))
  }

  connectTo(address) {
    if (address.split(":").length !== 2)
      throw Error("O endereço do outro peer deve ser composto por host:port ");

    const [host, port] = address.split(":");

    const socket = net.createConnection({ port, host }, () =>
      this.onSocketConnected(socket)
    );
  }

  onSocketConnected(socket: net.Socket) {
    console.log("Nova conexão");
    this.connections.push(socket);
    socket.on('data', (data) =>
      this.onData(socket, data)
    );

    this.onConnection(socket);
  }

  onData(socket, data) { }

  onConnection(socket: net.Socket) { }

  broadcast(data) {
    this.connections.forEach(socket => socket.write(data))
  }
}