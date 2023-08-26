import { FC } from 'react'

type ButtonProps = {
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <button {...props}>ボタン</button>
}
