import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Accordion} from "react-bootstrap";

export default function GameCard(props) {
    return (
        <Card style={{ width: '15rem' }} className={"m-2 p-1"}>
            <Card.Img className="img-fluid border border-2" variant="top" src={props.imageSrc} />
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey={props.id}>
                        <Accordion.Header><h5>{props.name}</h5></Accordion.Header>
                        <Accordion.Body>
                            <p><em>{props.genre}</em></p>
                            <p>{props.desc}</p>
                            <Button variant="primary" onClick={""/*TODO: Pass in function to open game*/}>Play!</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}