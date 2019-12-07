import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
flex: 1`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const View = styled.View`
  margin-top: 60px;
  padding: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin-left: 5px;
  margin-bottom: 10px;
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
  margin-left: auto;
  margin-right: 10px;
  width: 120px;
  height: 100px;
`;

export const Info = styled.View`
  padding-left: 10px;
`;
export const MonsterName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
  color: #fff;
`;

export const MonsterRace = styled.Text`
  font-size: 16px;
  color: #dadada;
  font-weight: 600;
`;