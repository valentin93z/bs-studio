import { useEffect, useState } from "react"

export const useValidation: any = (value: any, validations: any) => {

    const [errorText, setErrorText] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch(validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isPhone':
                    const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                    reg.test(String(value)) ? setPhoneError(false) : setPhoneError(true);
                    break;
                default:
                    console.log('Ошибка валидации');
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || phoneError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, phoneError]);

    useEffect(() => {
        if (isEmpty) {
            setErrorText('Заполните поле');
        }
        else if (minLengthError) {
            setErrorText('Не менее 2 символов');
        }
        else if (maxLengthError) {
            setErrorText('Не более 15 символов');
        }
        else if (phoneError) {
            setErrorText('Неверно указан номер телефона');
        } else {
            setErrorText('');
        }
    }, [isEmpty, minLengthError, maxLengthError, phoneError]);

    return {errorText, isEmpty, minLengthError, maxLengthError, phoneError, inputValid};
}