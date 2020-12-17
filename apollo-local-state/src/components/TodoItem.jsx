import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ todo, actions }) => {
  const [editing, setEditing] = useState(false);
  const [textTodo, setEditTodo] = useState(todo.text);
  const [oldText, setOldText] = useState(todo.text)
  const handleEditTodo = (e) => {
    if (e.which === 13 && e.target.value.trim().length) {     
      actions.editTodo(todo.id, e.target.value);  
      setEditing(false);
    }    
  };

  const handleExitEdit = () => {
    setEditTodo(oldText);
    setEditing(false);
  }
  return (
    <Wrapper>
      <span className="w5">
        <input
          type="checkbox"
          checked={todo.completed}
          value={todo.completed}
          onChange={() => actions.toggleCompleteTodo(todo.id)}
        />
      </span>
      {editing ? (
        <span className="w60 edit-input">
          <input
            type="text"
            value={textTodo}
            onKeyDown={handleEditTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <span className="exit-edit" onClick={handleExitEdit}>&times;</span>
        </span>
      ) : (
        <span className="w60" onDoubleClick={() => setEditing(true)}>
          {todo.text}
        </span>
      )}

      <span className={`w20 center ${todo.completed ? "completed" : "active"}`}>
        {todo.completed === true ? "Completed" : "Active"}
      </span>
      <span className="w15 center">
        <button type="button" onClick={() => actions.deleteTodo(todo.id)}>
          &times;
        </button>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem 0;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  .center {
    text-align: center;
  }
  .edit-input{  
    position : relative; 
    input { 
      width : 100% ;
    }
  }
  .exit-edit{
    position : absolute; 
    top : 30% ;
    left : 95%;
    cursor : pointer ;
    &:hover{
      color : var(--mainError);
    }
  }
  input{
    padding : 0.5rem;
    outline : none ;    
  }
  & > * {
    display: block;
    padding: 0.5rem 0;
  }
  .w5 {
    width: 5%;
  }
  .w20 {
    width: 20%;
  }
  .w60 {
    width: 60%;
  }
  .w15 {
    width: 15%;
  }
  .completed {
    color: var(--disabled);
  }

  .active {
    color: var(--active);
  }
  @media screen and (max-width: 768px) {
    .w5 {
      width: 10%;
    }
    .w60 {
      width: 40%;
      max-height: 4.8rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .w15,
    .w20 {
      width: 25%;
    }
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.2em;
    outline: none;
    cursor: pointer;
    transition: var(--mainTransition);
    &:hover {
      color: var(--mainError);
    }
  }
`;

export default TodoItem;
