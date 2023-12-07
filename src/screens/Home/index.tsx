import React from 'react';
import { createBox, createText } from '@shopify/restyle';
import { Theme } from '../../theme';
import RequestCard from '../../components/RequestCard';
import { ScrollView } from 'react-native';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function Home() {
  return (
    <Box flex={1} bg="darkPrimary" p="l">
      <ScrollView>
        <RequestCard
          data={{
            id: '1',
            property: 'LG#002',
            urgency: 2,
            sector: 'Logística',
            title: 'Meu computador não quer ligar',
            body: 'Tentei iniciar meu computador porém ele não quer ligar',
          }}
        />

        <RequestCard
          data={{
            id: '2',
            property: 'AD#001',
            urgency: 1,
            sector: 'Administração',
            title: 'Está aparecendo uma mensagem de erro',
            body: 'Assim que liguei o computador apareceu uma mensagem de erro no software de administração da empresa',
          }}
        />

        <RequestCard
          data={{
            id: '3',
            property: 'RH#004',
            urgency: 0,
            sector: 'Recursos Humanos',
            title: 'Data de instalação do novo software',
            body: 'Gostaria de saber qual sera a data de lançamento para o novo software de gerenciamento de canditaturos',
          }}
        />
      </ScrollView>
    </Box>
  );
}
