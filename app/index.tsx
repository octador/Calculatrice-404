import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>L'école du numérique pour tous !</Text>

          <Text style={styles.tagline}>
            L'école du numérique pour tous·tes !
          </Text>

          <Text style={styles.description}>
            Maîtrise ton avenir et comprends les outils numériques en les
            codant.
          </Text>

          <Text style={styles.paragraph}>
            Garage404 est une école qui s'est donné pour mission d'enseigner le
            numérique à tous·tes à travers des parcours éducatifs pour les
            enfants, les ados et pour les adultes avec des formations métiers
            professionnalisantes.
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.buttonText}>En savoir plus</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4E4E4E",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#1A1A1A",
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: "#0BCE83",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "#4E4E4E",
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 24,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
