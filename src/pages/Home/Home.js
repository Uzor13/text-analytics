import React from 'react';
import Header from "../../components/Header/Header";
import Nav from "../../components/Header/Nav";
import Terminal from "../../components/UI/Terminal";
import styled from "styled-components";


const DateText = styled.p`
  padding: 1rem;
  font-size: .9rem;
`

const User = styled.p`
  padding-left: 1rem;
  margin-bottom: 1rem;
`

const Home = () => {
    const date = new Date().toUTCString()

    return (
        <>
            <Header title="Home"/>
            <DateText>Last login: {date}</DateText>
            <User>Uzor's Text Analytics:~  Select Text Analytics Feature</User>
            <Nav/>
        </>
    );
};

export default Home;
