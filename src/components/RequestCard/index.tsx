import React, { useState, useEffect } from 'react';
import { createBox, createText } from '@shopify/restyle';
import { Theme } from '../../theme';
import { RequestCardType } from '../../models/RequestCardType';

const Box = createBox<Theme>();
const Text = createText<Theme>();

type Props = {
  data: RequestCardType;
};

export default function RequestCard({ data }: Props) {
  const [color, setColor] = useState<string>('');

  const getColor = () => {
    switch (data.urgency) {
      case 0:
        setColor('#0A906E');
        break;
      case 1:
        setColor('#FF6600');
        break;
      case 2:
        setColor('#B21613');
        break;

      default:
        setColor('#0A906E');
    }
  };

  useEffect(() => {
    getColor();
  }, [data.urgency]);

  return (
    <Box
      width="100%"
      bg="white"
      borderWidth={6}
      style={{ borderColor: color }}
      borderRadius={5}
      p="s"
      my="l"
    >
      <Text variant="title" mb="s">
        {data.title}
      </Text>
      <Box width="100%" height={2} bg="darkPrimary" />

      <Box>
        <Box flexDirection="row" my="s" justifyContent="space-between" width="80%">
          <Text mr="xl">Propriedade: </Text>
          <Text variant="bodyCard">{data.property}</Text>
        </Box>

        <Box flexDirection="row" my="s" justifyContent="space-between" width="80%">
          <Text mr="xl">Setor: </Text>
          <Text variant="bodyCard">{data.sector}</Text>
        </Box>

        <Box flexDirection="column">
          <Text mr="xl">O que está acontecendo: </Text>
          <Text variant="bodyCard">{data.body}</Text>
        </Box>
      </Box>
    </Box>
  );
}
