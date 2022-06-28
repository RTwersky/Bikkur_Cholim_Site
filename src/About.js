import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about__body'>
        <img className='about__logo' src={require('./logoL.png')} alt='' />
        <h1>About</h1>
       
         <h5> <hr></hr>Bikur Cholim of Providence is commited to helping those who come to Providence for medical care. We help by providing kosher food, housing, and Shabbos help.</h5>
          {/* <h5>In 1990 Rebbetzin Chana Weinberg, founder and driving force behind many of Baltimore’s chessed organizations, visited providence and inspired us to start Bikur Cholim of Providence. </h5> */}
     
      </div>
    </div>
  )
}

export default About