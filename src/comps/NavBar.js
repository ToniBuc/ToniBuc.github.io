import React from 'react';
import styles from '../styles/NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className={styles.NavContainer}>
                        {/* <Nav.Link href="/"><p className={styles.LinkTxt}>Home</p></Nav.Link>
                        <Nav.Link href="/portfolio"><p className={styles.LinkTxt}>Portfolio</p></Nav.Link> */}
                        <Link to="/" className={styles.LinkMain}><p className={styles.LinkTxt}>Home</p></Link>
                        <Link to="/portfolio" className={styles.LinkMain}><p className={styles.LinkTxt}>Portfolio</p></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;