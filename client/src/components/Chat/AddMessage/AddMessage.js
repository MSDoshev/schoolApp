import styles from "../Chat.module.css";

import { useForm } from "../../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const AddMessage = ({
    onCreateMessageSubmit
}) => {
    const {fullName, imageUrl} = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
          message: "",
          fullName,
          imageUrl,
        },
        onCreateMessageSubmit
      );



    return(
        <form id="create" method="POST" onSubmit={onSubmit}>
        <div className={styles.inputField}>
          <input
            type="text"
            name="message"
            placeholder="Type your message here"
            value={values.message}
            onChange={changeHandler}
          />
          <input className={styles.btnSubmit} type="submit" value="Send" />
        </div>
      </form>
    );
}