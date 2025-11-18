import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonListHeader
} from '@ionic/react';

const artigos = [
  { id: 'a1', titulo: 'Como escolher um monitor', resumo: 'Dicas rápidas para comprar sem drama.' },
  { id: 'a2', titulo: 'Bluetooth: o que muda no 5.3', resumo: 'Menos latência e mais estabilidade.' },
  { id: 'a3', titulo: 'Layouts de teclado', resumo: 'ANSI, ISO e ABNT em 1 minuto.' }
];

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Artigos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Artigos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonListHeader>Leituras</IonListHeader>
        <IonList>
          {artigos.map(a => (
            <IonCard key={a.id} routerLink={`/article/${a.id}`} button>
              <IonCardHeader>
                <IonCardTitle>{a.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{a.resumo}</IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;