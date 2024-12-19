import { TextStyled } from "./styled";

interface Text {
  text?: string;
  messageErrors?: string;
}

const Message = ({ text, messageErrors }: Text) => {
  return (
    <TextStyled $messageErrors={messageErrors}>
      {text}
      {messageErrors}
    </TextStyled>
  );
};

export default Message;
