import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialData = {
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
      { amount: 1500, title: "CNY Pocket Money", category: "Gift" },
      { amount: 3500, title: "Jan Income", category: "Salary" },
      { amount: 2000, title: "Feb Income", category: "Salary" },
      { amount: 100, title: "Gift from Friend", category: "Gift" },
      { amount: 200, title: "Contract Performance Bonus", category: "Bonus" },
    ],
    balance: 5000,
    categories: {
      expenses: ["Eating Out", "Entertainment", "General"],
      incomes: ["Salary", "Gift", "Bonus"],
    },
  };

  const [currentUser, setCurrentUser] = useState(initialData);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};
