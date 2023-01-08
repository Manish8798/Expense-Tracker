import { View, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/style";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>₹{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyle.colors.primary50,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "space-between",
  },
  period: {
    fontSize: 12,
    color: GlobalStyle.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyle.colors.gray500,
  },
});
