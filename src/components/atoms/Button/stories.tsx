import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

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

// テストコード解説: https://blog.cybozu.io/entry/2022/08/29/110000
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  console.log(canvas)

  // <button> を取得し、クリックする
  await userEvent.click(canvas.getByRole('button'))

  // コンポーネントの文字がButtonかを確認
  await expect(canvas.getByText('Button')).toBeInTheDocument()

  // コンポーネントの文字がInputでないためエラーが出る
  await expect(canvas.getByText('Input')).toBeInTheDocument()
}
