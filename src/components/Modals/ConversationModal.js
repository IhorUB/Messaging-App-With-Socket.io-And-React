import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../../context/ContactsProvider";
import { useConversations } from "../../context/ConversionsProvider";

export default function ConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((selectedId) => {
          return selectedId !== contactId;
        });
      }
      return [...prevSelectedContactIds, contactId];
    });
  };

  return (
    <>
      <Modal.Header closeButton>Create conversations</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group key={contact.id} id={contact.id}>
              <Form.Check
                type="checkbox"
                label={contact.name}
                value={selectedContactIds.includes(contact.id)}
                onChange={() => handleCheckboxChange(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit" className="mt-3">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
