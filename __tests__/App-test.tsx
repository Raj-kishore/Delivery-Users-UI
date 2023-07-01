/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Bebsaa User Application', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
