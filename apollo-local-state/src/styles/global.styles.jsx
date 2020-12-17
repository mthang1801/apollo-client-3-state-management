import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins");

:root{
  --primaryColor: #3fd0d4;
  --mainWhite: #fff;
  --offWhite: #f7f7f7;
  --mainError : #de1010;
  --mainBlack: #222;
  --mainGrey: #ececec;
  --darkGrey: #cfcfcf;
  --disabled : #656565; 
  --active : #009e03;
  --mainTransition: all 0.3s linear;
  --mainSpacing: 0px;
  --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}

*{
  margin : 0 ;
  padding : 0 ;
  box-sizing: border-box;
}

body {
  font-family : "Lato", sans-serif;
  color : var(--mainBlack);
  background-color: var(--mainWhite);
  line-height: 1.4;
  font-size: 1rem;
  width : 100vw;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  margin-bottom: 1.25rem;
  letter-spacing: var(--mainSpacing);  
}

p{
  margin-bottom: 1.25rem;
}

.btn-white,
.btn-primary {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
}
.btn-white:hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}
.btn-primary {
  background: var(--primaryColor);
  color: var(--mainWhite);
  border: 2px solid var(--primaryColor);
}
.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}

.container{
  display : flex ; 
  flex-direction: column;
  min-height: 100vh;
}

.body{
  flex-grow: 1;
}
`;