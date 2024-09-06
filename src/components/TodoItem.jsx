import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

export default class TodoItem extends React.Component {
  handleToggleTodoClick = () => {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  };

  handleRemoveTodoClick = event => {
    event.stopPropagation();

    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  };

  render() {
    const { todo } = this.props;
    const textClass = todo.completed ? 'todo-item__completed' : null;

    return (
      <ListGroup.Item className="todo-item">
        <span className="todo-item_item" onClick={this.handleToggleTodoClick}>
          <Form.Check readOnly checked={todo.completed} inline />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span
          className="todo-item__delete-button"
          onClick={this.handleRemoveTodoClick}
        >
          ×
        </span>
      </ListGroup.Item>
    );
  }
}

TodoItem.propTypes = {
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todo: PropTypes.object,
};
