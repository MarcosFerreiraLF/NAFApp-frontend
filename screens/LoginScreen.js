import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const efetuarLogin = () => {
    console.log(navigation);
    navigation.push("List");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setUsuario(text);
        }}
        value={usuario}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      <TouchableOpacity>
        <Button
          title="Login"
          color="#841584"
          onPress={efetuarLogin}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
});

export default Login;
