import React from 'react'

const Button = ({styles, text}) => {
  return (
    <button className={`py-4 px-6 bg-blue-400 text-primary font-poppins font-medium ${styles}`}>
      {text}
    </button>
  )
}

export default Button