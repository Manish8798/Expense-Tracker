import { View, StyleSheet, Text } from "react-native";
import { GlobalStyle } from "../../constants/style";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 0,
    backgroundColor: GlobalStyle.colors.white,
  },
  infoText: {
    color: GlobalStyle.colors.gray700,
    fontSize: 16,
    textAlign: "center",
    marginTop: 35,
  },
});
