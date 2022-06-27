import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function OpenConversation() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow--auto"></div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "80px", resize: "none" }}
            />
            <Button type="submit">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
