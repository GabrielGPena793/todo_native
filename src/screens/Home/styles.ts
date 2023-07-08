import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.gray[700],
    height: 173
  },
  main: {
    backgroundColor: THEME.colors.gray[600],
    flex: 1,
    paddingHorizontal: 24,

  },
  containerInput: {
    marginTop: -28,
    flexDirection: "row",
    gap: 4
  },
  input: {
    backgroundColor: THEME.colors.gray[500],
    padding: 16,
    borderRadius: 6,
    flex: 8,
    color: THEME.colors.gray[200],
    fontSize: 16,
    fontFamily: THEME.fonts.inter_regular,
  },
  button: {
    flex: 1,
    padding: 18,
    backgroundColor: THEME.colors.blue.dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  contentList: {
    marginTop: 32,
  },
});
