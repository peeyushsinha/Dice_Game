
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {

  
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>

                <img src={`/Images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;
const DiceContainer = styled.div`

margin-top: 2vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

p{
    font-size: 1.6vw;
}

.dice{
    cursor:pointer;
}

`;

