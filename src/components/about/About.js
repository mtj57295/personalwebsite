import React from 'react';

const About = () => {
  const image1 = require('../../../public/images/image.jpg');
  const image2 = require('../../../public/images/computer.jpg');
  return(
    <section id='about'>
      <article className="pa3 pa5-ns">
        <div className='flex flex-wrap'>
          <div className='flex flex-column'>
            <h1 class="dark-green f3 f2-m f1-l fw2 black-90 mv3" style={{fontSize: '4em'}}>
            About
            </h1>
            <p className="measure lh-copy">
              I am passionate about building excellet software that improves the
              lives of others. I love coding and seeing projects come together.
              I am a self motivated programmer that enjoys learning new languages
              and technologies to andvance my development skills. I'm always looking
              to improve and evolve myself.
            </p>
            <p className="measure lh-copy">
              Currently I am searching for a position as a software developer or
              software engineer. I pefer to do back-end software development but
              do not limit myself from front-end software development and other types
              of development. I'm interested in Python Development, Web Development,
              Mobile development, MERN stack development, and Artificial Intelligence.
            </p>
          </div>
          <img src={image1} alt='computer' className='about-images'/>
          <img src={image2} alt='computer' className='about-images'/>
        </div>
      </article>
    </section>
  );
}

export default About;
