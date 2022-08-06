import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H1 } from './Headings';

export default {
  title: 'Headings/H1',
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Main Heading"
};
