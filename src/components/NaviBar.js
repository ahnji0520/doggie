import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #FFC5C5;
  height: 120px;
`;

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1180px;
  height: 120px;
`;

const Logo = styled(NavLink)`
  font-family: 'Luckiest Guy', cursive;
  font-size: 60px;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: #3C4048;

  &:hover{
    color: #89B9AD;
  }
`;

const Profile = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  padding: 10px 15px;
  color: #89B9AD;
  background-color: #FBF9F1;
  border-radius: 40px;

  &:hover{
    color: #3C4048;
    background-color: #EEEDEB;
  }
`;

const NaviBar = () => {
  return(
    <>
      <header>
        <Background>
          <HeadBlock>
            <Logo to='/home'>DOGGIE DIARY.</Logo>
            <Profile to='/profile'>PROFILE</Profile>
          </HeadBlock>
        </Background>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NaviBar;