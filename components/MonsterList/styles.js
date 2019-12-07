import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Monster = styled.TouchableOpacity`
  backgroundColor: #333;
  margin: 3px;
  width: 48%;
  height: 180px;
  border-radius: 2px;
`;

export const Image = styled.Image`
  resize-mode: stretch;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 100px;
`;

export const Info = styled.View`
  align-items: center;
  padding: 10px;
`;
export const MonsterName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const MonsterRace = styled.Text`
  font-size: 19px;
  color: #fff;
`;