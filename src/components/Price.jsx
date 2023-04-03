import React from 'react'

export default function Price({value}) {
  return (
    <>
      {parseFloat(value).toFixed(2) +'$'}
    </>
  )
}
