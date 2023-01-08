import { FlatList, StyleSheet } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
});

export default ExpensesList;
