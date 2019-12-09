import styled from 'styled-components/native';

function handleBackgroundColor({ color }) {
  return `background-color: ${color || '#333'}`;
}

function handleWidth({ width }) {
  if (width) {
    return `width: ${width}%`;
  }
  return '';
}

export const Monster = styled.TouchableOpacity`
  ${handleBackgroundColor}
  ${handleWidth}
  margin: 3px;
  height: 150px;
  border-radius: 2px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  resize-mode: stretch;
`;

export const IconView = styled.View`
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
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
