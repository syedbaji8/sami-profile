import React from 'react';
import { Button } from 'react-bootstrap';

function About(props) {
    console.log(props)
    const goToAppPage = () => {
        props.history.push('/')
    }
  return (
    <div className="About">
      <h1>Hello About World!!!</h1>
      <Button onClick={goToAppPage}>Go to Home page</Button>
    </div>
  );
}

export default About;
