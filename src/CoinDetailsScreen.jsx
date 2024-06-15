import {useEffect, useState} from 'react';
import {StyledView, StyledText} from './common/StyledComponents';
import {ActivityIndicator} from 'react-native';

const CoinDetailsScreen = ({route}) => {
  const {symbol} = route.params;
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`,
    );

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      setCoinData(data);
    };

    ws.onerror = error => {
      console.error(error);
      setError('Error fetching data');
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <StyledView className="flex-1 bg-zinc-700">
      <StyledText className="text-2xl font-bold text-white text-center my-5">
        {symbol} Details
      </StyledText>
      {error ? (
        <StyledText className="text-base text-red-400">{error}</StyledText>
      ) : coinData ? (
        <StyledView className="w-full px-5">
          <StyledText className="text-base text-white font-bold my-2">
            Price: {coinData.c}
          </StyledText>
          <StyledText className="text-base text-white font-bold my-2">
            High: {coinData.h}
          </StyledText>
          <StyledText className="text-base text-white font-bold my-2">
            Low: {coinData.l}
          </StyledText>
          <StyledText className="text-base text-white font-bold my-2">
            Volume: {coinData.v}
          </StyledText>
        </StyledView>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </StyledView>
  );
};

export default CoinDetailsScreen;
