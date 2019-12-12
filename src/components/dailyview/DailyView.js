import React from "react";
import Styled from "styled-components";
import DayView from "./DayView";

const Dailywrapper = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    margin: 2% auto;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    box-shadow: 0 8px 15px 0 rgba(0,0,0,0.5);
    padding:2%;
    background-color: #ecf0f1;
`;

const DailyView = props => {
  return (
    <Dailywrapper>
    <div stlye={{ display: "flex", flexFlow:"row wrap", justifyContent:"center" }}>
      <h2>
        Weekly Weather Overview
      </h2>
      </div>
        {props.data.map((data, i) => {
          return (      
              <DayView data={data} key={i}/>
          );
        })}
    </Dailywrapper>
  );
};

export default DailyView;
