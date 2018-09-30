import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
/*
import ReactDOM from 'react-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

it('renders without crashing', () => {
  shallow(<App />);
});


it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toContain( 'Welcome to React');
});
