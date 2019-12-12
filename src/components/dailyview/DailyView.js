import React from "react";
import Styled from "styled-components";
import DayView from "./DayView";

const Dailywrapper = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align:center;
    width: 1024px;
    margin: 2% auto;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    box-shadow: 0 8px 15px 0 rgba(0,0,0,0.5);
    padding:2%;
    background-color: #ecf0f1;
    overflow:scroll;
`;

const DailyView = props => {
  return (
    <Dailywrapper>
     <h2 style={{width:'100%'}}>
        Weekly Weather Overview 
      </h2>
     
        {props.data.map((data, i) => {
          return (      
              <DayView data={data} key={i}/>
          );
        })}
    </Dailywrapper>
  );
};

export default DailyView;
