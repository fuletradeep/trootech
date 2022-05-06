import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { calculateHeight, calculateWidth, colors, sizes } from '../../constant/theme';
import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';
 const Profile = () => {

  const [user,setUser] = useState({})
 

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = database().ref('Users/firebasedata').once('value', function (snapshot) {
        console.log(snapshot.val())
        setUser(snapshot.val())
    });
      return () => {};
    }, [])
  );

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
              <Text style={styles.info}>{user.type}</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
        </View>
      </View>
    );
  
}

export default Profile

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