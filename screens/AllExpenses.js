import { useContext } from "react";
import { Text } from "react-native";

import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText="NO Expenses Spend"
    />
  );
}

export default AllExpenses;
