import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loja Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Loja Demo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '16px' }}>
          <h2 style={{ marginBottom: 8 }}>Bem-vindo</h2>
          <p style={{ marginTop: 0 }}>
            Protótipo simples com navegação. Escolhe uma secção.
          </p>

          <IonCard routerLink="/tab1" button>
            <IonCardHeader>
              <IonCardTitle>🛍️ Ver Produtos</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Explora os produtos disponíveis na loja.
            </IonCardContent>
          </IonCard>

          <IonCard routerLink="/tab2" button color="secondary">
            <IonCardHeader>
              <IonCardTitle>📚 Ler Artigos</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Descobre conteúdos e artigos informativos.
            </IonCardContent>
          </IonCard>

          <IonCard routerLink="/tab3" button color="tertiary">
            <IonCardHeader>
              <IonCardTitle>🖼️ Abrir Galeria</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Vê imagens e inspirações visuais.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;