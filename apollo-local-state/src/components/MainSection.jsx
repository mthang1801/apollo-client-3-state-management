import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VisibilityFilter } from "../models/VisibilityFilter";
import TodoList from "./TodoList";

const MainSection = ({
  todos,
  todosCount,
  completedCount,
  visibilityFilter,
  actions,
}) => {
  const [selectFilter, setSelectFilter] = useState(visibilityFilter.id);
  const handleChangeSelectFilter = (e) => {
    setSelectFilter(e.target.value);
  };

  const handleCheckCompleteAll= () => {
    if(todos.length === completedCount){
      actions.clearCompletedAllTodos();
    }else{
      actions.completeAllTodos();
    }
  }
  return (
    <Section>
      <div className="center">
        <div className="count">
          <h4>Todos Count : {todosCount}</h4>
          <h4>Completed Count: {completedCount}</h4>
        </div>
        <Toolbar>
          <div className="check-completed-all">
            <input
              type="checkbox"
              checked={todos.length === completedCount}
              onChange={handleCheckCompleteAll}
              id="check-all"
            />
            <label htmlFor="check-all"> Completed All</label>
          </div>

          <div className="visibility-filter">
            <select value={selectFilter.id} onChange={handleChangeSelectFilter}>
              {Object.values(VisibilityFilter).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.displayName}
                </option>
              ))}
            </select>
          </div>
        </Toolbar>
        <TodoList visibilityFilter={selectFilter} />
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  .center{
    width : 80vw ; 
    margin: auto;
  }
  .count{
    text-align: center;
  }
  @media screen and (min-width:768px){
    .count{
      display : flex ; 
      justify-content : center;
      &> *:first-child{
        margin-right: 2rem;
      }
    }
  }
  @media screen and(min-width: 992px){
    width : 90%; 
    max-width : 1280px;    
  }
 
`;

const Toolbar = styled.div`
  display : flex ; 
  justify-content : space-between ; 
  align-items : center;
  padding : 1rem 0;
  border-bottom: 1px solid var(--mainBlack);
  imput, select{
    padding : 0.5rem;
  }
`;

export default MainSection;
