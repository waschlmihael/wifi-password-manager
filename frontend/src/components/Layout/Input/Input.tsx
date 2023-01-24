import React, {FC} from 'react';
import {StyledInput} from "./Styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    required: boolean;
    pattern?: string;
}

const Input: FC<Props> = ({
                              placeholder,
                              required,
                              pattern,
                              ...props
                          }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            required={required}
            type={props.type}
            pattern={pattern}
            {...props}
        />
    );
}

Input.defaultProps = {
    required: true,
    type: "text"
}

export default Input;