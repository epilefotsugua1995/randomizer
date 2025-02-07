import ButtonRound from "./ButtonRound";

type ButtonMinusProps = {
  displayValue: number;
  setDisplayValue: (num: number) => void;
}

const ButtonMinus = (props: ButtonMinusProps) => {
  function handleClick() {
    let newValue = props.displayValue - 1;
    if (newValue < 0) newValue = 0
    props.setDisplayValue(newValue);
  }

  return <ButtonRound onClick={() => handleClick()}>-</ButtonRound>;
}

export default ButtonMinus;