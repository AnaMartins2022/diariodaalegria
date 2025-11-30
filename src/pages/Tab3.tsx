import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonIcon,
  IonModal
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const ideias = [
    'Respira fundo por 2 minutos, devagar.',
    'Escreve 3 coisas pelas quais estás grata hoje.',
    'Dá um pequeno passeio ao ar livre, nem que sejam 5 minutos.',
    'Manda mensagem a alguém de quem gostas.',
    'Ouve uma música que te acalma.'
  ];

  return (
    <IonPage className="dark-page tab3-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sugestões</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowLogin(true)}>
              <IonAvatar>
                <IonIcon icon={personCircle} style={{ width: '100%', height: '100%' }} />
              </IonAvatar>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* MODAL LOGIN (MOCK) */}
      <IonModal
        isOpen={showLogin}
        onDidDismiss={() => setShowLogin(false)}
      >
        <IonContent className="login-modal-content">
          <div className="login-modal-card">
            <IonText>
              <h2>Login com Google (mock)</h2>
              <p>
                No futuro, as sugestões podem ser personalizadas com base no perfil do
                utilizador autenticado.
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

      <IonContent className="sugestoes-content" fullscreen>
        <div className="sugestoes-card">
          <IonText>
            <h2>Sugestões de bem-estar</h2>
            <p>
              Estas são sugestões gerais. Depois podes ligar isto a um serviço/IA
              para gerar sugestões personalizadas.
            </p>
          </IonText>

          <IonList className="sugestoes-list">
            {ideias.map((texto, index) => (
              <IonItem key={index} lines="full">
                <IonLabel>{texto}</IonLabel>
              </IonItem>
            ))}
          </IonList>

          <IonButton expand="block" disabled>
            Gerar sugestões com IA (placeholder)
          </IonButton>

          <IonText className="sugestoes-helper">
            <p>
              Este botão é apenas visual. Quando tiveres o serviço pronto, a chamada vai
              acontecer aqui.
            </p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
