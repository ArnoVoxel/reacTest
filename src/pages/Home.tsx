import { IonContent, IonHeader, IonItem, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CardsContainer from '../components/cards/CardsContainer';
import './Home.css';
import Toolbar from '../components/toolbar/Toolbar';

const Home: React.FC = () => {
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
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
