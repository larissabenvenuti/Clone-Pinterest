import { TextInput } from "react-native";
import { inputStyles } from "./style";

interface PropsInput {
  propsPlaceHolder: string;
  placeHolderTextColor: string;
  propsStyle?: object;
  typeInput?: boolean;
  valueInput: string;
  handleFunctionInput: (value: string) => void; 
}

export const TextInputField = ({
  propsPlaceHolder,
  placeHolderTextColor,
  typeInput,
  valueInput,
  handleFunctionInput,
  propsStyle,
}: PropsInput) => {
  return (
    <TextInput
      onChangeText={handleFunctionInput}
      style={[inputStyles.input, propsStyle]}
      placeholder={propsPlaceHolder}
      placeholderTextColor={placeHolderTextColor}  
      value={valueInput}
    />
  );
};
