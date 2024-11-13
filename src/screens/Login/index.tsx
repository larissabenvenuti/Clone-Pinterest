import React, { useState } from 'react';
import { Alert, Image, Keyboard, TouchableWithoutFeedback, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { TextInputField } from "../../components/Input";
import { Button } from "../../components/Button";
import { inputStyles } from "../../components/Input/style";
import { styles } from "./style";
import pinterest_banner from "../../assets/pinterest_banner.jpg";
import { FontAwesome } from '@expo/vector-icons';
import { buttonStyles } from '../../components/Button/style';

const terms = [
  { text: "Termos de Serviço", link: "#" },
  { text: "Política de Privacidade", link: "#" },
  { text: "Aviso na coleta de informações", link: "#" }
];

const { width, height } = Dimensions.get('window');

export const Login = () => {
  const [email, setEmail] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log("Pegando informações", email);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerGlobal}>
        <View
          style={[
            styles.container,
            {
              width: '100%', // Ajusta para 100% da largura da tela
              height: '100%', // Ajusta para 100% da altura da tela
            },
          ]}
        >
          <View style={styles.banner}>
            <Image source={pinterest_banner} style={styles.bannerImage} />
          </View>
          <FontAwesome name="pinterest" size={120} color="#E60023" style={styles.logo} />
          <Text style={styles.title}>Bem-vindo(a) ao Pinterest</Text>

          <View style={styles.forms}>
            <TextInputField
              propsPlaceHolder="Endereço de email"
              placeHolderTextColor="#B3B3B3"
              propsStyle={inputStyles.inputText}
              valueInput={email}
              handleFunctionInput={handleEmail}
            />

            <View style={buttonStyles.buttonOne}>
              <Button
                title="Continuar"
                handleFunction={handleLogin}
                propsBackgroundColor="#E60023"
              />
            </View>

            <Button
              title="Continuar com o Facebook"
              handleFunction={handleLogin}
              propsBackgroundColor="#1877F2"
              icon={<FontAwesome name="facebook" size={20} color="#fff" style={buttonStyles.iconFacebook} />}
            />

            <Button
              title="Continuar com o Google"
              handleFunction={handleLogin}
              propsBackgroundColor="#8A8A8A"
              icon={<FontAwesome name="google" size={20} color="#fff" style={buttonStyles.iconGoogle} />}
            />
          </View>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              Ao continuar, você concorda com os{" "}
              <TouchableOpacity onPress={() => Alert.alert("Abrindo link para os Termos de Serviço")}>
                <Text style={styles.termsLink}>Termos de Serviço</Text>
              </TouchableOpacity>{" "}
              e confirma que leu a nossa{" "}
              <TouchableOpacity onPress={() => Alert.alert("Abrindo link para Política de Privacidade")}>
                <Text style={styles.termsLink}>Política de Privacidade</Text>
              </TouchableOpacity>.{" "}
              <TouchableOpacity onPress={() => Alert.alert("Abrindo link para Aviso na coleta de informações")}>
                <Text style={styles.termsLink}>Aviso na coleta de informações</Text>
              </TouchableOpacity>.
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
