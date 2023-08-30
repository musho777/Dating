import { useEffect, useState } from "react"
import { Layout } from "../../../Components/Layout"
import { Button } from "../../../ui/button"
import { useNavigate } from "react-router-dom"
import * as S from './styles'
import * as G from '../../../GStyles'
import { LocationSvg } from "../../../Components/svg"
import ReactLoading from 'react-loading';


export const LocationPage = ({ title }) => {
    const navigate = useNavigate()
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude, position.coords.longitude)
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported in this browser.");
        }
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            const apiKey = '28727e4f8b14949aa5a160775d858c3e';
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53e16121eeaec7820bc56466927dda1b&units=metric`)
                .then(response => response.json())
                .then(data => {
                    setCity(data)
                    setLoading(false)
                })
                .catch(error => console.log(error));
        }
    }, [latitude, longitude]);

    return <Layout progress={50} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent'}>
        {!loading ? <S.Location>
            <LocationSvg />
            <G.Text2 color="#000">{city?.sys?.country}, {city?.name}</G.Text2>
        </S.Location> : <div>
            <ReactLoading color={'#FF0099'} height={20} width={20} />
        </div>

        }
        <Button
            title={'Continue'}
            top={30}
            onClick={() => navigate('/register/language')}
        />
    </Layout>
}