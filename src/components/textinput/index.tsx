import React, {useRef} from 'react';
import * as S from './styles';
import {
  TextInputProps as TextInputType,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '../typography';
import {Spacing} from '../spacing';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface TextInputProps extends TextInputType {
  label?: string;
  leftItem?: any;
  errorText?: string;
  mask?: string;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const ref = useRef<any>(null);

  const {label, leftItem, errorText, mask} = props;



  const onFieldPress = () => {
    if (!ref?.current) {
      return;
    }
    ref.current.focus();
  };

  return (
    <S.Container style={{width: '100%'}}>
      <Text fontSize="sm" color="grey">
        {label}
      </Text>
      <Spacing size={RFPercentage(1)} />
      <TouchableWithoutFeedback
        accessibilityLabel={label}
        onPress={onFieldPress}>
        <S.FieldContainer>
          {leftItem && <S.LeftContainer>{leftItem}</S.LeftContainer>}
          {mask ? (
            <S.TextFieldMask {...props} ref={ref} mask={mask} />
          ) : (
            <S.TextField {...props} ref={ref} />
          )}
        </S.FieldContainer>
      </TouchableWithoutFeedback>
      <S.ErrorText>{errorText}</S.ErrorText>
    </S.Container>
  );
};
