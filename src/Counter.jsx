import React from 'react'

function Counter() {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className='flex items-center gap-4'>
        <button className='btn' onClick={handleClick}>-</button>
        <p className='text-4xl font-bold '>0</p>
        <button className='btn' onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter