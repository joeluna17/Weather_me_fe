import 'dotenv';
import React from "react";
import socketIoClient from "socket.io-client";
import Loader from "react-loader-spinner";
import "./App.css";
import Styled from 'styled-components';
import CardView from "./components/CardView";
import DailyView from "./components/dailyview/DailyView";

const MainCardWrapper = Styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
`


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "localhost:5000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIoClient(endpoint);
    socket.on("FromAPI", data => {
      this.setState({
         response: data 
        });
    });
  }

  render() {
    const { response } = this.state;
    return (
      <>
        { response ? (
          <MainCardWrapper>
          <CardView title={'Time'} data={response}  />
          <CardView title={'Temperature'} data={response}  />
          <CardView title={'Humidity'} data={response}  />
          <DailyView data={response.daily.data}/>
          </MainCardWrapper>
        ) : (
          <div style={{textAlign:'center', marginTop:'50vH'}}>
            <Loader type="Puff" color="#00BFFF" height={120} width={120} />
          </div>
        )}
      </>
    );
  }
}

export default App;
