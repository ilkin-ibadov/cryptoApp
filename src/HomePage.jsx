import {FlatList, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import {StyledView, StyledText, StyledButton} from './common/StyledComponents';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const [prices, setPrices] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const ws = new WebSocket(
      'wss://stream.binance.com:9443/ws/!miniTicker@arr',
    );

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      const priceData = {};

      data.forEach(ticker => {
        priceData[ticker.s] = ticker.c;
      });

      setPrices(priceData);
    };

    ws.onerror = error => {
      console.error(error);
    };

    return () => {
      ws.close();
    };
  }, []);

  const RenderItem = ({item}) => {
    return (
      <StyledButton
        onPress={() => navigation.navigate('CoinDetail', {symbol: item})}
        className="w-full flex-row items-center justify-between p-4">
        <StyledText className="text-white text-base font-bold">
          {item}
        </StyledText>
        <StyledText className="text-white text-base">{prices[item]}</StyledText>
      </StyledButton>
    );
  };

  const SeperatorItem = () => (
    <StyledView className="w-full h-px bg-zinc-500"></StyledView>
  );

  return (
    <StyledView className="flex-1 bg-zinc-700 items-center justify-center">
      <StyledText className="text-2xl font-bold text-white text-center my-4">
        Cryptocurrency Prices
      </StyledText>
      {prices ? (
        <FlatList
          data={Object.keys(prices)}
          keyExtractor={item => item}
          contentContainerStyle={{paddingTop: 20}}
          ItemSeparatorComponent={SeperatorItem}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </StyledView>
  );
};

export default HomePage;
