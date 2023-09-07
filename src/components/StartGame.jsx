import styled from "styled-components"
import {Button} from "../styled/Button"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="imgDiv">
        <img src="/Images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now </Button>
      </div>
    </Container>
  );
};

export default StartGame;

// 
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .imgDiv {
    width: 40%;

    img {
      width: 35vw;
      height: 30vw;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 7vw;
      white-space: nowrap;
    }
  }
`;


//15px--> 1vw
//300px--> 300/15