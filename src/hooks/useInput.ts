import { useState } from "react"
import { useValidation } from "./useValidation";

export const useInput = (inputValue: any, validations: any) => {

    const [isDirty, setIsDirty] = useState(false);

    const valid = useValidation(inputValue, validations);

    // const onChange = (e: any) => {
    //     setValue(e.target.value);
    // };

    const onBlur = () => {
        setIsDirty(true);
    };

    return { inputValue, onBlur, isDirty, ...valid };
}