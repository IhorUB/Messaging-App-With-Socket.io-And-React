import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Modal } from "react-bootstrap";

import Conversations from "./Conversations";
import Contacts from "./Contacts";
import ConversationModal from "./Modals/ConversationModal";
import ContactModal from "./Modals/ContactModal";

const CONVERSATION_KEY = "Conversations";
const CONTACTS_KEY = "Contacts";

export default function Sidebar({ id }) {
  const [activeTab, setActiveTab] = useState(CONVERSATION_KEY);
  const [showModal, setShowModal] = useState(false);

  const isConversation = activeTab === CONVERSATION_KEY;
  const closeModal = () => setShowModal(false);

  return (
    <div className="d-flex flex-column sidebar">
      <div className="flex-grow-1">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey={CONVERSATION_KEY} title={CONVERSATION_KEY}>
            <Conversations />
          </Tab>
          <Tab eventKey={CONTACTS_KEY} title={CONTACTS_KEY}>
            <Contacts />
          </Tab>
        </Tabs>
      </div>

      <div className="small border-top p-2">
        You id is <strong className="text-muted">{id}</strong>
      </div>
      <Button className="rounded-0" onClick={() => setShowModal(true)}>
        New {isConversation ? "Conversations" : "Contacts"}
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        {isConversation ? (
          <ConversationModal closeModal={closeModal} />
        ) : (
          <ContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
