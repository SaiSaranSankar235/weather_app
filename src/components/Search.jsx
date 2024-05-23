import React from "react";

const Search = ({ city, setCity, getForecast }) => {
    return (
        <div className="flex flex-col items-center w-full justify-between p-4  m-5 md:flex-row">
            <h1 className="text-[30px] font-bold mb-8 text-blue-700 text-center ml-5">
                Weather in your City
            </h1>
           
            <div className="flex flex-col sm:flex-row mb-4">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(event) => {
                        event.key === "Enter" && getForecast();
                    }}
                    className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border rounded-md focus:outline-blue-600"
                />
                <button
                    onClick={getForecast}
                    className="px-4 py-2 bg-blue-500 mr-5 text-white rounded-md hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                    Get Weather
                </button>
            </div>
        </div>
    );
};

export default Search;
