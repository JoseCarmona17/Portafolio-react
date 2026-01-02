import React from 'react'

export const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt={item.title} className='work__img'/>
      </a>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}