import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

it('renders default component as expected', () => {
	const children = 'Sample';
  const component = shallow(
  	<Button>
  		{ children }
  	</Button>
  );
  expect(component.text()).toEqual(children);
  expect(component.name()).toEqual('styled.button');
});