import { Story, Meta } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  args: {
    title: 'asdasdaddasda',
    description: 'asdasdasdasd',
  },
} as Meta;

export const Basic: Story = args => <Main {...args} />;

export const Default: Story = args => <Main {...args} />;
Default.args = {
  title: '123',
  description: '123',
};
