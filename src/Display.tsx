import styled from '@emotion/styled';

type DisplayProps = {
    displayValue?: number;
}

const StyledDiv = styled.div`
    display: flex;
    background-color: lightgray;
    border-style: solid;
    border-color: black;
    border-radius: 5px;
    font-size: 1.5em;
    margin-bottom: 0;
    padding: 20px 80px;
`;

const Display = (props: DisplayProps) => {
    const displayText = props.displayValue?.toString();

    return <StyledDiv>{displayText}</StyledDiv>;
}

export default Display;