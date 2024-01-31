import { IonItem, IonTitle, IonToolbar } from "@ionic/react";

const Toolbar: React.FC = () => {
  return (
    <IonToolbar>
      <IonTitle>
        <IonItem routerLink="/home">Home</IonItem>
      </IonTitle>
      <IonTitle>
        <IonItem routerLink="/cards">CardsList</IonItem>
      </IonTitle>
    </IonToolbar>
  )
}

export default Toolbar;