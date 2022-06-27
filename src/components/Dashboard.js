import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";
import { useConversations } from "../context/ConversionsProvider";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex h-100vh">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
