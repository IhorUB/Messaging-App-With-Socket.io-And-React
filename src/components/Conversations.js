import { ListGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversionsProvider";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup variant="flash">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
