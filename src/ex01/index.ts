import { messagingService } from "./classes/MessagingService";
import { connectionManager } from "./classes/ConnectionManager";
import { config } from "dotenv"

config()

//Setando a configuração por múltiplos canais
connectionManager.setConfigValues({ host: "http://localhost", port: 3000 })
connectionManager.setConfigValues({ username: "admin", password: "admin" })

connectionManager.loadConfigFrom("ENV")
  .then(() => console.log(connectionManager.getConfig()))

connectionManager.loadConfigFrom("JSON")
  .then(() => console.log(connectionManager.getConfig()))

//adiciona um listener para um serviço de mensageria
messagingService.connect(connectionManager.onChangeConfig)
//método para simular o disparo de mensagem no serviço
messagingService.messageTest()

const result = connectionManager.execute("QUERY STRING")
console.log(result)



