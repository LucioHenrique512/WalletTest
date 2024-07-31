import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

import CameraIcon from '../../assets/camera.svg';
import * as S from './styles';
import {MainRouteStackParams} from '../../routes';
import {CardType} from '../../infra/types';
import {
  Button,
  ContainerWithSqares,
  Header,
  Spacing,
  Text,
  TextInput,
} from '../../components';
import {Alert} from 'react-native';
import {postCard} from '../../infra/api';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

type NavigationProps = NavigationProp<MainRouteStackParams, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const {navigate, reset} = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    number: yup.string().required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    validThru: yup.string().required('Campo obrigatório'),
    cvv: yup.string().required('Campo obrigatório'),
  });

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {number: '', name: '', validThru: '', cvv: ''},
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const id = uuid.v4();

      const toSave: CardType = {
        ...data,
        id,
        type: Math.random() < 0.5 ? 'black' : 'green',
      };

      await postCard(toSave);
      await delay(2000);
      reset({
        index: 0,
        routes: [{name: 'Finish', params: {card: toSave}}],
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Ops!', 'Ocorreu um erro ao salvar o cartão');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerWithSqares>
      <S.Container>
        <Header title="Cadastro" transparent />
        <S.Content>
          <Text fontSize="lg" color="white" textCenter>
            Wallet Test
          </Text>
          <Spacing />
          <S.FormContainer>
            <Controller
              name="number"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  leftItem={
                    <S.CameraIcon>
                      <CameraIcon color={'white'} />
                    </S.CameraIcon>
                  }
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  label="Numero do cartão"
                  mask="[0000] [0000] [0000] [0000]"
                  errorText={formState.errors.number?.message}
                  keyboardType="numeric"
                  enterKeyHint="next"
                />
              )}
            />
            <Spacing />
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  label="Nome do titular"
                  errorText={formState.errors.name?.message}
                  enterKeyHint="next"
                />
              )}
            />
            <Spacing />
            <S.Row>
              <S.Cell>
                <Controller
                  name="validThru"
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      label="vencimento"
                      mask="[00]/[00]"
                      errorText={formState.errors.name?.message}
                      keyboardType="numeric"
                      enterKeyHint="next"
                    />
                  )}
                />
              </S.Cell>
              <Spacing vertical />
              <S.Cell>
                <Controller
                  name="cvv"
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      label="código de segurança"
                      mask="[000]"
                      errorText={formState.errors.name?.message}
                      keyboardType="numeric"
                      enterKeyHint="done"
                    />
                  )}
                />
              </S.Cell>
            </S.Row>
            <Spacing />
            <Button
              text="Enviar"
              onPress={handleSubmit(onSubmit)}
              loading={loading}
            />
          </S.FormContainer>
        </S.Content>
      </S.Container>
    </ContainerWithSqares>
  );
};
