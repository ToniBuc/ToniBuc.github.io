import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import styles from '../styles/Marquee.module.css';
import { DiGithubBadge, DiHtml5, DiCss3, DiBootstrap, DiAngularSimple } from "react-icons/di";
import { SiAzuredevops, SiXamarin, SiTypescript, SiOpencv } from "react-icons/si";

const MarqueeFunc = () => (
    <div style={{ position: "relative", width: "100%", height:"800px" }}>
    <Marquee velocity={25} minScale={0.9} resetAfterTries={200} scatterRandomly>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <SiTypescript style={{
                width: "58px",
                height: "58px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <DiAngularSimple style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <DiGithubBadge style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <DiHtml5 style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <SiOpencv style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <DiCss3 style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <DiBootstrap style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <SiAzuredevops style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <SiXamarin style={{
                width: "70px",
                height: "70px",
            }}/>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-dotnetcore-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-dot-net-plain-wordmark'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-docker-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-java-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-javascript-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-visualstudio-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-vscode-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-intellij-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-react-original'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-csharp-plain'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-firebase-plain-wordmark'></i>
            </div>
        </Motion>
        <Motion
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}>
            <div className={styles.IconDiv}>
                <i className='devicon-microsoftsqlserver-plain-wordmark'></i>
            </div>
        </Motion>
    </Marquee>
  </div>
);

export default MarqueeFunc;