import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInputField } from "../../components/Input";
import { Button } from "../../components/Button";
import { buttonStyles } from "../../components/Button/style";
import { inputStyles } from "../../components/Input/style";
import { styles } from "./style";
import pinterest_banner from "../../assets/pinterest_banner.jpeg";
import { FontAwesome } from "@expo/vector-icons";

export const Login = () => {
  const [email, setEmail] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log("Pegando informações", email);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerGlobal}>
        <View style={[styles.container, { height: "100%" }]}>
          <Image source={pinterest_banner} style={styles.bannerImage} />
          <FontAwesome
            name="pinterest"
            size={120}
            color="#E60023"
            style={styles.logo}
          />
          <Text style={styles.title}>Bem-vindo(a) ao Pinterest</Text>

          <View style={styles.forms}>
            <TextInputField
              placeHolder="Endereço de email"
              placeHolderTextColor="#B3B3B3"
              style={inputStyles.inputText}
              value={email}
              onChangeText={setEmail}
            />

            <Button
              title="Continuar"
              onPress={handleLogin}
              backgroundColor="#E60023"
              style={[buttonStyles.styleButton, buttonStyles.buttonOne]} 
            />

            <Button
              title="Continuar com o Facebook"
              onPress={handleLogin}
              backgroundColor="#1877F2"
              icon={
                <FontAwesome
                  name="facebook"
                  size={20}
                  color="#fff"
                  style={buttonStyles.iconFacebook}
                />
              }
              style={[buttonStyles.styleButton, buttonStyles.iconFacebook]} 
            />

            <Button
              title="Continuar com o Google"
              onPress={handleLogin}
              backgroundColor="#8A8A8A"
              icon={
                <FontAwesome
                  name="google"
                  size={20}
                  color="#fff"
                  style={buttonStyles.iconGoogle}
                />
              }
              style={[buttonStyles.styleButton, buttonStyles.iconGoogle]}
            />
          </View>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              Ao continuar, você concorda com os{" "}
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Abrindo link para os Termos de Serviço")
                }
              >
                <Text style={styles.termsLink}>Termos de Serviço</Text>
              </TouchableOpacity>{" "}
              e confirma que leu a nossa{" "}
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Abrindo link para Política de Privacidade")
                }
              >
                <Text style={styles.termsLink}>Política de Privacidade</Text>
              </TouchableOpacity>{" "}
              e o{" "}
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Abrindo link para Aviso na coleta de informações"
                  )
                }
              >
                <Text style={styles.termsLink}>
                  Aviso na coleta de informações
                </Text>
              </TouchableOpacity>
              .
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
