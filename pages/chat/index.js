import { useSession } from "next-auth/react";
import styles from '@/style_modules/chat/chat.module.css'
import MessageBlock from "@/components/message/message";
import { Message } from "@/types/chat/message";
import InsertUser from "@/services/insert_user";

import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

export default function _()
{
  const {data:session} = useSession();

  const [messages, setMessages] = useState([]);

  const [content, setContent] = useState("");

  const [connection, setConnection] = useState();

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:8000/chathub")
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();
    setConnection(connect);
    connect
      .start()
      .then(async () => {
        console.log('Test')
      })
      
      .catch((err) =>
      console.error("Error while connecting to SignalR Hub:", err)
      );
      
      connect.on('ReceiveMessage', (message) => {
        setMessages((prevMessages) => [message,...prevMessages]);
      });

    return () => {
      if (connection) {
        connection.off("ReceiveMessage");
      }
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if(content != '')
    {
      let message = {id:0, content:content, userId:session.user.id, date: new Date()}
      connection?.send('SendMessage', message);
      setContent('')
    }
  };

      return (
        <div>
            {!session && (
              <div><p>Please Login first</p></div>
              )}

            {session && (
              <div>
                <div className={styles.chat}>
                  {messages.map(x => {
                    return (
                      <MessageBlock message={x}/>
                      )
                    })}
                    
                </div>
                    <form>
                <div className={styles.input}>
                    <input type="text" onChange={e => setContent(e.currentTarget.value)} value={content}/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </div>
                    </form>
                </div>
            )}
        </div>
    )
}