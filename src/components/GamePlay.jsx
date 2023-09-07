
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from 'react';
import {Button,OutlineButton} from "../styled/Button"
import Rules from './Rules';


const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
       seterror("You have not selected any number");
       return;
    }


    const randomNumber = generateRandomnumber(1, 7);
    setcurrentDice(randomNumber)

    if (selectedNumber === randomNumber) {
      setscore((prev) => prev + randomNumber)
    }
    else {
      setscore((prev) => prev - 2)
    }

    setselectedNumber(undefined);
  }

  const resetScore = () => {
    setscore(0);
  };


  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector seterror={seterror} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
     {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
padding-top:4.6vw;
 .top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
  display: flex;
  gap:5px;
  justify-content: center;
  align-items: center;
  margin-right: 22.5vw;
  margin-top: 30px;
}
`;