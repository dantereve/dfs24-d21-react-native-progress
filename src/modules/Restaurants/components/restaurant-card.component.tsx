import React from 'react';
import styled from 'styled-components/native';
import {
  VStack,
  HStack,
  Spacer,
} from 'shared/infrastructure/layout/layout.style';
import {ITheme} from 'shared/infrastructure/theme';

const RestaurantCardCover = styled.Image`
  width: 100%;
  height: 180px;
`;

const RestaurantName = styled.Text`
  font-size: ${({theme}: {theme: ITheme}) => theme.sizes.regular};
  font-weight: 700;
  color: ${({theme}: {theme: ITheme}) => theme.colors.text.darker};
`;

const TextRow = styled.Text`
  font-size: ${({theme}: {theme: ITheme}) => theme.sizes.m};
  font-weight: 400;
  color: ${({theme}: {theme: ITheme}) => theme.colors.text.dark};
`;

const RatingCircle = styled.View`
  width: 28px;
  height: 28px;
  border-radius: ${({theme}: {theme: ITheme}) => theme.sizes.l};
  background-color: ${({theme}: {theme: ITheme}) =>
    theme.colors.ui.greyBackground};
  align-items: center;
  justify-content: center;
`;

const RatingText = styled.Text`
  font-size: ${({theme}: {theme: ITheme}) => theme.sizes.s};
  color: ${({theme}: {theme: ITheme}) => theme.colors.text.darker};
`;

interface IRestaurantCardProps {
  name: string;
  deliveryCost: string;
  deliveryTime: string;
  rating: number;
  imageUri: string;
}

export const RestaurantCard: React.FC<IRestaurantCardProps> = ({
  name,
  deliveryCost,
  deliveryTime,
  rating,
  imageUri,
}) => {
  return (
    <VStack padding={16}>
      <RestaurantCardCover source={{uri: imageUri}} />
      <HStack>
        <VStack paddingTop={8}>
          <RestaurantName>{name}</RestaurantName>
          <HStack>
            <TextRow>{deliveryCost}</TextRow>
            <TextRow> &bull; </TextRow>
            <TextRow>{deliveryTime}</TextRow>
          </HStack>
        </VStack>
        <Spacer />
        <RatingCircle>
          <RatingText>{rating}</RatingText>
        </RatingCircle>
      </HStack>
    </VStack>
  );
};
