import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Playerlist from './Components/Playerlist';
import Navbar from './Components/Navbar';

test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders without crashing", () => {
  
  const div = document.createElement('div');
  ReactDOM.render(<Playerlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render = (<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});