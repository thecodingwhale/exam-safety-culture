import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button, { ButtonGroup } from '../components/Button';
import Pill from '../components/Pill';

storiesOf('Button', module)
  .add('default button', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('with active', () => <Button active onClick={action('clicked')}>Button</Button>)
  .add('with button group', () => {
  	return (
  		<ButtonGroup>
  			<Button>Button 1</Button>
  			<Button>Button 2</Button>
  			<Button>Button 3</Button>
  		</ButtonGroup>
  	);
  })
  .add('with button group set to block', () => {
    return (
      <ButtonGroup block>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    );
  });

storiesOf('Pill', module)
  .add('default pill', () => <Pill>Pill</Pill>);