import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from 'react-router-dom';

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "Greet",
      message: "Dobar dan, kako Vam mozemo pomoci?",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Unesite vase ime",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to fix"
    },
    {
      id: "Asking options to fix",
      message: "Postovani {previousValue}, da li imate problem sa internetom ili televizijom?",
      trigger: "Displaying options to fix"
    },
    {
      id: "Displaying options to fix",
      options: [
        {
          value: "solution",
          label: "Internet",
          trigger: "Asking for  solution"
        },
        { value: "burger", label: "TV", trigger: "Burger Not available" }
      ]
    },
    {
      id: "Burger Not available",
      message:
        "Da li ste pokusali da restartujete STB uredjaj?",
      trigger: "Asking for solution after burger"
    },
    {
      id: "Asking for solution after burger",
      options: [
        { value: true, label: "Yes", trigger: "Asking for  solution" },
        { value: false, label: "No", trigger: "Done" }
      ]
    },
    {
      id: "Asking for  solution",
      message: "Da li na uredjaju svetle prve 3 lampice?",
      trigger: "Adding  solution"
    },
    {
      id: "Adding  solution",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            handleClick();
            return "Done";
          }
        },
        { value: false, label: "No", trigger: "Done" }
      ]
    },

    {
      id: "Adding",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            handleClick();
            return "Done";
          }
        },
        { value: false, label: "No", trigger: "Done" }
      ]
    },
    {
      id: "Done",
      message: "Restartujte Vas uredjaj. Ukoliko posle restartovanja ne funkcionise, pozovite korisnicki centar!",
      end: true
    }
  ];
  const history = useHistory();
  const handleClick = () => {
    history.push('/cart');
    alert("Obratite nam se putem mail forme na vrhu stranice");
    window.scrollTo(0, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
