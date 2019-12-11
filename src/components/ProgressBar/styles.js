import styled from 'styled-components/native';

function handlePercentage({ percent }) {
  return `width: ${percent}%`;
}

function handleColor({ color }) {
  return `background-color: ${color}`;
}

export const Border = styled.View`
  borderRadius: 4px;
  background-color: #eee;
  borderWidth: 0.5px;
  borderColor: #333;
  width: 100%;
  height: 10px;
`;

export const Progress = styled.View`
  ${handlePercentage};
  ${handleColor};
  height: 10px;
`;
