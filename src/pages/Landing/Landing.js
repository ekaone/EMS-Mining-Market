import React from 'react'

// components
import logoems from '../../assets/Landing/logoems.svg';
import '../../styles/Landing/Landing.css' 
import ButtonLink from '../../components/Button/Landing'

const buttonsLink = [
  { id: 1, path: 'https://adiraja-integrasi.com/', label: 'Learn more' },
  { id: 2, path: 'https://www.google.com/', label: 'Sign In' },
  { id: 3, path: 'https://www.google.com/', label: 'Sign Up' },
]

export default function Landing() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logoems} className="App-logo" alt="logo" />
        <p>
          EMS Mining Market solution on your Business
        </p>
        <ButtonLink buttons={buttonsLink} />
      </header>
    </div>
    </>
  )
}
