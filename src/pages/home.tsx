import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonIcon,
  IonModal
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './home.css';

const Home: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <IonPage className="dark-page home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Diário da Alegria</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowLogin(true)}>
              <IonAvatar>
                <IonIcon icon={personCircle} style={{ width: '100%', height: '100%' }} />
              </IonAvatar>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* MODAL DE LOGIN (MOCK GOOGLE AUTH) */}
      <IonModal
        isOpen={showLogin}
        onDidDismiss={() => setShowLogin(false)}
      >
        <IonContent className="login-modal-content">
          <div className="login-modal-card">
            <IonText>
              <h2>Entrar na conta</h2>
              <p>
                Aqui ficará a autenticação real com Google.
                Neste momento é apenas <strong>(mock)</strong>.
              </p>
            </IonText>

            <IonButton expand="block" disabled>
              Continuar com Google (mock)
            </IonButton>

            <IonButton
              expand="block"
              fill="clear"
              onClick={() => setShowLogin(false)}
            >
              Fechar
            </IonButton>
          </div>
        </IonContent>
      </IonModal>

      {/* CONTEÚDO PRINCIPAL */}
      <IonContent className="home-content" fullscreen>
        <div className="home-card">
          <IonText>
            <h1>Seja Bem Vindo!</h1>
            <p>
              Regista uma nota por dia, vê sugestões de bem-estar
              e acompanha o teu relatório semanal.
            </p>
          </IonText>

          <div className="home-actions">
            <IonButton expand="block" routerLink="/tab1">
              Escrever nota de hoje
            </IonButton>
            <IonButton expand="block" routerLink="/tab2" fill="outline">
              Ver relatório semanal
            </IonButton>
            <IonButton expand="block" routerLink="/tab3" fill="outline">
              Ver sugestões
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
