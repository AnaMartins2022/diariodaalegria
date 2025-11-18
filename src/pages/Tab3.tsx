import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const items = [
  { t: 'Headset', d: 'Imagem ilustrativa' },
  { t: 'Teclado', d: 'Imagem ilustrativa' },
  { t: 'Rato', d: 'Imagem ilustrativa' },
  { t: 'Monitor', d: 'Imagem ilustrativa' }
];

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Galeria</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {items.map((item, index) => (
              <IonCol key={index} size="12" size-md="6" size-lg="3">
                <IonCard>
                  <img
                    alt={item.t}
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                    style={{ width: '100%', height: 140, objectFit: 'cover' }}
                  />
                  <IonCardHeader>
                    <IonCardTitle>{item.t}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{item.d}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;