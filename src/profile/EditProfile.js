import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  calculateHeight,
  calculateWidth,
  colors,
  sizes,
} from '../../constant/theme';
import database from '@react-native-firebase/database';
import { showBannerAlert } from '../custom_alert/redux/action/BannerAlert';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BannerSuccess } from '../../config/string';

const EditProfile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    database()
      .ref('Users/firebasedata')
      .once('value', function (snapshot) {
        console.log(snapshot.val());
        setUser(snapshot.val());
        setFirstName(snapshot.val().first_name);
        setLastName(snapshot.val().last_name);
      });
  }, []);

  const BtnOnApplyChange = () => {
    user.first_name = firstName;
    user.last_name = lastName;
console.log('^^^^');
const firebasedata = user
    database().ref('Users/')
      .update({
        firebasedata,
      })
      .then(response => {
        const object = {
          title: null,
          message: 'data updated successfully',
          display: true,
          modalType: BannerSuccess,
          priority: 'low',
          accept: null,
          acceptFunction: null,
          duration: 3000,
        };
        showBannerAlert(dispatch, object);
        navigation.goBack()
      })
      .catch(error => console.log('ERROR', error));
    console.log('$$$', user);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.headerText}>Email</Text>
          <TextInput
            value={user.email}
            editable={false}
            style={[
              styles.TextInputStyle,
              {
                backgroundColor: colors.dark_gray,
              },
            ]}
          />

          <Text style={styles.headerText}>First Name</Text>
          <TextInput
            value={firstName}
            style={styles.TextInputStyle}
            onChangeText={text => {
              setFirstName(text);
            }}
          />

          <Text style={styles.headerText}>Last Name</Text>
          <TextInput
            value={lastName}
            style={styles.TextInputStyle}
            onChangeText={text => {
              setLastName(text);
            }}
          />

          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => BtnOnApplyChange()}>
            <Text style={styles.headerText}>Apply Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow_statusbar,
    height: calculateHeight(200),
    borderBottomLeftRadius: calculateWidth(20),
    borderBottomRightRadius: calculateWidth(20),
  },
  avatar: {
    width: calculateWidth(130),
    height: calculateWidth(130),
    borderRadius: calculateWidth(63),
    borderWidth: calculateHeight(4),
    borderColor: 'white',
    marginBottom: calculateHeight(10),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: calculateHeight(130),
  },
  name: {
    fontSize: sizes.large,
    color: colors.map_strock,
    fontWeight: '600',
  },
  body: {
    marginTop: calculateHeight(40),
  },
  bodyContent: {
    padding: calculateWidth(30),
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: sizes.medium,
    color: colors.map_strock,
    marginTop: calculateHeight(10),
  },
  description: {
    fontSize: 16,
    color: colors.dark_gray,
    marginTop: calculateHeight(10),
    textAlign: 'center',
  },
  headerText: {
    fontSize: sizes.medium,
    color: colors.black,
    fontWeight: 'bold',
    marginTop: calculateHeight(10),
  },
  TextInputStyle: {
    backgroundColor: colors.light_gray + 80,
    marginTop: calculateHeight(10),
    fontSize: sizes.label_text,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: sizes.subtitle,
  },
  btnStyle: {
    backgroundColor: colors.yellow_statusbar,
    marginTop: calculateHeight(30),
    height: calculateHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
