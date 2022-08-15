import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import User from "./components/User";
import Dashboard from "./components/Dashboard";

import { generareId } from "./helpers"

const App = () => {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
  );
  const [isvalidUser, setIsValidUser] = useState(false);

  const [modal, setModal] = useState(false);
  
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );
  const [editExpense, setEditExpense] = useState({});

  const [filter, setFilter] = useState('');
  const [filterExpense, setFilterExpense] = useState([]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('user',JSON.stringify(user) ?? []);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    const budgetLs = Number(localStorage.getItem('budget')) ?? 0;
    const userLs = localStorage.getItem('user') ?? [];
    if (budgetLs > 0 && !userLs.includes(user)) {
      setIsValidBudget(true)
      setIsValidUser(true);
    }
  }, [])

  const handleSaveUser = userObject => {
    userObject.id = generareId();
    setUser([...user, userObject]);
  }

  const handleSaveExpense = expense => {
    if (expense.id) {
      const updateExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(updateExpenses);
      setEditExpense({});
    } else {
      expense.id = generareId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
  }
  useEffect(() => {
    if (filter) {
      const filterExpenses = expenses.filter(expense => {
        if (filter === '') {
          return expense;
        } else if (expense.name.toLowerCase().includes(filter.toLowerCase()) || expense.category.toLowerCase().includes(filter.toLowerCase())) {
          return expense;
        }
      })
      setFilterExpense(filterExpenses);
    }
  }, [filter]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);
    }
  }, [editExpense]);

  const handleDelete = id => {
    const deleteExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(deleteExpenses);
    setFilterExpense(deleteExpenses);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element=
              {
                <Hero
                  title="It's time to control your money."
                  description='Enter your budget, and discover how to have better control over it, adding expenses and viewing your expenses!.'
                  budget={budget}
                  setBudget={setBudget}
                  isValidBudget={isValidBudget}
                  setIsValidBudget={setIsValidBudget}
                />
              }>
          </Route>
            {
              isValidBudget && 
                (
                  <Route 
                    path="/user" 
                    element=
                    {
                      <User 
                        setUser={setUser}
                        handleSaveUser={handleSaveUser}
                        setIsValidUser={setIsValidUser}
                      />
                    }>
                  </Route>
                )
            }
            {
              isvalidUser && 
                (
                  <Route 
                    path="/dashboard" 
                    element=
                    {
                      <Dashboard
                        budget={budget}
                        setBudget={setBudget}
                        setIsValidBudget={setIsValidBudget}
                        user={user}
                        setUser={setUser}
                        setIsValidUser={setIsValidUser}
                        expenses={expenses}
                        setExpenses={setExpenses}
                        handleSaveExpense={handleSaveExpense}
                        editExpense={editExpense}
                        setEditExpense={setEditExpense}
                        modal={modal}
                        setModal={setModal}
                        filter={filter}
                        setFilter={setFilter}
                        filterExpense={filterExpense}
                        handleDelete={handleDelete}
                      />
                    }>
                  </Route>
                )
            }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App  