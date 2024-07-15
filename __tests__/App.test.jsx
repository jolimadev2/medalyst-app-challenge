import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'; // Ajusta la ruta según tu estructura de archivos

test('renders app without crashing', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText('Star Wars Medalyst'); // Ajusta según el título real de tu aplicación
  expect(appTitle).toBeTruthy();
});
