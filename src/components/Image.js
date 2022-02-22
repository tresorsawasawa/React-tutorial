import React from 'react'

const Image = () => {
  const styling = {
    maxWidth: '105%'
  }

  return (
    <img
      style={styling}
      src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
      alt="Book Picture"
    />
  )
}

export default Image