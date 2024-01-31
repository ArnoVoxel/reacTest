import { IonCard } from "@ionic/react";

type Card = {
  completed: boolean,
  id: number,
  todo: string,
  userId: number
}

const CardDetail = (card: Card) => {
  console.log('card : ', card)

  return (
    <IonCard>
      <h1>{card.id}</h1>
      <h2>{card.todo}</h2>
      <p>{card.completed}</p>
    </IonCard>
  );
};

export default CardDetail;