import React,{useState,useEffect} from 'react';

function Weatherdata(){
    
    const key ='e624663fa43f10108456852a73658e56';
    const [feels_like,setFeelsLike]=useState('');
    const [mainTemp,setMainTemp1]=useState('');
    const [description,setDescription]=useState('');
    const [main1,setMain]=useState('');

    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid='+key)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFeelsLike(data.main.feels_like);
            setMainTemp1(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
        })
    },[])
    return(
        <>
        <tr>
            <td>{mainTemp}</td>
            <td>{feels_like}</td>
            <td>{main1}</td>
            <td>{description}</td>
        </tr> 
        </>
    )
    }
export default Weatherdata;