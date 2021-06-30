import React from 'react';
import './about.css'
import cv from '../../eytan.pdf'

const About = () => {
    return (
        <div className={'about-component'}>
            <div className={'about-me-picture'}>
                <img src="./eytan-profile.jpeg" alt="eytan"/>
                <hr/>
            </div>


            <div className={'about-me-text'}>
                <div className={'about-me-header'}>
                    <h2>Eytan Sayada - Full-Stack web developer</h2>
                </div>
                <span>
                Eytan Sayada 25 years old, born in France.  Residence Raanana, Israel.
I am a full-stack web developer. I specialize in Javascript frameworks such as React And Vuejs.
Backends such as Nodejs, and databases such as MongoDB, Postgresql, Firebase.
            </span>
                <br/>
                <br/>
                <span>
                   And I am looking for my next challenge in web development.
                </span>
                <br/>
                <br/>
                <span>
                  So if you are looking for a young, hardworking and energetic developer, I am the address.
                                        <br/>
                    To view the resume :
                    <u>
                    <a className={'link'} target={'_blank'} href={'eytan.pdf'}>Click here</a>
                    </u>
                    <br/>
                    To download my resume :
                    <u>
                    <a className={'link'} download={cv} target={'_blank'} href={'eytan.pdf'}>Click here</a>
                    </u>
                </span>
            </div>
        </div>
    );
};

export default About;
