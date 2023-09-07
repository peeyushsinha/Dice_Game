import styled from "styled-components";


const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 13vw;
text-align: center;

h1{
    font-size:7vw;
    line-height: 7vw;
}
p{
    font-size:1.5vw;
    font-weight: 500px;
}
`;