import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";


import {BackgroundGraphic, BannerContent, ErrorMessage, StyledBanner} from "./Styles";

import {Heading} from "../../Typographi";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import QrCodeGenerator from "../QrCodeQenerator/QrCodeGenerator";

import config from "../../../frontend_config.json";

interface Props {
}

interface InitialStateWifiCredentials {
    ssid: string;
    password: string;
}

interface PasswordApiResponse {
    created_at: string;
    id: number;
    last_accessed: string;
    ssid: string;
    wifi_password: string;
}

const initialStateWifiCredentials: InitialStateWifiCredentials = {
    ssid: "",
    password: ""
}


const Banner: React.FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedSsid, setSelectedSsid] = useState<any>("")
    const [allSsid, setAllSsid] = useState<{ ssid: string }[]>([])
    const [wifiCredentials, setWifiCredentials] = useState<InitialStateWifiCredentials>(initialStateWifiCredentials)
    const [description, setDescription] = useState<string>(config.initialMessage)
    const [heading, setHeading] = useState<string>(config.heading)
    const [error, setError] = useState<string | undefined>("")

    useEffect(() => {
        setLoading(true)
        setDescription(config.initialMessage)
        axios.get(`/api/v1/ssids/`)
            .then((response) => {
                const data = response.data as unknown as PasswordApiResponse[]
                setAllSsid(data)
            })
            .catch((error) => {
                try {
                    console.log(error.response.data);
                    setError('Prišlo je do težav na strežniku!')
                } catch (err) {
                    console.log(error)
                    setError('Prišlo je do težav na strežniku!')
                }
            })
            .finally(() => {
                setLoading(false)
            });
    }, [])

    const resetState = () => {
        setSelectedSsid("");
        setDescription(config.initialMessage);
        setWifiCredentials(initialStateWifiCredentials)
        setLoading(false)
        setError("")
    }

    const handleSetSelectedSsidChange = (e: React.FormEvent<HTMLFormElement>): any => {
        e.preventDefault()
        let err = undefined;
        setError(err)
        // @ts-ignore
        setSelectedSsid(e.target.value)
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)
        axios.get(`/api/v1/ssids/${selectedSsid}`)
            .then((response) => {
                const data = response.data as unknown as PasswordApiResponse
                setSelectedSsid("")
                setDescription(config.secondMessage)
                setWifiCredentials(prevState => ({
                    ...prevState,
                    ssid: data.ssid,
                    password: data.wifi_password
                }))
            })
            .catch((error) => {
                try {
                    console.log(error.response.data);
                    setError('Prišlo je do težav na strežniku!')
                } catch (err) {
                    console.log(error)
                    setError('Prišlo je do težav na strežniku!')
                }
            })
            .finally(() => {
                setLoading(false)
            });
    }

    return (
        <StyledBanner>
            <BackgroundGraphic/>
            <BannerContent>
                <Heading bannerHeading={true} tag={"h1"}>
                    {heading}
                </Heading>
                <p>
                    {description}
                </p>
                {
                    (wifiCredentials.ssid !== "" || wifiCredentials.password !== "")
                        ? <Fragment>
                            <QrCodeGenerator
                                ssid={wifiCredentials?.ssid}
                                password={wifiCredentials?.password}
                            />
                            <Button text={"Return"} type={"button"} onClick={resetState} rotate={true}/>
                        </Fragment>
                        : <Fragment>
                            <form
                                id="ssid_form"
                                className="styled-select"
                                onChange={handleSetSelectedSsidChange}
                                onSubmit={submitForm}
                            >
                                <select>
                                    <option value="">Select Wifi</option>
                                    {
                                        allSsid.map(ssid => {
                                                return <option key={ssid.ssid} value={ssid.ssid}>{ssid.ssid}</option>
                                            }
                                        )
                                    }
                                </select>
                            </form>
                            <ErrorMessage className={!!error ? "display" : undefined}>
                                {error}
                            </ErrorMessage>
                            {
                                loading
                                    ? <Spinner/>
                                    : <Button
                                        form="ssid_form"
                                        text={"Get password"}
                                        type={"submit"}
                                        disabled={selectedSsid ? undefined : true}
                                    />
                            }
                        </Fragment>}
            </BannerContent>
        </StyledBanner>

    );
};



export default Banner;