import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  title: string;
};
export const CustomContact = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
