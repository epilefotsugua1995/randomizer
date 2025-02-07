import ButtonRound from "./ButtonRound";

type ButtonPlusProps = {
  displayValue: number;
  setDisplayValue: (num: number) => void;
}

const ButtonPlus = (props: ButtonPlusProps) => {
  function handleClick() {
    const newValue = props.displayValue + 1;
    props.setDisplayValue(newValue);
  }

  return <ButtonRound onClick={() => handleClick()}>+</ButtonRound>;
}

export default ButtonPlus;