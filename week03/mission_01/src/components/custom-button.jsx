import styled from "styled-components";

const CustomButton = () => {
    return (
        <>
            <FirstStyledSweetPotato>
                
            </FirstStyledSweetPotato>

            <FirstStyledSweetPotato color={'orange'}>
                
            </FirstStyledSweetPotato>
        </>
    );
};

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
    &:hover{
        text-decoration: underline;
    }

    background-color: ${props => props.color || 'purple'};
    border: none;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;

    
`
