import React from 'react';
import './about.css';
import Resume from './resume.pdf'
import { FiDownload } from 'react-icons/fi'
import Card from '../card/Card'
import skills from './skills'

const About = () => {
    return(
        <section id="about">
            <div className='container about__continar'>
                <div className='about'>
                        <h2>About Me</h2>
                        <div className='about__cards'>
                            {
                                skills.map((item) => (
                                    <Card key={item.id} className='about__card'>
                                        <span className='about__card-icon'>{item.icon}</span>
                                        <h5>{item.title}</h5>
                                        <small>{item.desc}</small>
                                    </Card>
                                ))
                            }
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias, 
                            unde optio excepturi ex temporibus vel maiores tempora amet ducimus 
                            magnam repellat, culpa illum id? Deleniti dolorum ea ut ipsum?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias, 
                            unde optio excepturi ex temporibus vel maiores tempora amet ducimus 
                            magnam repellat, culpa illum id? Deleniti dolorum ea ut ipsum?
                        </p>
                        <a href={Resume} download className='btn primary'>Download Resume <FiDownload/> </a>
                </div>

            </div>
        
        </section>
    )
}
export default About;