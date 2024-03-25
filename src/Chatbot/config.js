//con este fichero se configura el chatboT
//ademas, aqui mismo se coloca la secuencia de mensajes
import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar.js"
import StartBtn from "./StartBtn.js"
import StartSlow from "./StartSlow.js"

const config = {
  botName: "Empleate con Talento Bot",
  initialMessages: [
    createChatBotMessage(`Bienvenido a nuestro consejero virtual`, {
      widget: "StartBtn",
    }),
  ],
  customComponents: {
    userAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "StartBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "StartSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
    },
  ],
};

export default config;
