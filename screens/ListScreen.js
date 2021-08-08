import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, Text } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [iniciado, setIniciado] = useState(false);
  const [tempo, setTempo] = useState(0);

  const timer = setInterval(() => {
    setTempo(tempo + 1);
  }, 1000);

  const iniciar = () => {
    setIniciado(!iniciado);

    if (iniciado) {
    } else {
      clearInterval(timer);
      setTempo(0);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "powderblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!iniciado && (
          <Picker
            selectedValue={selectedValue}
            style={{ fontWeight: 700, fontSize: 240, fontFamily: "Ubuntu" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        )}
        {iniciado && <Text>{selectedValue}</Text>}
      </View>
      <View style={{ flex: 1, backgroundColor: "skyblue" }}>
        <Text>{tempo}</Text>
      </View>
      <View style={{ backgroundColor: "steelblue" }}>
        <Button
          style={styles.button}
          title={iniciado ? "Encerrar" : "Iniciar"}
          color="#841584"
          onPress={iniciar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 0,
  },
});

export default App;
