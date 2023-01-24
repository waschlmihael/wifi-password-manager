import React, {FC} from 'react';
import {StyledSpinner} from "./Style";

interface Props {

}

const Spinner: FC<Props> = (props) => {
    return (
        <StyledSpinner>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledSpinner>
    );
}

export default Spinner;