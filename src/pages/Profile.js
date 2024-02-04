import styled from "styled-components";

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

const Text = styled.p`
  font-size: 30px;
  font-weight: 900;
  margin: 5px auto;
  color: #3C4048;
`;

const Img = styled.img`
  overflow: hidden;
  border-radius: 200%;
  width: 200px;
  margin: 30px auto;
`;

const Profile = ({ name, age, boy, girl }) => {
  return(
    <Background>
      <Block>
        <Title>PROFILE.</Title>
        <Img alt="snoopy" src="image/snoopy.jpg" />
        <Text>{name}</Text>
        <Text>{age} years old</Text>
        <Text>{boy ? 'Boy' : 'Girl'}</Text>
        <Title>_</Title>
      </Block>
    </Background>
  );
};

export default Profile