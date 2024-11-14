import { TextInput } from "react-native";
import { inputStyles } from "./style";

interface PropsInput {
  placeHolder: string;
  placeHolderTextColor: string;
  style?: object;
  typeInput?: boolean;
  value: string;
  onChangeText: (value: string) => void;
}

export const TextInputField = ({
  placeHolder,
  placeHolderTextColor,
  value,
  onChangeText,
  style,
}: PropsInput) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={[inputStyles.inputText, style]}
      placeholder={placeHolder}
      placeholderTextColor={placeHolderTextColor}
      value={value}
    />
  );
};
