import { KeyboardEventHandler, useEffect, useState } from "react"
import { MessageContainer, MessageInput, WebhookMessageBox } from "./styles";
import { Input, Stack } from "@mui/material";
import axios from "axios";

interface WebhookMessage {
  message: string
}

function App() {
  const [messages, setMessages] = useState<WebhookMessage[]>([]);

  useEffect(() => {
    const ws = new WebSocket("wss://chatbackend-m9rr.onrender.com");

    ws.onopen = () => {
      console.log('Connected to server!');
    }

    ws.onmessage = (event) => {
      const message:WebhookMessage = JSON.parse(event.data);

      setMessages((prev) => [...prev, message]);
    }

    ws.onclose = () => {
      console.log("Disconnected!");
    }

    return () => {
      ws.close();
    }
  }, [])

  const handleMessageSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      axios.post("https://chatbackend-m9rr.onrender.com/webhook", {
        message: (event.target as HTMLInputElement).value
      })
    }
  };

  return (
    <>
      <Stack height={"100vh"} alignItems={"center"} justifyContent={"space-between"} paddingTop={4} paddingBottom={4}>
        <Stack height={"90%"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <MessageContainer className="masked-overflow" >
            {messages.map((msg, index) => 
              <WebhookMessageBox key={index}>{msg.message}</WebhookMessageBox>
            )}
          </MessageContainer>
        </Stack>

        <MessageInput type="text" onKeyUp={handleMessageSubmit}></MessageInput>
        
      </Stack>
    </>
  )
}

export default App
