import React from "react";

const Card = ({ item }) => {
    //...............................................................jsx
    return (
        <div className="rounded-md bg-white m-3 border shadow-md p-1 ">
            <tr className="border">
                <td className="px-2 py-2  font-semibold text-indigo-500 text-3xl "></td>
                <td className="px-2 py-2 font-semibold text-gray-500 text-3xl ">
                    {item?.weather[0]?.main}
                </td>
            </tr>
            <tr className="border bg-blue-400 font-bold text-white">
                <td className=" px-2 py-2 ">Date </td>
                <td className=" px-2 py-2 ">
                    {new Date(item.dt * 1000).toLocaleDateString("en-US")}
                </td>
            </tr>
            <tr className="border bg-yellow-100">
                <td className=" px-2 py-2">Temparature</td>
                <td className=" px-2 py-2 text-red-600 font-semibold">
                    {item?.main?.temp} °F
                </td>
            </tr>

            <tr>
                <td className="border px-2 py-2 ">Min</td>
                <td className="border px-2 py-2">Max</td>
            </tr>
            <tr>
                <td className="border px-2 py-2">{item?.main?.temp_min} °F </td>
                <td className="border px-2 py-2">{item?.main?.temp_max} °F</td>
            </tr>
            <tr>
                <td className="border px-2 py-2">Pressure</td>
                <td className="border px-2 py-2">{item?.main?.pressure} mph</td>
            </tr>
            <tr>
                <td className="border px-2 py-2">Humidity</td>
                <td className="border px-2 py-2">{item?.main?.humidity} %</td>
            </tr>
        </div>
    );
};

export default Card;
