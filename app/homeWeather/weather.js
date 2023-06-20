'use client'

import { useState, useEffect } from "react"
import handler from "../API/proxy"

export default async function Weather (props) {
    const [weather, setWeather] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
    if(loading === true) {
        const handler = async () => {
            const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=Richmond`
            const response = await fetch(url, {cache: 'no-store'});
            const data = await response.json();
      
            setWeather(data)
      }
       handler()
        setLoading(false)

        }
    }, [loading, weather])

    console.log(weather)
    console.log(loading)

   

    return (
        weather?.current?.temp_f?
        <ul>
            <li className='temp'>{`${weather.current.temp_f}`}&deg;F</li>
            <li className='condition'>{weather.current.condition.text}</li>
            <div className='updates'>
            <li className='current'>{weather.current.last_updated}</li>
            <li><button className="button" onClick={() => setLoading(true)}>Is it, really?</button></li>
            </div>
        </ul>
        :<p>Loading...</p>
    )
}