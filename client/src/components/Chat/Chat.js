import styles from "./Chat.module.css";
import { useContext } from "react";

import { AddMessage } from "./AddMessage/AddMessage";
import { ChatMessage } from "./ChatMessage/ChatMessage";

export const Chat = ({ 
  messages,
  onCreateMessageSubmit 
}) => {
 

console.log(messages);
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>SchoolChat</h2>
      </div>
      <div className={styles.chatBody}>
       

        {messages && messages.map(x => <ChatMessage key={x._id} {...x}/>)}
      </div>
      <div className={styles.chatFooter}>
      <AddMessage onCreateMessageSubmit={onCreateMessageSubmit}/>
      </div>
    </div>
  );
};

