import {Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";

//TODO: Make menu dropdown/offcanvas look better
export default function TopBar(){
    return(
        <Navbar sticky={"top"} bg={"danger"} className={'text-light'} expand={false}>
            <Nav className={"mx-auto align-middle"} >
                <Link to={"/"} className="h1 mb-0 link-underline link-underline-opacity-0">PixelPulse Arcade</Link>
            </Nav>
            <div className={'me-3'}>
                <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-false"}/>
                <Navbar.Offcanvas placement={'end'} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={"link-underline link-underline-opacity-0"}>
                        <Nav>
                            <Link to={'/'} className="link-underline link-underline-opacity-0">
                                Home
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={'/settings'} className="link-underline link-underline-opacity-0">
                                Settings
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={'/highscores'} className="link-underline link-underline-opacity-0">
                                High Scores
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={'/'} className="link-underline link-underline-opacity-0">
                                Log Out
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </div>



                {/*<NavDropdown title={<i className="bi bi-list"></i>} id={"menu-dropdown"} className={"h1 mb-0 me-2 text-light"}>*/}
                {/*    <NavDropdown.Item>*/}
                {/*        <Link to={'/settings'} className="link-underline link-underline-opacity-0">*/}
                {/*            Settings*/}
                {/*        </Link>*/}
                {/*    </NavDropdown.Item>*/}
                {/*    <NavDropdown.Item>*/}
                {/*        <Link to={'/highscores'} className="link-underline link-underline-opacity-0">*/}
                {/*            High Scores*/}
                {/*        </Link>*/}
                {/*    </NavDropdown.Item>*/}
                {/*</NavDropdown>*/}


        </Navbar>
    )
}