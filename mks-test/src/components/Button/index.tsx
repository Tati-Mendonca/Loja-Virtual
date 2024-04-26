import React from 'react'

const Button = ({ Text, onClick, Type }) => {
  return (
    <div>
    <button type={Type} onClick={onClick}>
      {Text}
    </button>
    </div>
  )
}

export default Button
