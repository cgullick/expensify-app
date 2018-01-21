import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correctly with 1 expense summarized', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={23443}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with 2 expenses summarized', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={552232}/>);
  expect(wrapper).toMatchSnapshot();
});