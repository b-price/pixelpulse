import {Button, Container, Row} from "react-bootstrap";
import GameCard from "./GameCard.jsx";
import {Link} from "react-router-dom";

//TODO: Put the actual games in here. Or read them from the db
//TODO: Add link to play the games to each object
const games = [
    {
        id:"0",
        name:"Pokemon Red",
        genre:"RPG",
        desc:"Catch cool animals and battle them.",
        imageSrc:"/src/assets/pokered.jpeg"
    },
    {
        id:"1",
        name:"Pokemon Red",
        genre:"RPG",
        desc:"Catch cool animals and battle them.",
        imageSrc:"/src/assets/pokered.jpeg"
    },
    {
        id:"2",
        name:"Pokemon Red",
        genre:"RPG",
        desc:"Catch cool animals and battle them.",
        imageSrc:"/src/assets/pokered.jpeg"
    },

]

export default function MainPage(){
    return(
        <>
            <Container>
                <Row className="d-flex justify-content-evenly flex-wrap py-5">
                    {games.map((game, i) =>
                        <GameCard
                            name={game.name}
                            genre={game.genre}
                            desc={game.desc}
                            imageSrc={game.imageSrc}
                            id={game.id}
                            key={i}
                        />
                    )}
                </Row>
                <Row className={"d-none d-lg-flex justify-content-evenly py-5 sticky-bottom "}>
                    <div className={'w-50'}>
                        <Link to={'/highscores'}>
                            <Button variant={"primary"} size={"lg"} className={'w-100'}>
                                <h2 className="mb-0">HIGH SCORES</h2>
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </>
    )
}