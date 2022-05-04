import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { calculateHeight, calculateWidth, colors, sizes } from '../../constant/theme';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>React native / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: colors.yellow_statusbar,
    height:calculateHeight(200),
    borderBottomLeftRadius:calculateWidth(20),
    borderBottomRightRadius:calculateWidth(20)
  },
  avatar: {
    width: calculateWidth(130),
    height: calculateWidth(130),
    borderRadius: calculateWidth(63),
    borderWidth: calculateHeight(4),
    borderColor: "white",
    marginBottom:calculateHeight(10),
    alignSelf:'center',
    position: 'absolute',
    marginTop:calculateHeight(130)
  },
  name:{
    fontSize:sizes.large,
    color:colors.map_strock,
    fontWeight:'600',
  },
  body:{
    marginTop:calculateHeight(40),
  },
  bodyContent: {
    alignItems: 'center',
    padding:calculateWidth(30),
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:sizes.medium,
    color: colors.map_strock,
    marginTop:calculateHeight(10)
  },
  description:{
    fontSize:16,
    color: colors.dark_gray,
    marginTop:calculateHeight(10),
    textAlign: 'center'
  },
});