import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: THEME.colors.gray[500],
    borderRadius: 8,
    borderColor: THEME.colors.gray[400],
    borderWidth: 1,
    gap: 8,
    marginBottom: 8
  },
  text: {
    width: 235,
    color: '#FFF',
  },
  textComplete: {
    width: 235,
    color: THEME.colors.gray[300],
    textDecorationLine: 'line-through'
  }

})