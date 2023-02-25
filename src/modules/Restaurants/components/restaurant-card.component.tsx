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

export const RestaurantCard = () => {
  return (
    <VStack padding={16}>
      <RestaurantCardCover
        source={{
          uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        }}
      />
      <HStack>
        <VStack paddingTop={8}>
          <RestaurantName>Restaurant Name</RestaurantName>
          <HStack>
            <TextRow>5€ livraison</TextRow>
            <TextRow> &bull; </TextRow>
            <TextRow>20 - 40min</TextRow>
          </HStack>
        </VStack>
        <Spacer />
        <RatingCircle>
          <RatingText>4.5</RatingText>
        </RatingCircle>
      </HStack>
    </VStack>
  );
};
