import React from "react";
import Header from "../containers/Header"
import GlobalStyles from "../styles/global.styles"
import MainSection from "../containers/MainSection"
function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <MainSection/>
    </div>
  );
}

export default App;
