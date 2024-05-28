import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div className='About'>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="circles"></div>
        <div className="details-container">
          <div className="avatar">
            <img src="https://i.suar.me/l3zYA/l" className="img-fluid" alt="Avatar" />
          </div>
          <div className="about">
            <div className="name">
              <p>Hello There!</p>
              <h1>I'm Amr Arnous</h1>
            </div>
            <div className="about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam. Fuga illo impedit hic possimus tempora asperiores. Dicta, esse!
              </p>
              <button>Download Resume</button>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="skills-container">
          <button>Reader</button>
          <button>Coder</button>
          <button>Designer</button>
        </div>
      </div>
    </div>
  )
}
