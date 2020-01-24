import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'
import Fffr from '../images/19-trump.jpg'
import styled from 'styled-components';

const Body = styled.div`
background-color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 5%;
border-top: 3px orange solid;
border-bottom: 3px orange solid; 
`

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
min-width: 300px;
`
const Credit = styled.h5`
font-size: 8px,
margin: 0 auto,
color: black;
text-decoration: none;
`
const CreditTag = styled.a`
text-decoration: none;
color: orange;
`

const DumpismContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid #282c34;
border-radius: 35px;
min-width: 60%;
max-width: 60%;
`
const Text = styled.span`
padding: 10%;
`
const DumpButton = styled.button`
    background-color: #D46742;
    border-radius: 10px;
    color: white;
    font-size: 1.4rem;
    display: inline;
`



const Dumpism = props => {
    const store = useSelector(state => state.newReducer.dumpism);
    const dispatch = useDispatch();

    return (
        <Body>
        <ImgContainer>
            <img src={Fffr} alt="trump cartoon"></img>
            <Credit>
            Image credit: <CreditTag href="https://friendlystock.com">FriendlyStock</CreditTag>
            </Credit>
        </ImgContainer>
        <DumpismContainer>
        <Text>{store}</Text>
        <DumpButton onClick={() => dispatch (actionName())}> New Dumpism </DumpButton>
        </DumpismContainer>
        </Body>
    );
};

export default Dumpism;