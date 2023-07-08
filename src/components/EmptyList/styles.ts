import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 48,

    borderTopWidth: 1,
    borderTopColor: THEME.colors.gray[400],
    marginTop: 20
  },
  text: {
    color: THEME.colors.gray[300],
    fontSize: THEME.fontSizes.sm,
    fontFamily: THEME.fonts.inter_regular
  },
  textStrong: {
    color: THEME.colors.gray[300],
    fontSize: THEME.fontSizes.sm,
    fontFamily: THEME.fonts.inter_bold
  },
})