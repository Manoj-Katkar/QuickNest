import {View, Text} from 'react-native';
import React from 'react';

type TakeSpaceProps = {
  space?: number;
};

const TakeSpace = (props: TakeSpaceProps) => {
  const {space = 15} = props;

  return <View style={{padding: space}} />;
};

export default TakeSpace;
