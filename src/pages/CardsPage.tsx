import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardsContainer from '../components/cards/CardsContainer';
import './Home.css';
import Toolbar from '../components/toolbar/Toolbar';

const CardsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardsContainer />
      </IonContent>
    </IonPage>
  );
};

export default CardsPage;
