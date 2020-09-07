import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 24px;
  color: #264653;
`;

export const Input = styled.input`
  width: 100%;
  margin: 15px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 30px 0;
`;

export const Wrap = styled.div`
  background: #06d6a0;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  padding: 50px;
  margin: 0 auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #264653;
`;

export const Amount = styled.div`
    color: #264653;
`;

export const Select = styled.input`
  margin-left: auto;
  padding: 0 15px;
  border: none;
  outline: none;
  height: 30px;
  border-radius: 5px;
`;
