import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/theme/theme';

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);