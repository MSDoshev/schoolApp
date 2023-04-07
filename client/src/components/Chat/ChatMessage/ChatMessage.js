import styles from "../Chat.module.css";

export const ChatMessage = ({
message, fullName, imageUrl
}) => {
console.log(fullName, imageUrl);

    return( 
    <div className={styles.chatMessage}>
    <img
        src={imageUrl}
        alt={fullName}
        className={styles.chatMessageImage}
      />
      <div className={styles.chatMessageContent}>
        <div className={styles.chatMessageSender}>{fullName}:</div>
        <div className={styles.chatMessageText}>{message}</div>
        </div>
     </div>
      );
}