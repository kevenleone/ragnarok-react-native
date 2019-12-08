import styled from 'styled-components/native';

function handleWidth({ width }) {
  return `width: ${width || 33}%`;
}

export const View = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Item = styled.View`
  ${handleWidth}
`;

export const Text = styled.Text`
  margin-right: 20px;
  font-size: 16px;
  color: #555;
`;

export const ProgressView = styled.View`
  width: 50%;
  margin-top: 5px;
`;
