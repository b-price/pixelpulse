import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function GameCard(props) {
    return (
        <Card style={{ width: '15rem' }} className={"m-2 p-1"}>
            <Link to={'/game'} state={props.name}>
                <Card.Img className="img-fluid border border-2" variant="top" src={props.imageSrc} />
            </Link>

            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey={props.id}>
                        <Accordion.Header><h5>{props.name}</h5></Accordion.Header>
                        <Accordion.Body>
                            <p><em>{props.genre}</em></p>
                            <p>{props.desc}</p>
                            <Link to={'/game'} state={props.name}>
                                <Button variant="primary">Play!</Button>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}