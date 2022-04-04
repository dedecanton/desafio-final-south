import React from 'react'
import { Button } from './GoogleButton.style'

import { FcGoogle } from 'react-icons/fc'

type Props = {
    onClick: () => void
}

const GoogleButton:React.FC<Props> = ({children, onClick}) => {
  return (
    <Button onClick={onClick}>
        <FcGoogle/>
        <span>{children}</span>
    </Button>
  )
}

export default GoogleButton