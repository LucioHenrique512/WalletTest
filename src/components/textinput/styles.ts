import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {PropsWithRef} from 'react';
import TextInputMask, {TextInputMaskProps} from 'react-native-text-input-mask';

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.sizes.fontSize.sm}px;
  color: ${({theme}) => theme.colors.grey};
  margin-bottom: ${({theme}) => theme.sizes.fontSize.xxs}px;
`;

export const FieldContainer = styled.View`
  background: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.sizes.fontSize.xxs}px;
  height: ${RFPercentage(5.5)}px;
  flex-direction: row;
  overflow: hidden;
`;

export const LeftContainer = styled.View`
  height: ${RFPercentage(5.5)}px;
  width: ${RFPercentage(5.5)}px;
  align-items: center;
  justify-content: center;
`;

export const TextField: PropsWithRef<any> = styled.TextInput`
  font-size: ${({theme}) => theme.sizes.fontSize.md}px;
  flex: 1;
  padding-left: ${({theme}) => theme.sizes.fontSize.xxs}px;
`;

export const TextFieldMask: PropsWithRef<any> = styled(TextInputMask)`
  font-size: ${({theme}) => theme.sizes.fontSize.md}px;
  flex: 1;
  padding-left: ${({theme}) => theme.sizes.fontSize.xxs}px;
`;

export const ErrorText = styled.Text`
  font-size: ${({theme}) => theme.sizes.fontSize.xs}px;
  color: ${({theme}) => theme.colors.error};
`;
