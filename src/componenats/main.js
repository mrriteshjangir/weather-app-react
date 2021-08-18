import React from 'react';
import Weatherdata from './weather-data.js';

export default function main() {
    return (
        <div className="container mt-5 mb-5">
            <h3 className="h3 mb-3">Get your Weather Information</h3>
            <form>
                <div className="form-control">
                    <label className="form-label">Enter Your City Name :-</label>
                    <input className="form-control" type="Text" name="city"/>
                    <button className="btn btn-success mt-2" >Check</button>
                </div>
            </form>
            <h3 className="h3 mb-3 mt-3">Your Weather Information</h3>
            <div className="row">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Temprature</th>
                        <th>FeelsLike</th>
                        <th>Weather Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <Weatherdata/>      
                </tbody>
            </table>
            </div>
        </div>
    )
}
