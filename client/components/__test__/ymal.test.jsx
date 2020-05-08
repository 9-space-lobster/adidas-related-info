import React from 'react';
import { render, shallow } from 'enzyme';
import YouMayAlsoLike from '../ymal.jsx';

let wrapped = render(<YouMayAlsoLike />);
describe('Render CompleteTheLook component', () => {
  it('renders the H4 children', () => {
    expect(wrapped.find('h4').text()).toEqual('complete the look');
  });
});