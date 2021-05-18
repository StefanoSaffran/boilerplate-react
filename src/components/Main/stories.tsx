import { withKnobs, text } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components',
    )}
  />
);
