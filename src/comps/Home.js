import React from 'react';
import styles from '../styles/Home.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Marquee from './Marquee';
import FadeIn from 'react-fade-in';

function Home() {
    return (
        <div className={styles.HomeWrapper}>
            <div className={styles.Main}>
                <div className={styles.NameDiv}>
                    <h1 className="display-1 fw-bold">TONI BUCONJIĆ</h1>
                </div>
                <div className={styles.SubMain}>
                    <div className={styles.LinkIcons}>
                        <a href="https://github.com/ToniBuc" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://www.linkedin.com/in/toni-buconji%C4%87/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="mailto:tonibuconjic@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </div>
                    <div className={styles.Para}>
                        <p>Hey there! Welcome to my portfolio!</p>
                    </div>
                </div>
                <img src="/images/me2.jpg" className={styles.Avatar} alt="me" />
            </div>
            <div className={styles.MarqueeDiv}>
                <FadeIn delay="1100" transitionDuration="5000">
                    <Marquee />
                </FadeIn>
            </div>
        </div>
    )
}

export default Home;