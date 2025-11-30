import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTextarea,
  IonButton,
  IonText,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonIcon,
  IonModal
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [nota, setNota] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const guardarNota = () => {
    const conteudo = nota.trim();
    if (!conteudo) {
      setMensagem('Escreve algo antes de guardar 🙂');
      return;
    }

    // FUTURO: chamada à API/BD para guardar a nota.
    setMensagem('Nota guardada com sucesso ✨');
    setNota('');
  };

  return (
    <IonPage className="dark-page tab1-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Nota Diária</IonTitle>
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
              <p>Esta área vai usar autenticação externa no futuro.</p>
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

      <IonContent className="nota-content" fullscreen>
        <div className="nota-card">
          <IonText>
            <h2>A tua nota de hoje é</h2>
          </IonText>

          <IonTextarea
            value={nota}
            onIonChange={(e) => setNota(e.detail.value ?? '')}
            placeholder="Escreve como foi o teu dia..."
            autoGrow
            rows={8}
            className="nota-textarea"
          />

          <IonButton expand="block" onClick={guardarNota}>
            Guardar Nota
          </IonButton>

          {mensagem && (
            <IonText
              className={`nota-msg ${
                mensagem.includes('sucesso') ? 'sucesso' : 'erro'
              }`}
            >
              <p>{mensagem}</p>
            </IonText>
          )}

          <IonText className="nota-extra">
            <p>* No sistema final, cada utilizador terá apenas uma nota por dia.</p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
