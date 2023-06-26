import type { Meta, StoryObj } from '@storybook/react';

import { Example1 as _Example1 } from './examples/Example1';
import { Example2 as _Example2 } from './examples/Example2';
import { VSCode as _Example3 } from './examples/VSCode';

function SplitView() {
  return (
    <_Example1 />
  );
}

type MetaType = Meta<typeof SplitView>;

const meta: MetaType = {
  title: 'Example/SplitView',
  component: SplitView,
  tags: ['autodocs'],
} satisfies Meta<typeof SplitView>;

export default meta;

type Story = StoryObj<MetaType>;

export const Example1: Story = {
  render() {
    return (
      <_Example1 />
    );
  }
};

export const Example2: Story = {
  render() {
    return (
      <_Example2 />
    );
  }
};

export const Example3: Story = {
  render() {
    return (
      <_Example3 />
    );
  }
};
