import React from 'react'
import styled from "styled-components"
import TodoTextInput from "./TodoTextInput"
const HeaderWrapper = styled.header`
  text-align: center;
  font-size: 1.5em;
`
const Header = ({addTodo}) => { 
  return (
    <HeaderWrapper>
      <h1>Todos</h1>      
      <TodoTextInput placeholder="What needs to be done?" onSave={text => addTodo(text)} newTodo/>
    </HeaderWrapper>
  )
}

export default Header;



