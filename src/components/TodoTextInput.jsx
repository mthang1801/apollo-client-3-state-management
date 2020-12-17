import React from "react";
import styled from "styled-components";
const Input = styled.input`
  padding : 0.7rem 0.85rem;
  outline : none ; 
  border : 1px solid var(--mainBlack);
  border-radius : 5px;
`
const TodoTextInput = ({ placeholder, onSave, newTodo }) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    const value = e.target.value.trim();
    if (e.which === 13) {
      onSave(value);
      if (newTodo) {
        setText("");
      }
    }
  };
  return (
    <Input
      type="text"
      value={text}
      placeholder={placeholder}
      autoFocus={true}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoTextInput;
