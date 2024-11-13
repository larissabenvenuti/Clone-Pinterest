import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles } from './style';

type PropsButton = {
  title: string | number;
  icon?: JSX.Element;
  propsBackgroundColor: string;
  handleFunction: () => void;
};

export const Button = ({ title, icon, propsBackgroundColor, handleFunction }: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[buttonStyles.styleButton, { backgroundColor: propsBackgroundColor }]}
    >
      <View style={buttonStyles.iconButtonContent}>
        {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
        <Text style={buttonStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
