import React from 'react';
import ReactDOM from 'react-dom';
import DeviceStateList from '../src/DeviceStateList';

// lifted from react project generator
// TODO wait for the list to render

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeviceStateList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
