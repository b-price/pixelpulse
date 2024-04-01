import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function TopBar(){
    return(
        <Navbar sticky={"top"} bg={"danger"} className={'text-light'}>
            <Nav className={"mx-auto align-middle"} >
                <Link to={"/"} className="h1 mb-0 link-underline link-underline-opacity-0">PixelPulse Arcade</Link>
            </Nav>
            <Nav>
                <Link to={'/settings'} className="h1 mb-0 me-2 link-underline link-underline-opacity-0">
                    <i className="bi bi-list"></i>
                </Link>
            </Nav>
        </Navbar>
    )
}