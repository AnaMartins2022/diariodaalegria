
import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const map: Record<string, { nome: string; desc: string; preco: string }> = {
  '1': { nome: 'Auriculares', desc: 'Som nítido e baixa latência', preco: '29,90€' },
  '2': { nome: 'Teclado', desc: 'Switches lineares', preco: '49,90€' },
  '3': { nome: 'Monitor', desc: 'Painel IPS 75Hz', preco: '119,00€' },
  '4': { nome: 'Rato', desc: 'Sensor preciso', preco: '24,90€' }
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = map[id] || { nome: 'Produto', desc: 'Detalhes indisponíveis', preco: '-' };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{data.nome}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ margin: 16 }}>
          <IonCardHeader>
            <IonCardTitle>{data.nome}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p style={{ marginTop: 0 }}>{data.desc}</p>
            <p style={{ fontWeight: 600 }}>{data.preco}</p>
            <IonButton routerLink="/tab1">Voltar aos Produtos</IonButton>
            <IonButton fill="clear" routerLink="/home">Home</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
