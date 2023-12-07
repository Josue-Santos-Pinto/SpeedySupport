import React from 'react';
import { createBox, createText } from '@shopify/restyle';
import { Theme } from '../../theme';
import RequestCard from '../../components/RequestCard';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function Home() {
  return (
    <Box flex={1} bg="darkPrimary" p="l">
      <RequestCard />
    </Box>
  );
}
