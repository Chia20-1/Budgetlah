import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function StatisticsCard() {
  const currentUser = {
    expenses: [
      { amount: 10, title: "Lunch", category: "Eating Out" },
      { amount: 20, title: "Dinner", category: "Eating Out" },
      { amount: 30, title: "Breakfast", category: "Eating Out" },
      { amount: 50, title: "Movie Tickets", category: "Entertainment" },
      { amount: 60, title: "Concert Tickets", category: "Entertainment" },
      { amount: 70, title: "Groceries", category: "General" },
      { amount: 80, title: "Utilities", category: "General" },
      { amount: 90, title: "Internet Bill", category: "General" },
    ],
    incomes: [
      { amount: 1500, title: "Birthday Gift", category: "Gift" },
      { amount: 4500, title: "June Salary", category: "Salary" },
      { amount: 2000, title: "July Salary", category: "Salary" },
      { amount: 100, title: "Gift from Friend", category: "Gift" },
      { amount: 500, title: "Year End Bonus", category: "Bonus" },
    ],
    balance: 5000,
    categories: {
      expenses: ["Eating Out", "Entertainment", "General"],
      incomes: ["Salary", "Gift", "Bonus"],
    },
  };

  // Process data to get totals by category for expenses and incomes
  const expenseTotals = currentUser.categories.expenses.map((category) => {
    return currentUser.expenses
      .filter((expense) => expense.category === category)
      .reduce((acc, curr) => acc + curr.amount, 0);
  });

  const incomeTotals = currentUser.categories.incomes.map((category) => {
    return currentUser.incomes
      .filter((income) => income.category === category)
      .reduce((acc, curr) => acc + curr.amount, 0);
  });

  // Data for the Expense Doughnut chart
  const expenseData = {
    labels: currentUser.categories.expenses,
    datasets: [
      {
        data: expenseTotals,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Add more colors for more categories
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Add more colors for more categories
      },
    ],
  };

  // Data for the Income Bar chart
  const incomeData = {
    labels: currentUser.categories.incomes,
    datasets: [
      {
        label: "Incomes",
        data: incomeTotals,
        backgroundColor: ["#4BC0C0", "#FF6384", "#FFCE56"], // Add more colors for more categories
      },
    ],
  };

  return (
    <div className="statistics-card">
      <h2>Expenses by Category</h2>
      <Doughnut data={expenseData} />
      <h2>Incomes by Category</h2>
      <Bar data={incomeData} />
      <h2>Total Balance: {currentUser.balance}</h2>
    </div>
  );
}
