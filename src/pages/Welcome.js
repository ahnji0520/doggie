import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #FFEBD8;
  height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  border-radius: 30px;
  background-color: #FBF9F1;
  height: 470px;
  width: 400px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 900;
  margin: 0 auto;
  color: #3C4048;
`;

const Owner = styled.input`
  height: 80px;
  width: 300px;
  margin: 10px auto;
  margin-top: 50px;
  padding: 5px 20px;
  border: 5px solid #C7DCA7;
  border-radius: 20px;
  font-size: 20px;
`;

const Name = styled.input`
  height: 80px;
  width: 300px;
  margin: 10px auto;
  padding: 5px 20px;
  border: 5px solid #C7DCA7;
  border-radius: 20px;
  font-size: 20px;
`;

const Age = styled.input`
  height: 50px;
  width: 300px;
  margin: 10px auto;
  padding: 5px 20px;
  border: 5px solid #C7DCA7;
  border-radius: 20px;
  font-size: 20px;
`;

const Gender = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const CheckboxContainer = styled.div`
  display: flex;
  algin-items: center;
  width: 150px;
  background
`;

const Checkbox = styled.input`
  appearance: none;
  position: relative;
  width: 30px;
  height: 30px;
  border: 5px solid #C7DCA7;
  border-radius: 15px;

  &:checked {
    background-color: #C7DCA7;
  }
`;

const CheckboxLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #3C4048;
  margin: 5px 15px;
`;

const Button = styled(NavLink)`
  width: 150px;
  margin: 30px auto;
  text-decoration: none;
  padding: 10px;
  padding-left: 60px;
  font-size: 30px;
  font-weight: 900;
  font-family: 'Bitter', serif;
  color: #3C4048;
  background-color: #FFC5C5;
  border-radius: 60px;
  border: none;

  &:hover{
    color: white;
  }
`;

const Welcome = ({ owner, setOwner, name, setName, age, setAge, gender, setGender }) => {
  const handleStartClick = async () => {
    try {
      const response = await axios.post('your-server-endpoint', { ownerName: owner }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Server successfully received owner\'s name.');
      } else {
        console.error('Failed to send owner\'s name to the server.');
      }
    } catch (error) {
      console.error('Error while sending data to the server:', error);
    }
  };
  
  return(
    <>
      <Background>
        <Block>
          <Title>ABOUT DOGGIE</Title>
          <Owner placeholder="OWNER'S NAME" value={owner} onChange={(e) => setOwner(e.target.value)} />
          <Name placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
          <Age placeholder="AGE" value={age} onChange={(e) => setAge(e.target.value)}/>
          <Gender>
            <CheckboxContainer>
              <Checkbox type="checkbox" name="gender" value={gender} onChange={(e) => setGender('boy')} />
              <CheckboxLabel>BOY</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox type="checkbox" name="gender" value={gender} onChange={(e) => setGender('girl')}/>
              <CheckboxLabel>GIRL</CheckboxLabel>
            </CheckboxContainer>
          </Gender>
          <Button to='/home' onClick={handleStartClick}>
            START
          </Button>
        </Block>
      </Background>
    </>
  );
};

export default Welcome