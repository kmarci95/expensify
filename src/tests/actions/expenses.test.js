import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should set up remove expense object', () => {
   const action = removeExpense({id: '123abc'});
   expect(action).toEqual({
     type: 'REMOVE_EXPENSE',
     id: '123abc'
   });
});

test('should edit expense', () => {
  const action = editExpense('123abc', { note: 'new note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  });
});

test('should setup add expense action object with privded values', () => {
  const expenseData = {
    description: 'Rent',
    amount: '111',
    createdAt: '111',
    note: 'last month'
  };
  const action  = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const expensData = addExpense();
  expect(expensData).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
});