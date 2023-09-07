import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 53.3vw;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 1.3vw;
  margin-top: 2.6vw;
  border-radius: 1vw;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 1.6vw;
  }
`;