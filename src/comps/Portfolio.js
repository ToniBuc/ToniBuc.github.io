import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faKeyboard, faMusic, faUser, faFilm } from '@fortawesome/free-solid-svg-icons';
import { SiAzuredevops } from "react-icons/si";
import { GiCastle } from 'react-icons/gi';

function Portfolio(){
    return (
        <div>
           <Carousel>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                            <a href="https://github.com/ToniBuc/eDentalist" target="_blank" className={styles.BigIcon}><FontAwesomeIcon icon={faTooth} /></a>
                            <p>eDentalist</p>
                            <a href="https://github.com/ToniBuc/eDentalist" target="_blank" className={styles.SmallIcon}><i className="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>eDentalist is an ASP.NET Core desktop and mobile application for operating a private dental office.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                            <a href="https://github.com/ToniBuc/PeripheralTech" target="_blank" className={styles.BigIcon}><FontAwesomeIcon icon={faKeyboard} /></a>
                            <p>PeripheralTech</p>
                            <a href="https://github.com/ToniBuc/PeripheralTech" target="_blank" className={styles.SmallIcon}><i className="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>PeripheralTech is an ASP.NET Core desktop and mobile application for supporting the work of a store that offers ordering & customization of peripheral devices.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                            <a href="https://github.com/ToniBuc/MyCastle" className={styles.BigIcon}><GiCastle style={{ width: "320px",height: "320px", filter: "drop-shadow(8px 8px 4px black)"}}/></a>
                            <p>MyCastle</p>
                            <a href="https://github.com/ToniBuc/MyCastle" target="_blank" className={styles.SmallIcon}><i className="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>MyCastle is an image uploading web application made using React, along with Firebase for storage and authentication.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                            <a href="https://github.com/ToniBuc/TBMusicBot" target="_blank" className={styles.BigIcon}><FontAwesomeIcon icon={faMusic} /></a>
                            <p>TB Music Bot</p>
                            <a href="https://github.com/ToniBuc/TBMusicBot" target="_blank" className={styles.SmallIcon}><i className="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>TB Music Bot is a Discord music bot made using the Discord4J and LavaPlayer libraries.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                            <a href="https://dev.azure.com/fitba1752/seminarski_rad/_git/webapp" className={styles.BigIcon}><FontAwesomeIcon icon={faFilm} /></a>
                            <p>MyEntertainmentHub</p>
                            <a href="https://dev.azure.com/fitba1752/seminarski_rad/_git/webapp" className={styles.SmallIcon}><SiAzuredevops style={{ width: "30px",height: "30px", filter: "drop-shadow(8px 8px 4px black)"}}/></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>MyEntertainmentHub is an IMDb inspired web application that serves as a database of information about different kinds of entertainment media.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                                <a href="https://github.com/ToniBuc/ToniBuc.github.io" target="_blank" className={styles.BigIcon}><FontAwesomeIcon icon={faUser} /></a>
                                <p>Portfolio</p>
                                <a href="https://github.com/ToniBuc/ToniBuc.github.io" target="_blank" className={styles.SmallIcon}><i class="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>My portfolio. Made using React.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.Article}>
                        <div className={styles.Icon}>
                                <a href="https://github.com/ToniBuc/Old-Portfolio" target="_blank" className={styles.BigIcon}><FontAwesomeIcon icon={faUser} /></a>
                                <p>Old Portfolio</p>
                                <a href="https://github.com/ToniBuc/Old-Portfolio" target="_blank" className={styles.SmallIcon}><i class="devicon-github-original"></i></a>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className={styles.Text}>
                            <p>Old portfolio. Made without React.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Portfolio;