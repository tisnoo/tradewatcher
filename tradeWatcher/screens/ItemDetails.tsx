import * as React from 'react';
import { Component } from 'react';
import { FlatList, StyleSheet, Button, Pressable, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ItemOverview from '../components/ItemOverview';
import { Text, View } from '../components/Themed';
import CryptoOverViewModel from '../models/cryptoOverview';
import Animated from 'react-native-reanimated'
import { getCryptoMarketData } from '../services/cryptoService';
import BottomSheet from 'reanimated-bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';


const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

let fall = new Animated.Value(1);
const bottomSheetRef = React.createRef<BottomSheet>()


export class ItemDetails extends Component { 

private item: CryptoOverViewModel;

  public state: { coins: CryptoOverViewModel[], modalvisible: boolean } = {
    coins: [],
    modalvisible: false,
  }

  constructor(route: any){
    super(route);


    this.item = route.route.params.item;
    
    console.log(this.item.ath)
  }


  render() {
    return (
      <>
        <View>
            <Text>{this.item.name}</Text>
            <Text>{this.item.currentPrice}</Text>

          
          </View>
      </>
    );
  }

  callback = () => {
    this.setState({modalvisible: false});
  }
}

const renderShadow = () => {
  const animatedShadowOpacity = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <AnimatedPressable
      onPress={() => console.log("test")}
      pointerEvents="none"
      style={[
        styles.shadowContainer,
        {
          opacity: animatedShadowOpacity,
        },
      ]}
    >
    </AnimatedPressable>

  )
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

  // Shadow
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    top: 15,
  },

  subTitle: {
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    top: 10,
  },

  modal: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    alignSelf: 'center',
    top: 200,
    borderRadius: 15,
    alignItems: 'center'
  },

  TemplateModalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'flex-end', alignItems: 'center', },
  TemplateModalContent: { width: '100%', height: '70%', borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center', borderRadius: 4, },

});
