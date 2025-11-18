import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSearchbar
} from '@ionic/react';

const produtos = [
  { id: '1', nome: 'Auriculares', desc: 'Bluetooth 5.3' },
  { id: '2', nome: 'Teclado', desc: 'Mecânico' },
  { id: '3', nome: 'Monitor', desc: '24" 1080p' },
  { id: '4', nome: 'Rato', desc: 'Sem fios' }
];

const Tab1: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={query}
          onIonInput={e => setQuery(e.detail.value || '')}
          placeholder="Procurar"
        />
        <IonList>
          {filtrados.map(p => (
            <IonCard key={p.id}>
              <IonCardHeader>
                <IonCardTitle>{p.nome}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{p.desc}</IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;