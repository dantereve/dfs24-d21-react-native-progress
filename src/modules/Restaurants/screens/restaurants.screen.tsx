import SearchBar from 'modules/Search/components/search-bar.component';
import {FlatList} from 'react-native';
import {RestaurantCard} from 'modules/Restaurants/components/restaurant-card.component';
import randomRestaurantsData from 'modules/Restaurants/helpers/randomRestaurantsData';

export const RestaurantsScreen = () => {
  return (
    <>
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
    </>
  );
};
