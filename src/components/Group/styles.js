import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => (props.className === 'group-card' ? '#fff' : '')};
  width: ${props => (props.className === 'group-card' ? '350px' : '')};
  margin: ${props => (props.className === 'group-card' ? '0 30px 0 0' : '')};
  padding: ${props => (props.className === 'group-card' ? '30px' : '')};
  box-shadow: ${props => (props.className === 'group-card' ? '5px 5px 15px 0px #dddddd' : '')};
  display: ${props => (props.className === 'has-2-columns' ? 'flex' : '')};
  border-radius: 5px;
`;

export const H2 = styled.h2`
  color: #000;
  padding: 0;
  margin: 0 0 30px 0;
  font-family: Oswald, sans-serif;
  font-weight: normal;
  font-size: 28px;
  color: #333;
`;
