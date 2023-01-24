import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="bx bx-award about__icon" ></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1 año de trabajo</span>
        </div>

        <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completos</h3>
            <span className="about__subtitle">17 + Projectos</span>
        </div>

        <div className="about__box">
        <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Soporte</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}
