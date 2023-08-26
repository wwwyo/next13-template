import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

type T = typeof Button

export default {
  component: Button,
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {},
  render: (props) => (
    <div className="bg-slate-100">
      <Button {...props} />
    </div>
  ),
}
