import { useState } from "react";
import ButtonSection from "./ButtonSection"
import Display from "./Display";

const Randomizer = () => {
    const [displayValue, setDisplayValue] = useState(0);

    return (
        <>
            <Display displayValue={displayValue} />
            <ButtonSection displayValue={displayValue} setDisplayValue={setDisplayValue}/>
        </>  
    )
};

export default Randomizer;