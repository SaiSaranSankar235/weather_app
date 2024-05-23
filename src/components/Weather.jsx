import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import SearchCity from "./Search";
import Loader from "./Loader";

const WeatherApp = () => {
    const [city, setCity] = useState("visakhapatnam");
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    //...........................................................................events

    const getForecast = async () => {
        setLoading(true);

        try {
            const enteredCity = city?.trim()?.toLowerCase();
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${enteredCity}&appid=${apiKey}`
            );
            if (response?.data?.cod === "200") {
                setForecast(response?.data?.list?.slice(0, 5));
                setError(null);
            }
        } catch (err) {
            setError("Forecast not available , Enter valid city name");
            setForecast(null);
            setCity("");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getForecast();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //.....................................................................................jsx

    return (
        <div className="flex flex-col items-center  min-h-screen  bg-gradient-to-r from-[#FFFF9D]  via-[#90cddc] ">
            <SearchCity
                city={city}
                setCity={setCity}
                getForecast={getForecast}
            />

            {loading ? (
                <Loader />
            ) : error ? (
                <p className="text-red-500 font-semibold bg-white p-2 rounded">
                    {error}
                </p>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {forecast &&
                        forecast.map((item) => {
                            return <Card key={item?.dt} item={item} />;
                        })}
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
