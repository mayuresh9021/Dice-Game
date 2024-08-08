import  { useState } from 'react'
import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'

function GamePlay() {
  const [score,setScore]=useState(0);
  const[selectedNumber,setSelectedNumber]=useState();
  const [curretnDice,setCurrentDice]=useState(1);
  const[error,setError]=useState();

  const generateRandomNumber =(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
};
const roleDice=()=>{
    if(!selectedNumber){
      setError("Please Select a Number")
      return
    }
    setError("");
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
}


  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector
        setError={setError} error={error}  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        
        </div>
        <RoleDice curretnDice={curretnDice} roleDice={roleDice}/>
        <Button onClick={()=>setScore(0)}>Reset Score</Button>
    </MainContainer>
    
    
  )
}

export default GamePlay

const MainContainer = styled.main`
    margin-top:70px;
    .top_section{
        display:flex;
        justify-content:space-around;
        align-items:center;
        margin-top:10px;
    }
`;
const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
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
    margin-left:790px;
    margin-top:50px;
    &:hover{
        background-color:white;
        border:1px solid black;
        color:black;
        transition:0.3s background ease-in; 
    }
`