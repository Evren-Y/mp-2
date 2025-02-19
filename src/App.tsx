import styled from "styled-components";
import {useEffect, useState} from "react";
import {Card} from "./interfaces/Card.ts";
import DeckOfCards from "./components/DeckOfCards.tsx";

const ParentDiv=styled.div`
    width: 80vw;
    height: 100vh;
    margin: auto;
    border: 5px darkred solid;
    background-color: IndianRed;
    text-align: center;
    font: small-caps bold calc(2vw) Papyrus;

    h1 {
      padding: 1;
    }
    div {
      padding: 2%;
    }
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Card[]>([]);
    const [cardCount, setCardCount] = useState<number>(0);
    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${cardCount}`);
            const {cards} : {cards: Card[]} = await rawData.json();
            setData(cards);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [cardCount]);

    return(
        <ParentDiv>
            <h1>Deck of Cards</h1>
            <div>
              Number of Shuffled Cards Drawn:
              <input
                type="number" value={cardCount} min="0" max="52"
                onChange={(e) => setCardCount(Number(e.target.value))}/>
            </div>
            <DeckOfCards data={data}/>
        </ParentDiv>
    )
}