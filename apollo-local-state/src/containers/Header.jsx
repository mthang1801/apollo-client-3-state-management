import React from 'react'
import Header from "../components/Header"
import {todoMutations} from "../operations/mutations"

const HeaderContainer = () => (
  <Header addTodo={todoMutations.addTodo}/>
)

export default HeaderContainer
