import styled from '@emotion/styled'


export const Card = styled.li`
  display: flex;
  flex-direction: row;
  background-color: #efeded;
  padding: 0;
  border: 1px solid grey;
  align-items: center;
  margin-bottom: 3px;
`;

export const IsOnline = styled.span`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  display: block;
  padding: 7px;
  margin-left: 10px;
  background-color: ${props => props.status ? 'green' : 'red'};
`;

export const Avatar = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  border-radius: 10px;
`;

export const Name = styled.p`
  margin-left: 15px;
`;
