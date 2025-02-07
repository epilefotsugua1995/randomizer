import ButtonMinus from "./ButtonMinus";
import ButtonRandomize from "./ButtonRandomize";
import ButtonPlus from "./ButtonPlus";
import styled from '@emotion/styled';

type ButtonSectionProps = {
  displayValue: number;
  setDisplayValue: (num: number) => void;
}

const StyledDiv = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonSection = (props: ButtonSectionProps) => {
  return (
    <StyledDiv>
      <ButtonMinus displayValue={props.displayValue} setDisplayValue={props.setDisplayValue} />
      <ButtonRandomize setDisplayValue={props.setDisplayValue} />
      <ButtonPlus displayValue={props.displayValue} setDisplayValue={props.setDisplayValue} />
    </StyledDiv>
  );
};

export default ButtonSection;