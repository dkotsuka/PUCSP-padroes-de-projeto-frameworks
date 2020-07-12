import { Config } from "./classes/Config";
import { MessagingService } from "./classes/MessagingService";

MessagingService.connect("messaging", (message) => {
  Config.getInstance().fromArgs(JSON.parse(message))
})