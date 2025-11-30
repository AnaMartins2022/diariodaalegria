import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonText,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonIcon,
  IonModal
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const relatorio = {
    resumo:
      'Esta semana escreveste várias notas positivas, com foco em gratidão e pequenos progressos pessoais.',
    palavras: ['gratidão', 'alegria', 'auto-cuidado'],
    sugestao:
      'Continua a registar os teus momentos positivos e, quando te sentires em baixo, relê as notas da semana.'
  };

  return (
    <IonPage className="dark-page tab2-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Relatório Semanal</IonTitle>
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
              <p>No futuro, os relatórios serão personalizados por utilizador.</p>
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

      <IonContent className="relatorio-content" fullscreen>
        <IonCard className="relatorio-card">
          <IonCardHeader>
            <IonCardTitle>Resumo da semana</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>{relatorio.resumo}</p>
            </IonText>

            <div className="relatorio-palavras">
              <IonText>
                <p>Palavras-chave:</p>
              </IonText>
              <div className="relatorio-chips">
                {relatorio.palavras.map((p, i) => (
                  <IonChip key={i}>{p}</IonChip>
                ))}
              </div>
            </div>

            <div className="relatorio-sugestao-final">
              <IonText>
                <p>Sugestão final:</p>
              </IonText>
              <IonText>
                <p>{relatorio.sugestao}</p>
              </IonText>
            </div>

            <IonButton expand="block" disabled>
              Atualizar relatório (placeholder)
            </IonButton>

            <IonText className="relatorio-helper">
              <p>
                Quando o backend estiver pronto, este botão vai pedir um relatório real
                baseado nas notas da semana.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
