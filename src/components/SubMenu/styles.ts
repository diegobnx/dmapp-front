import styled from 'styled-components';
import img from '../../images/bg.png'
import searchicon from '../../images/searchicon.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  opacity: 0.9;
  border-radius: 15px;
  margin-top: 250px;
  width: 800px;
  height: 150px;
  box-shadow: 0px 0px 5px #000;
`;

export const SearchField = styled.input`
  display: flex;
  background-image: url(${searchicon});
  background-position: 10px 12px;
  background-repeat: no-repeat;
  padding-left: 40px;
  margin: 0 50px;
  width: 500px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #22ff;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  padding: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 55px;
  width: 130px;
  background-color: #22ff;
  color: #ffffff;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  
  &:hover {
    background-color: #ffffff;
    color: #22ff;
    border: 1px solid #22ff;
    transition: all 0.5s ease-out 0s;
  }
`;