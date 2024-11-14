import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles } from './style';

type PropsButton = {
  title: string | number;
  icon?: JSX.Element;
  backgroundColor: string;
  onPress: () => void;
  style?: object;
};

export const Button = ({ title, icon, backgroundColor, onPress, style }: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.2}
      style={[buttonStyles.styleButton, style, { backgroundColor }]}
    >
      <View style={buttonStyles.iconButtonContent}>
        {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
        <Text style={buttonStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
