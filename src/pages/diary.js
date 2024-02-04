import styled from "styled-components";
import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #FFEBD8;
  height: 100%;
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
  // border-right: 15px solid #FFC5C5;
`;

const RightContent = styled.div`
  flex: 3;
  flex-direction: column;
  padding: 40px 50px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: 900;
  color: #3C4048;
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 50px;
  margin: 20px 40px;
`;

const Img2 = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 40px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 24px;
  font-weight: 800;
  margin: 0 40px;
`;

const Label2 = styled.label`
  font-size: 24px;
  font-weight: 800;
  margin: 0 40px;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

const Generate = styled.button`
  width: 300px;
  height: 60px;
  font-size: 30px;
  font-family: 'Bitter', serif;
  font-weight: 900;
  background-color: #FFC5C5;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 30px;
  margin-top: -20px;

  &:hover{
    color: #3C4048;
    background-color: #EEEDEB;
  }
`;

const Diary = ({ date, owner, age, gender }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Received date in Diary:', date);
  }, [date]);

  const activeDate = moment(date).format('MMMM D, YYYY');

  const [selectedOptions, setSelectedOptions] = useState({
    food: "",
    water: "",
    snack: "",
    walk: "",
    poop: "",
    mood: "",
    event: "",
    date: date,
    owner: owner,
    age: age,
    gender: gender
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [category]: value,
    }));
  };

  const handleGenerateDiary = () => {
    const requestData = {
      food: selectedOptions.food,
      water: selectedOptions.water,
      snack: selectedOptions.snack,
      walk: selectedOptions.walk,
      poop: selectedOptions.poop,
      mood: selectedOptions.mood,
      event: selectedOptions.event,
      diary_date: moment(date).format("YYYY-MM-DD"), 
      owner: owner, 
      age: age, 
      gender: gender,
    };

    axios
      .post('http://127.0.0.1:8000/api/diary/create', requestData)
      .then((response) => {
        console.log("Diary generated successfully:", response.data);
        navigate('/read');
      })
      .catch((error) => {
        console.error("Error generating diary:", error);
      });
  };

  return(
    <Background>
      <Paper>
        <LeftContent>
          {activeDate}
        </LeftContent>
        <RightContent>
          <Block>
            <Option>
              1. MEAL
              <RowBlock>
                <CheckboxContainer>
                  <Img alt="mealSmall" src="image/mealSmall.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("food", "none")}
                    />
                    None
                  </Label>  
                </CheckboxContainer>
                <CheckboxContainer>
                  <Img alt="mealRegular" src="image/mealRegular.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("food", "a bit")}
                    />
                    A Bit
                  </Label>  
                </CheckboxContainer>
                <CheckboxContainer>
                  <Img alt="mealLarge" src="image/mealLarge.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("food", "moderate")}
                    />
                    Moderate
                  </Label>  
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              2. WATER
              <RowBlock>
                <CheckboxContainer> 
                  <Img2 alt="waterSmall" src="image/waterSmall.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("water", "a bit")}
                    />
                    A Bit
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="waterRegular" src="image/waterRegular.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("water", "moderate")}
                    />
                    Moderate
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="waterBig" src="image/waterBig.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("water", "a lot")}
                    />
                    A Lot
                  </Label>
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              3. SNACKS
              <RowBlock>
                <CheckboxContainer> 
                  <Img2 alt="snack" src="image/snack.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("snack", "have")}
                    />
                    Have
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="x" src="image/x.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("snack", "have not")}
                    />
                    Have Not
                  </Label>
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              4. POOP
              <RowBlock>
                <CheckboxContainer> 
                  <Img2 alt="happyPoo" src="image/happyPoo.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("poop", "did")}
                    />
                    Did
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="sadPoo" src="image/sadPoo.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("poop", "did not")}
                    />
                    Did Not
                  </Label>
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              5. WALK
              <RowBlock>
                <CheckboxContainer> 
                  <Img2 alt="walk" src="image/walk.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("walk", "did")}
                    />
                    Did
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="x" src="image/x.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("walk", "did not")}
                    />
                    Did Not
                  </Label>
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              6. MOOD
              <RowBlock>
                <CheckboxContainer> 
                  <Img2 alt="mood1" src="image/mood1.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("mood", "bad")}
                    />
                    Bad
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="mood2" src="image/mood2.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("mood", "neutral")}
                    />
                    Neutral
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="mood3" src="image/mood3.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                      onChange={() => handleCheckboxChange("mood", "good")}
                    />
                    Good
                  </Label>
                </CheckboxContainer>
              </RowBlock>
            </Option>
          </Block>
          <Block>
            <Option>
              7. EVENTS
              <ColumnBlock>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "good friend")}
                  />
                  Met Good Friend
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "bad friend")}
                  />
                  Met Annoying Friend
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "new toy")}
                  />
                  Lonely Day
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "alone day")}
                  />
                  Played with toys
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "special treat")}
                  />
                  Special Treat
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleCheckboxChange("event", "sick")}
                  />
                  Sick
                </Label2>
              </ColumnBlock>
            </Option>
          </Block>
          <Generate onClick={handleGenerateDiary}>
            GENERATE DIARY
          </Generate>
        </RightContent>
      </Paper>
    </Background>
  );
};

export default Diary;