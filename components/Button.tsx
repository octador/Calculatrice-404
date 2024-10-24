import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "@/components/context/ThemeContext";
import { Styles } from "@/components/styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;	
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ onPress, title, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
  style={
    isBlue
    ? Styles.btnBlue
    : isGray
    ? Styles.btnGray
    : theme === 'dark'  // Si le thème est sombre, utilise btnDark
    ? Styles.btnDark
    : Styles.btnLight   // Si le thème est clair, utilise btnLight (fond blanc)
  }
  onPress={onPress}>
  <Text 
    style={
      isBlue || isGray  // Utilise du texte blanc pour les boutons bleus ou gris
      ? Styles.smallTextLight
      : theme === 'dark'  // Texte blanc dans le thème sombre
      ? Styles.smallTextLight
      : Styles.smallTextDark   // Texte noir dans le thème clair
    }>
    {title}
  </Text>
</TouchableOpacity>
    )}