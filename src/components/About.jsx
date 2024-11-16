import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/Dashboard');
  }
  return (
    <div>
      ABOUT PAGE
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  )
}

export default About
