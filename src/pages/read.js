import styled from "styled-components";
import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #FFEBD8;
  height: 100vh;
`;

const Paper = styled.div`
  display: flex;
  background-color: white;
  width: 1180px;
  border-radius: 20px;
  margin: 30px 0;
  margin-bottom: 50px;
`;

const LeftContent = styled.div`
  flex: 1;
  padding: 40px;
  font-size: 40px;
  font-weight: 900;
  color: #FBF9F1;
  background-color: #C7DCA7;
  border-radius: 20px 0 0 20px;
`;

const RightContent = styled.div`
  flex: 3;
  flex-direction: column;
  padding: 40px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 800;
  margin-top: 5px;
`;

const Content = styled.div`
  font-size: 25px;
  padding-right: 30px;
  font-weight: 500;
`;

const Read = ({ date }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const formattedDate = moment(date).format('YYYY-MM-DD');

    // 서버에 GET 요청을 보냅니다.
    axios
      .get(`http://127.0.0.1:8000/api/diary/detail/${formattedDate}`)
      .then((response) => {
        console.log("Diary details received successfully:", response.data);
        const [titlePart, ...contentParts] = response.data.content.split('[Content]');
        setTitle(titlePart.replace('[Title]', '').trim());
        setContent(contentParts.join('').trim());
      })
      .catch((error) => {
        console.error("Error fetching diary details:", error);
      });
  }, [date]);

  const activeDate = moment(date).format('MMMM D, YYYY');

  return(
    <Background>
      <Paper>
        <LeftContent>
          {activeDate}
        </LeftContent>
        <RightContent>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </RightContent>
      </Paper>
    </Background>
  )
}

export default Read;