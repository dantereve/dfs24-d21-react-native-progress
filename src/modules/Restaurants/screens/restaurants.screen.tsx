import SearchBar from 'modules/Search/components/search-bar.component';
import {FlatList} from 'react-native';
import {RestaurantCard} from 'modules/Restaurants/components/restaurant-card.component';
import randomRestaurantsData from 'modules/Restaurants/helpers/randomRestaurantsData';
import {VStack} from 'shared/infrastructure/layout/layout.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const RestaurantsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <VStack
      paddingTop={insets.top}
      paddingBottom={insets.bottom}
      paddingRight={insets.right}
      paddingLeft={insets.left}>
      <SearchBar />
      <FlatList
        data={randomRestaurantsData}
        renderItem={({item}) => (
          <RestaurantCard
            name={item.name}
            deliveryCost={item.deliveryCost}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            imageUri={item.imageUri}
          />
        )}
        keyExtractor={item => item.id}
      />
    </VStack>
  );
};
