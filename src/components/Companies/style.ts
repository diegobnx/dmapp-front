import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #efefef;
`;

export const AnnouceBox = styled.div`
  display: flex;
  width: 35%;
  margin: 35px;
  padding: 15px;
  border: 0;
  border-radius: 10px;
  justify-content: space-between;
  background-color: #fff;
  &:hover {
    box-shadow: 1px 3px 3px 1px rgba(50, 50, 50, 0.77);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  img{
    width: 150px;
  }
`;

export const Bar = styled.div`
  width: 80px;
  height: 4px;
  background-color: #22FF;
  margin-top: -15px;
  margin-bottom: 10px;
`;