import React from 'react'
import logoems from '../../assets/Landing/logoems.svg';
import '../../styles/Landing/Landing.css' 

export default function Landing() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logoems} className="App-logo" alt="logo" />
        <p>
          EMS Mining Market solution on your Business
        </p>
        <a
          className="App-link"
          href="https://adiraja-integrasi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
    </>
  )
}
