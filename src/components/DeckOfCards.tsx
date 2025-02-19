import styled from "styled-components";
import {Card} from "../interfaces/Card.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

const SingleCharDiv=styled.div<{suit: string}>`
    box-content
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    background-color: ${(props) => (props.suit === "HEARTS" || props.suit === "DIAMONDS" ? 'red' : 'black')};
    font: italic small-caps bold calc(1vw) Papyrus, fantasy;
    color: ${(props) => (props.suit === "HEARTS" || props.suit === "DIAMONDS" ? 'black' : 'red')};
    text-align: center;

    img {
        display: block;
        margin: auto;
        max-width: 80%;
        height: auto;
    }
`;

export default function DeckOfCards(props : { data:Card[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((card: Card) =>
                    <SingleCharDiv key={card.code} suit={card.suit}>
                        <h1>{card.value + " OF " + card.suit}</h1>
                        <img src={card.image} alt={`image of ${card.code}`}></img>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}