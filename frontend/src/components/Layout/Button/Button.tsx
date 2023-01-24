import React, {FC} from 'react';
import {StyledButton} from "./Styles";
import ArrowIcon from "../../Icons/ArrowIcon";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    text: string;
    type?: "button" | "submit" | undefined;
    rotate?: boolean;
}

const Button: FC<Props> = ({type, text, rotate, ...props}) => {
    return (
        <StyledButton type={type} form={props.form} onClick={props.onClick} disabled={props.disabled}>
            <div className="split">
                {text}
                <ArrowIcon style={rotate ? {transform: "rotate(180deg)"} : {}}/>
            </div>
        </StyledButton>
    );
}

Button.defaultProps = {
    type: "button"
}

export default Button;