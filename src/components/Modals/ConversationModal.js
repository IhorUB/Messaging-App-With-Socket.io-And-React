import { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function ConversationModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create conversations</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" className="mt-3">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
