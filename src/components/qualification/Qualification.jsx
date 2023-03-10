import React, { useState } from "react";
import "./qualification.css";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Calificación</h2>
            <span className="section__subtitle">Mi trayectoria</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Educación
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experiencia
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ingeniería de Software</h3>
                                <span className="qualification__subtitle">
                                    Universidad Iberoamericana
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Principiante en Programación</h3>
                                <span className="qualification__subtitle">
                                    Oracle - Alura latam
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">JavaScript</h3>
                                <span className="qualification__subtitle">
                                    Udemy
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Programación con énfasis en app Web</h3>
                                <span className="qualification__subtitle">
                                    Universidad Pontificia Bolivariana
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Freelance</h3>
                                <span className="qualification__subtitle">Independiente</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - actualmente
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">desarrollador Web</h3>
                                <span className="qualification__subtitle">Solar Communications S.A.S - Colombia</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2022
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
