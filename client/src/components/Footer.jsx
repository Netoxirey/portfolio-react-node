import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className='grid-responsive container'>
            <div>
                <h3>Created by <span className='text_gradient'>Ernesto Serna</span></h3>
                <p>@2023 all rights reserved.</p>
            </div>
            <div className='footer_links'>
                <a href="https://www.linkedin.com/in/ernesto-serna-guerrero/">LinkedIn</a>
                <a href="https://github.com/Netoxirey">GitHub</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer