import React,{useState,useEffect} from 'react';

function Weatherdata(){
    
    const key="3db3178688864d9d83540815212607";

    const[all_data,setAllData]=useState('');

    const[city_name,setCityName]=useState('nagpur');

    useEffect(()=>{
        const getTemp=async()=>{
          fetch('http://api.weatherapi.com/v1/current.json?key='+key+'>&q='+city_name+'')
          .then(res=>res.json())
          .then(abc=>{
            setAllData(abc.current);

          })
        };

        getTemp();

    },[city_name] )

    var a=10;

  return (
    <div className="container mt-3">
        <div className="row mb-3">
            <div className="col-md-12">
            <input type="text" class="form-control" value={city_name} onChange={(e)=>{setCityName(e.target.value)}} placeholder="Enter City Name"/>
            </div>

        </div>
      <table class="table table-dark table-hover">

        
        <thead>
        <tr>
            <th scope="col"> Max Temp</th>
            <th scope="col">Min-Temp</th>
            <th scope="col">Pressure</th>
            <th scope="col">Humidity</th>
            </tr>
        </thead>
        <tbody>

            <tr>
             
                <td>
                  
                {typeof all_data=="undefined" ? "Loding" : all_data.temp_c} °
                </td>
                {/* <td>
                {typeof all_data=="undefined" ? "Loding" : all_data.temp_min} °
                </td>
                <td>
                {typeof all_data=="undefined" ? "Loding" : all_data.pressure}
                </td>
                <td>
                {typeof all_data=="undefined" ? "Loding" : all_data.humidity}
                </td> */}
                
            
            </tr>
        </tbody>
      </table>
    </div>
  );
    }
export default Weatherdata;
