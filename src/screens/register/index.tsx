import React from 'react';
import {
  Button,
  ContainerWithSqares,
  Header,
  Spacing,
  Text,
  TextInput,
} from '../../components';
import * as S from './styles';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const RegisterScreen: React.FC = () => {
  const schema = yup.object().shape({
    number: yup.string().required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    validThru: yup.string().required('Campo obrigatório'),
    cvv: yup.string().required('Campo obrigatório'),
  });

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {number: ''},
  });

  const onSubmit = (data: any) => console.log(data);


  return (
    <ContainerWithSqares>
      <S.Container>
        <Header title='Cadastro' transparent/>
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
            <Button text="Enviar" onPress={handleSubmit(onSubmit)}  />
          </S.FormContainer>
        </S.Content>
      </S.Container>
    </ContainerWithSqares>
  );
};
