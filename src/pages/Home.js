import styled from "styled-components";
import Calendar from "react-calendar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';
import './Home.css';
import 'react-calendar/dist/Calendar.css';

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #FFEBD8;
  height: 100vh;
`;

const Home = ({date, setDate}) => {
  const navigate = useNavigate();
  const [displayedMonth, setDisplayedMonth] = useState(date.toISOString().slice(0, 7));

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    navigate(`/diary?selectedDate=${selectedDate}`);
  };

  const handleViewChange = ({ activeStartDate }) => {
    const month = activeStartDate.toISOString().slice(0, 7);
    setDisplayedMonth(month);

    axios.post('YOUR_SERVER_ENDPOINT', { date: month })
      .then(response => {
        console.log('Server response:', response.data);
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
      });
  };

  const tileContent = ({ date, view }) => {
    // Custom logic to determine if a circle should be drawn on this date
    // For example, you can check if the date is today or has some special condition
    const shouldDrawCircle = true;

    return shouldDrawCircle ? <div className="circle"></div> : null;
  };

  return(
    <Background>
      <Calendar  
        value={date}
        onClickDay={handleDateChange}
        locale="en" 
        tileContent={tileContent}
        onActiveStartDateChange={handleViewChange} />
    </Background>
  );
};

export default Home