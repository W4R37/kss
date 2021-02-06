import "./App.css";
import ChatBot from "./components/chatbot/CustomChatbot";
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from './stores/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const styledTextArea = styled.textarea`display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 178px; `
const StyledButton = styled.button`display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:auto; ` 
const Product = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    padding: 5px 5px 5px 5px;
    justify-content: center;
    align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledImg = styled.img`
    height: 30px;
    width: 30px;
`

const Cart = styled.div`
    width: 20%;
    height: 20%;
    position: absolute;
    top: 0;
    right: 0;
`

const App = () => {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Send email</Link>
      </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ChatBot /> 
          </Route>
          <Route exact path="/cart">
            <CartApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


const CartApp = observer(() => {
    const { productStore } = useStores();
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [address, setAddress] = useState(null);
    const [text, setText] = useState(null);
    return (<Product>
    <h1>
        Send Email
        </h1>
        <StyledRow>
        </StyledRow>
        <form>
        <div>
          <input value={email} onChange={(e) =>setEmail(e.target.value)} type="text" name="email" placeholder="email"></input>
        </div>
            <div>
          <input value={text} onChange={(e) =>setText(e.target.value)} type="text" name="text" placeholder="Question"></input>
            </div>
      <div>
      <button onClick={(e) => 
        {
        e.preventDefault(); 
        productStore.submit({email,text});
        }
        }>
        Submit
        </button>
        </div>
        </form>
    </Product>)
})
export default App;