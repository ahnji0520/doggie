import styled from "styled-components";
import React, { useEffect } from "react";
import moment from 'moment';

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

const Diary = ({date}) => {
  useEffect(() => {
    console.log('Received date in Diary:', date);
  }, [date]);

  const activeDate = moment(date).format('MMMM D, YYYY');

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
                    />
                    A Bit
                  </Label>  
                </CheckboxContainer>
                <CheckboxContainer>
                  <Img alt="mealRegular" src="image/mealRegular.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                    />
                    Moderate
                  </Label>  
                </CheckboxContainer>
                <CheckboxContainer>
                  <Img alt="mealLarge" src="image/mealLarge.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                    />
                    A Lot
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
                    />
                    A Bit
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="waterRegular" src="image/waterRegular.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                    />
                    Moderate
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="waterBig" src="image/waterBig.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
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
                    />
                    Have
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="x" src="image/x.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
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
                    />
                    Did
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="sadPoo" src="image/sadPoo.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
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
                    />
                    Did
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="x" src="image/x.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
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
                    />
                    Bad
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="mood2" src="image/mood2.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
                    />
                    Neutral
                  </Label>
                </CheckboxContainer>
                <CheckboxContainer> 
                  <Img2 alt="mood3" src="image/mood3.jpg" />
                  <Label>
                    <Checkbox
                      type="checkbox"
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
                  />
                  Met Good Friend
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                  />
                  Met Annoying Friend
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                  />
                  Lonely Day
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                  />
                  Played with toys
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                  />
                  Special Treat
                </Label2>
                <Label2>
                  <Checkbox
                    type="checkbox"
                  />
                  Sick
                </Label2>
              </ColumnBlock>
            </Option>
          </Block>
          <Generate>
            GENERATE DIARY
          </Generate>
        </RightContent>
      </Paper>
    </Background>
  );
};

export default Diary;