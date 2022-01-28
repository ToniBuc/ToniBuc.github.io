import React from 'react';
import styles from '../styles/NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={styles.BtnDiv}>
                <FontAwesomeIcon icon={faBars}
                                className={styles.NavBtn}
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-text"
                                aria-expanded={open}/>
            </div>
            <Navbar bg="dark" variant="dark" className={styles.NavMain}>
                <Container>
                
                    <Nav className={styles.NavSub}>
                        <Collapse in={open} className={styles.Collapse}>
                            <div id="collapse-text" className={styles.CollapseDiv}>
                                <p className={styles.EmptyTxt}></p>
                                <Link to="/" className={styles.LinkMain}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-text"
                                    aria-expanded={open}
                                ><p className={styles.LinkTxt}>Home</p></Link>
                                <Link to="/portfolio" className={styles.LinkMain}
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-text"
                                aria-expanded={open}><p className={styles.LinkTxt}>Portfolio</p></Link>
                            </div>
                        </Collapse>
                        {/* <Nav.Link href="/"><p className={styles.LinkTxt}>Home</p></Nav.Link>
                        <Nav.Link href="/portfolio"><p className={styles.LinkTxt}>Portfolio</p></Nav.Link> */}
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;