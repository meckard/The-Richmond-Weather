import { redirect } from "next/dist/server/api-utils"
import './homeWeather.css'
import Weather from './weather'
import handler from "../API/proxy"


export default async function HomeWeather () {
    

    return (
        <div className='weatherWidget'>
        <h1>It's the Richmond weather</h1>
        <div className='weatherInfo'>
        <Weather />
        </div>
        </div>
    )
}