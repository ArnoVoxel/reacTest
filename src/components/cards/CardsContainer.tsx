import { useState } from "react";
import { useEffect } from "react";
import CardDetail from "./CardDetail";
import { IonCard } from "@ionic/react";

type Card = {
  completed: boolean,
  id: number,
  todo: string,
  userId: number
}

type CardArray = {
  todos: Card[],
  limit: number,
  total: number,
  skip: number,
}

const CardsContainer = () => {
  const [cardsContent, setCardsContent] = useState([]);

  const fetchCards = async () => {
    try {
      await fetch('https://dummyjson.com/todos?limit=10')
        .then(response => response.json())
        .then(data => {
          setCardsContent(data.todos);
          console.log('data : ', data)
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCards();
      console.log('Async function finished, cardsContent:', cardsContent);
    };

    fetchData();
  }, []);


  return (
    <>
      {cardsContent.map((card: Card) => (
        <IonCard key={card.id}>
          <h1>{card.id}</h1>
          <h2>{card.todo}</h2>
          <p>{card.completed}</p>
        </IonCard>
      ))}
    </>
  );
}

export default CardsContainer;