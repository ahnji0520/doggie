import styled from "styled-components";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
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
  const [diaryData, setDiaryData] = useState([]);

  const handleDateChange = async (selectedDate) => {
    setDate(selectedDate);

    // 서버에 해당 날짜의 Diary가 있는지 확인
    const matchingDiaryEntry = diaryData.find(entry => entry.calendar_date === selectedDate.toISOString().slice(0, 10));

    // Diary가 있으면 Read 페이지로 이동, 아니면 Diary 페이지로 이동
    if (matchingDiaryEntry) {
      navigate(`/read?selectedDate=${selectedDate}`);
    } else {
      navigate(`/diary?selectedDate=${selectedDate}`);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/diary/list', { month: displayedMonth });
      console.log('Server response:', response.data);
      setDiaryData(response.data);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  const handleViewChange = ({ activeStartDate }) => {
    const month = activeStartDate.toISOString().slice(0, 7);
    setDisplayedMonth(month);
  };

  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, [displayedMonth]); //

  const tileContent = ({ date }) => {
    const matchingDiaryEntry = diaryData.find(entry => entry.calendar_date === date.toISOString().slice(0, 10));

    if (matchingDiaryEntry) {
      const mood = matchingDiaryEntry.mood;
  
      // Define colors based on mood
      const moodColors = {
        bad: "#454545",
        neutral: "#65B741",
        good: "#FFB534",
      };
  
      // Get the color based on mood, default to grey if mood is not recognized
      const circleColor = moodColors[mood] || "#F4EEEE";
  
      return <div className="circle" style={{ backgroundColor: circleColor }}></div>;
    } else {
      // No entry for the date, draw a grey circle
      return <div className="circle" style={{ backgroundColor: "#F4EEEE" }}></div>;
    }
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