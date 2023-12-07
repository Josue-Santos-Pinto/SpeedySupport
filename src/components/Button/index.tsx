import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createText, useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

type ButtonProps = {
  text: string;
};

const Text = createText();

export default function Button({ text }: ButtonProps) {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        width: 250,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bgButton,
        borderRadius: theme.spacing.m,
      }}
    >
      <Text variant="button">{text}</Text>
    </TouchableOpacity>
  );
}
