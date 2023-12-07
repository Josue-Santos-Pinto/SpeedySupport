import React from 'react';
import { createBox, createText } from '@shopify/restyle';
import { Theme } from '../../theme';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function CardHistory() {
  return (
    <Box>
      <Text>CardHistory</Text>
    </Box>
  );
}
