import React from 'react'
import "./CustomBtn.css"

function CustomBtn({label}) {

  return (
    <button className='CustomBtn'>{label}</button>
  )
}

export default CustomBtn