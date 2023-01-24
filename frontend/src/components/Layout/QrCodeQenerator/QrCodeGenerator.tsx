import React, {FC} from 'react';
import QRCode from "react-qr-code";

interface Props {
    ssid: string;
    password: string;

}

const QrCodeGenerator: FC<Props> = ({ssid, password}) => {
    return <QRCode value={`WIFI:T:WPA;S:${ssid};P:${password};;`} size={120}/>
}

export default QrCodeGenerator;