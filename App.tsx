import { SafeAreaView, Text, View } from "react-native";
import { Home } from "./src/screens/Home";

import { useFonts, Inter_400Regular, Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [ fontsLoaded ] =  useFonts({Inter_400Regular, Inter_700Bold, Inter_300Light})


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light"  />
      { fontsLoaded ? <Home /> :  <Text>Fonts not loaded</Text> }
   </SafeAreaView>
  );
}
