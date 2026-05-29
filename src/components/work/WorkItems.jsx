import React from 'react'

export const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      {/* IMAGEN */}
      <div className="work__img-wrapper">
        <img src={item.image} alt={item.title} className='work__img'/>
        <div className="work__overlay"></div>
      </div>

      {/* CONTENIDO */}
      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        
        <p className="work__description">{item.description}</p>

        {/* TECNOLOGÍAS */}
        <div className="work__technologies">
          {item.technologies.map((tech, index) => (
            <span key={index} className="tech__badge">{tech}</span>
          ))}
        </div>

        {/* BOTONES */}
        <div className="work__buttons">
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="work__button work__button--primary">
            <i className="bx bx-link-external"></i> Live Demo
          </a>
          <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="work__button work__button--secondary">
            <i className="bx bxl-github"></i> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  )
}