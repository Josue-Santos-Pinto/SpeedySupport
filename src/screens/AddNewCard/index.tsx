import React from 'react';
import { createBox, createText, useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import { ScrollView, TextInput } from 'react-native';
import Button from '../../components/Button';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function AddNewCard() {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1} bg="darkSecundary" px="xl">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mb="m" mt="s">
          <Text variant="label">Titulo da chamada: </Text>
          <TextInput
            style={{
              width: '100%',
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.s,
              marginTop: theme.spacing.s,
              padding: 10,
            }}
          />
        </Box>
        <Box mb="m">
          <Text variant="label">Identificador de equipamento: </Text>
          <TextInput
            style={{
              width: '100%',
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.s,
              marginTop: theme.spacing.s,
              padding: 10,
            }}
          />
        </Box>
        <Box mb="m">
          <Text variant="label">Setor: </Text>
          <TextInput
            style={{
              width: '100%',
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.s,
              marginTop: theme.spacing.s,
              padding: 10,
            }}
          />
        </Box>
        <Box mb="m">
          <Text variant="label">Urgência: </Text>
        </Box>
        <Box mb="m">
          <Text variant="label">O que está acontecendo? </Text>
          <TextInput
            style={{
              width: '100%',
              minHeight: 200,
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.s,
              marginTop: theme.spacing.s,
              padding: 10,
              textAlignVertical: 'top',
            }}
            multiline
          />
        </Box>
        <Box width="100%" justifyContent="center" alignItems="center" my="s">
          <Button text="Enviar" />
        </Box>
      </ScrollView>
    </Box>
  );
}
