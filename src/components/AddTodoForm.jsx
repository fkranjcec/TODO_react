import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null); // to reference a value not needed for rendering and also if you want to access directly an HTML DOM element and call functions on those elements

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddTodoClick = (event) => {
    event.preventDefault();

    if (!newItem || !newItem.trim()) {
      return;
    }

    addTodo(newItem);
    setNewItem("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Form>
      <InputGroup size="lg">
        <Form.Control
          placeholder="Add todo"
          onChange={handleChange}
          value={newItem}
          autoFocus
          ref={inputRef}
        />

          <Button
            variant="outline-secondary"
            onClick={handleAddTodoClick}
            type="submit"
          >
            Add
          </Button>
      </InputGroup>
    </Form>
  );
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodoForm;