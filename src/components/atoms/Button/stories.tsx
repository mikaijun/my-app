import Button from './index'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

export default {
  title: 'Atoms/Button/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'onPress' },
  },
} as ComponentMeta<typeof Button>

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    disabled: false,
    children: 'Button',
  },
}
