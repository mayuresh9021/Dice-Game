// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Home.css'

import styled from 'styled-components';

function Home({toggle}) {
    
  return (
   
        <Container>
        <div>
        <img src='/images/dice/dices.png'/>
        </div>
        <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
        </div>
        
        
        </Container>
            
        
        
  )
}

export default Home

const Container = styled.div`
    max-width:1180px;   
    display:flex;
    height:100vh;
    margin:0 auto;
    align-items:center;
    .content h1{
        font-size:96px;
        white-space:nowrap;
    }

`;
const Button = styled.button`
    color:white;
    padding: 10px 18px;
    background:#000000;
    border-radius:5px;  
    min-width:220px;
    border:none;
    font-size:16px;
    border:1px solid transparent;
    cursor:pointer;
    transition:0.5s background ease-in; 
    &:hover{
        background-color:white;
        border:1px solid black;
        color:black;
        transition:0.3s background ease-in; 
    }
`