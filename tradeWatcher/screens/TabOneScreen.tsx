import * as React from 'react';
import { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CryptoOverViewModel from '../models/cryptoOverview';
import { getCryptoMarketData } from '../services/cryptoService';
import { searchStockMarket } from '../services/stockService';

export class TabOneScreen extends Component {
  public state: {coins: CryptoOverViewModel[] } = {
    coins: [],
  }

  componentDidMount() {


    //searchStockMarket("ASML");
    //searchStockMarket("AAPL");
    getCryptoMarketData().then((result) => this.setState({coins: result}));
  }

  render() {
    return (
<View>
         <FlatList
           contentContainerStyle={{paddingBottom:40, paddingTop: 40}} 
           ItemSeparatorComponent={
            () => (<View 
               style={{
                 borderBottomColor: '#D3D3D3',
                 borderBottomWidth: 1,
                 marginEnd: 20,
                 marginStart: 20,
               }}>
            </View>)
          }
        data={this.state.coins}
        renderItem={({item, index, separators}) => <Text>{item.name}</Text>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
