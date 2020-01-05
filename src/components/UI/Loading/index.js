import React from 'react';
import Valkyrie from '../../../../assets/images/2263.gif';
import { Image, ImageView } from './styles';

const Loading = () => (
  <ImageView>
    <Image source={Valkyrie} />
  </ImageView>
);

export default Loading;
