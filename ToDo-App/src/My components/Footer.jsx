import React from 'react'

export default function Footer() {

  let footerstyle = {
    position  : "relative",
    top : "70vh",
    width : "100%"
  }
  return (
    <div>
      
      <footer className='bg-dark text-light pg-3' style={footerstyle}>
        <p className='text-center'>Copyrights &copy; Mytodos.com</p>
      </footer>
    </div>
  )
}
