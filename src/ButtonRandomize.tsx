import ButtonRectangle from "./ButtonRectangle";

type ButtonRandomizeProps = {
    setDisplayValue: (data: number) => void
}


function ButtonRandomize (props: ButtonRandomizeProps) {
    const handleClick = () => {
        const randomValue = Math.random()
        const bigRandomValue = randomValue*1000
        const randomInteger = Math.floor(bigRandomValue)

        props.setDisplayValue(randomInteger)
    }

    return <ButtonRectangle onClick={handleClick}>Randomize</ButtonRectangle>;
};

export default ButtonRandomize;