import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerInfo: {
    flexDirection: "row",
    gap: 8,
  },
  infoCreate:{
    fontFamily: THEME.fonts.inter_bold,
    color: THEME.colors.blue.light,
    fontSize: 14
  },
  infoComplete: {
    fontFamily: THEME.fonts.inter_bold,
    color: THEME.colors.purple.light,
    fontSize: 14
  },
  infoDetail: {
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: THEME.colors.gray[400],
    fontFamily: THEME.fonts.inter_bold,
    color: "#FFF"
  },
  containerList: {
    marginTop: 20
  }
});
