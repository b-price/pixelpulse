import {Container, Row} from "react-bootstrap";
import GameCard from "./GameCard.jsx";

const game1 = {
    name:"Pokemon Red",
    genre:"RPG",
    desc:"Catch cool animals and battle them.",
    imageSrc:"/src/assets/pokered.jpeg"
}
export default function MainPage(){
    return(
        <>
            <Container className="h-100">
                <Row className="d-flex justify-content-evenly flex-wrap">
                    <GameCard name={game1.name} genre={game1.genre} desc={game1.desc} imageSrc={game1.imageSrc} number={"1"}/>
                    <GameCard name={game1.name} genre={game1.genre} desc={game1.desc} imageSrc={game1.imageSrc} number={"2"}/>
                    <GameCard name={game1.name} genre={game1.genre} desc={game1.desc} imageSrc={game1.imageSrc} number={"3"}/>
                </Row>

            </Container>
        </>
    )
}