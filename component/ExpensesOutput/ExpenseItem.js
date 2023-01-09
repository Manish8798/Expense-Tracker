import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyle } from "../../constants/style";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function buttonPressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={buttonPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View style={styles.descContainer}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: GlobalStyle.colors.gray500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    elevation: 4,
    shadowColor: GlobalStyle.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
  },
  textBase: {
    color: GlobalStyle.colors.primary50,
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  amountContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: GlobalStyle.colors.primary50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    minWidth: 75,
    margin: 5,
  },
  amount: {
    color: GlobalStyle.colors.gray700,
    fontWeight: "bold",
    fontSize: 15,
  },
  descContainer: {
    width: "75%",
  },
});
