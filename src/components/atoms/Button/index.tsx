import type { ForwardRefRenderFunction } from 'react'
import React from 'react'

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  children: React.ReactNode
  disabled?: boolean
  onPress?: () => void
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({
  disabled = false,
  onPress,
  ...props
}) => {
  return <button {...props}>{props.children}</button>
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(Button)
