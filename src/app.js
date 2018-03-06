import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

//addExpense -> water bill
//addExpense -> gas bill
//setTextFilter -> bill
//getVisibleExpenses -> print visible ones to screen

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: -2100 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 25 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))

