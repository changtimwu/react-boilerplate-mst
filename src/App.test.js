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

it('contains welcome message', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain( 'Welcome to React');
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  let welcome= <h1 className="App-title">YA! Welcome to React</h1>
  expect(wrapper).toContainReact(welcome)
});
