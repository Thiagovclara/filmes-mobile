import React from "react";
import { Appbar, Searchbar, Card } from "react-native-paper";
import { Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

const avaliados = () => {
  const _goBack = () => {};
  const _handleSearch = () => {};
  const _handleMore = () => {};
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <Appbar.Header style={styles.container}>
        <Appbar.Content titleStyle={styles.titulo} title="Avaliadas" />

        <Appbar.Action
          style={styles.iconContainer}
          size={32}
          backgroundcolor="#F3D3AA"
          onPress={() => {}}
          icon="account-outline"
        />
      </Appbar.Header>

      <Searchbar
        placeholder="Pesquisa"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <View style={styles.cardContainer}>
        <Card style={styles.cardUnico}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>

        <Card style={styles.cardUnico}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>

        <Card style={styles.cardUnico}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>

        <Card style={styles.cardUnico}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A6C6E",
  },

  titulo: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: 32,
    lineHeight: 32 * 1.4,
    letterSpacing: 0,
    color: "#B0333B",
  },

  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "#F3D3AA",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 8,
  },

  cardUnico: {
    width: "30%",

    marginTop: 24,
    backgroundColor: "#F3D3AA",
    borderRadius: 8,
  },
});
export default avaliados;
