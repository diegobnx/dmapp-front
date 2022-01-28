import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;
  background-color: #fff;
  font-family: roboto, sans-serif;
  color: #22ff;
  margin-bottom: 5px;
`;

export const Logo = styled.div`
  padding: 25px 0;
`;

export const NavMenu = styled.div`
  ul {
    display: flex;
  }
  ul li {
    margin-left: 25px;
    margin-bottom: 5px;
    margin-top: 25px;
    list-style: none;
    border: 10px solid transparent;
    color: #55FF;
    transition: all 0.3s ease-out 0.2s;
    padding: 15px 0;
    font-size: 20px;
  }
  ul li:hover {
    color: #22ff;
    border-bottom: 3px solid #22ff;
    cursor: pointer;
    padding: 10px 0;
    font-weight: bold;
    transition: all 0.3s ease-out 0s;
  }
`;

export const Account = styled.div`
  ul {
    display: flex;
  }
  ul li {
    margin-left: 15px;
    margin-bottom: 5px;
    margin-top: 20px;
    list-style: none;
    border: 10px solid transparent;
    color: #55ff;
    transition: all 0.3s ease-out 0.2s;
    padding: 15px 0;
    font-size: 20px;
  }
  ul li:hover {
    color: #22ff;
    border-bottom: 3px solid #22ff;
    cursor: pointer;
    padding: 10px 0;
    font-weight: bold;
    transition: all 0.3s ease-out 0s;
  }
`;