import React from "react";
import { useEffect, useState } from 'react'
import Styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const Cardwrapper = Styled.div`

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 275px;
    height: 275px
    margin: 2% auto;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    box-shadow: 0 8px 15px 0 rgba(0,0,0,0.5);
    padding:2%;
    background-color: #ecf0f1;
`;

const getTime = () => {
    const today = new Date()
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    return(`${hour}:${min}:${sec}`)
}

const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return(`${month}-${day}-${year}`)
}



const ComponentCard = props => {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    const humidity =  Math.round(props.data.currently.humidity * 100);
    const ratio = 100 - humidity;

    useEffect(()=> {
       setInterval(()=>setTime(getTime()),1000 ) 
       setInterval(()=>setDate(getDate()),1000 )   
    },[time, date])



  const returnBody = t => {
    switch (t) {
      case "Time":
        return( 
        <>
       <h1>{date}</h1>
        <h1>{time}</h1>
        </>
        )
        
      case "Temperature":
        return (
          <>
            <h1> {Math.round(props.data.currently.temperature)}°F </h1>
            <h3> {props.data.currently.summary} </h3>
          </>
        );

      case "Humidity":
        return (
       
          <>
              <Doughnut
                data={{
                  labels: ["Humidity %"],
                  datasets: [
                    {
                      data: [
                         humidity,
                         ratio

                          ],
                      backgroundColor: [
                          "#FF6384",
                          "#FFF"
                          ]
                    }
                  ],  options: { maintainAspectRatio : false }
                }
                
                }
              /><h1>{ humidity }%</h1>
            </>  
         
        
        );

      default:
        return <p>Nothing to show</p>;
    }
  };

  return (
    <Cardwrapper>
    <div style={{felxFlow:'column wrap', justifyContent:'center'}}>
      <h1>{props.title}</h1>
      {returnBody(props.title)}
      </div>
    </Cardwrapper>
  );
};

export default ComponentCard;
