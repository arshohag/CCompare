import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import ChartsList from '../index';

describe('<ChartsList />', () => {
  test('renders', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const tree = renderer
      .create(
        <MemoryRouter>
          <h4>Bitcoins  List</h4>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
