import { createBox, createText } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../../theme';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function RequestCard() {
  return (
    <Box
      width="100%"
      bg="white"
      borderWidth={6}
      borderColor="greenDark"
      borderRadius={5}
      p="s"
      my="l"
    >
      <Text variant="title">RequestCard</Text>
    </Box>
  );
}
