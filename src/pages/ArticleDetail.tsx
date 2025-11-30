
import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const map: Record<string, { titulo: string; corpo: string }> = {
  'a1': { titulo: 'Como escolher um monitor', corpo: 'Define o orçamento. Escolhe o tamanho e resolução. Confere a taxa de atualização e o tipo de painel. Vê portas compatíveis com o teu portátil.' },
  'a2': { titulo: 'Bluetooth 5.3 em poucas palavras', corpo: 'Mais eficiência, menos interferências e melhor latência em jogos. Para música, o ganho é estabilidade.' },
  'a3': { titulo: 'Layouts de teclado', corpo: 'ANSI tem Enter pequeno. ISO tem Enter grande e tecla extra ao lado do shift. ABNT adiciona Ç e adaptações para PT-BR.' }
};

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = map[id] || { titulo: 'Artigo', corpo: 'Conteúdo indisponível.' };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{data.titulo}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ margin: 16 }}>
          <IonCardHeader>
            <IonCardTitle>{data.titulo}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p style={{ marginTop: 0, lineHeight: 1.6 }}>{data.corpo}</p>
            <IonButton routerLink="/tab2">Voltar aos Artigos</IonButton>
            <IonButton fill="clear" routerLink="/home">Home</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


export default ArticleDetail;
