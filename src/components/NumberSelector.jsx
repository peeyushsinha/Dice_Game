
import styled from "styled-components";
const NumberSelector = ({ seterror,error,selectedNumber, setselectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler=(value)=>{
        setselectedNumber(value);
        seterror("");
    }
    return (
        <NumberSelectorContainer>
           <p className="err"> {error} </p>
            <div className="flex">
                {arrNumber.map((value, i) => {
                    return <Box
                        isselected={value === selectedNumber}
                        key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
                })}

            </div>
            <p>Select Number</p>

        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display:flex;
flex-direction:column;
align-items: end;
.flex{
    display:flex;
    gap:1.6vw;
}
p{
    font-size: 2vw;
    font-weight: 700px;    
}
.err{
    color:red;
}

`;

const Box = styled.div`
height:5vw;
width: 5vw;
border:1px solid black;
display: grid;
place-items:center;
font-size :1.5vw ;
font-weight:700;
background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;