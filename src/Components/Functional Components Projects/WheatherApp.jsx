import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const apiKey = 'bcf71a78f2714a1c84e85029242402';

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleGetData = () => {
        setIsLoading(true)
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
            .then((res) => {
                setData(res.data);
                console.log(location);
                console.log(res.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div style={{ backgroundColor: '#F9B572' }}>
                <h3 style={{ boxShadow: '0px 12px 8px -2px rgba(0, 0, 0, 1)', textShadow: '5px 5px 8px #b1b1b1', backgroundColor: '#160040' }} className="text-center sticky-top text-light p-3">Weather Application</h3>
                <div className="text-center item-center">
                    <div className="d-flex justify-content-center">
                        <div className='col-3 mx-3'>
                            <label className='my-2' style={{ textShadow: '2px 2px 6px black' }} htmlFor="location">Location :</label>
                            <input onChange={handleChange} style={{ border: '2px solid black', boxShadow: '5px 5px 10px 5px rgb(0, 0, 0, 0.6)', backgroundColor: 'transparent' }} className='form-control' type="text" name="location" id="location" />
                        </div>
                    </div>
                    <button style={{ border: '2px solid black', boxShadow: '5px 5px 10px 5px rgb(0, 0, 0, 0.6)' }} onClick={handleGetData} className="btn btn-outline-dark m-3">Submit</button>
                </div>
                {isLoading ? <div class="m-3 d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : data && (
                    <div className="row text-center mx-3 d-flex justify-content-center">
                        <div className="col-md-4 my-3" style={{ maxWidth: '25rem' }}>
                            <div style={{ boxShadow: '5px 5px 20px 10px rgb(0, 0, 0, 0.8)' }} className="card border-dark">
                                <div className="card-header border-dark">Weather in {data.location.name}, {data.location.region}, {data.location.country}</div>
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Temperature : {data.current.temp_c}°C</h5>
                                    <div>
                                        <p className="card-text">Cloud : {data.current.cloud}</p>
                                        <p className="card-text">Feels Like : {data.current.feelslike_c}°C</p>
                                        <p className="card-text">Condition : {data.current.condition.text}</p>
                                        <p className="card-text">Humidity : {data.current.humidity}%</p>
                                        <p className="card-text">Wind Speed : {data.current.wind_kph} km/h</p>
                                        <p className="card-text">Pressure : {data.current.pressure_mb} mb</p>
                                        <p className="card-text">Visibility : {data.current.vis_km} km</p>
                                        <p className="card-text">UV Index : {data.current.uv}</p>
                                        <p className="card-text">Local Time : {data.location.localtime}</p>
                                    </div>
                                    <img src={data.current.condition.icon} alt="Weather icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default WeatherApp;