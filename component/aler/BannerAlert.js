import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Animated,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Height,
  Lato,
  LatoMedium,
  LatoSemibold,
  sizes,
  Width,
} from '../../constant/theme';
import {
  Alert,
  BannerError,
  BannerSuccess,
  callback,
  callbackNotification,
  callbackWarning,
} from '../../config/string';
import {
  clearAlert,
  clearNotification,
} from '../../src/custom_alert/redux/action/BannerAlert';

const BannerAlert = () => {
  const dispatch = useDispatch();
  const [FadeValue, setFadeValue] = useState(1);
  const BannerAlert = useSelector(state => state.BannerAlert);
  const [Refresh, setRefresh] = useState(false);

//   const showAnimation = () => {
//     if (
//       BannerAlert.alert_array == undefined ||
//       BannerAlert.alert_array == null ||
//       BannerAlert.alert_array.length == 0
//     ) {
//       return;
//     } else {
//       if (BannerAlert.alert_array.length >= 2) {
//         BannerAlert.alert_array.map((item, index) => {
//           setTimeout(() => {
//             clearNotification(dispatch, index);
//             setRefresh(!Refresh);
//           }, 2000 * parseInt(index + 1));

//           setRefresh(!Refresh);
//         });
//       }
//     }

//     if (BannerAlert.alert_array.length == 1) {
//       setTimeout(() => {
//         BannerAlert.alert_array.shift();
//         setRefresh(!Refresh);
//         BannerAlert.alert_array.length > 1 ? setFadeValue(1) : setFadeValue(0);
//       }, 2000);

//       setRefresh(!Refresh);
//       setFadeValue(1);
//     }
//   };

  const renderList = ({item, index}) => {
    return (
      <Animated.View
        // onLayout={() => showAnimation()}
        style={[
          {
            backgroundColor:
              item.modalType == BannerSuccess
                ? colors.BannerSuccess
                : item.modalType == BannerError
                ? colors.BannerError
                : colors.BannerInfo,
            borderColor:
              item.modalType == BannerSuccess
                ? colors.BannerSuccessBorder
                : item.modalType == BannerError
                ? colors.BannerErrorBorder
                : colors.BannerInfoBorder,
            borderWidth: 1,
            justifyContent: 'center',
            paddingVertical: calculateHeight(14),
            marginHorizontal: calculateWidth(16),
            marginVertical: calculateHeight(3),
            borderRadius: 5,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: calculateWidth(15),
          }}>
          <Text
            style={[
              styles.delete_confirmation,
              {
                flex: 1,
                color:
                  item.modalType == BannerSuccess
                    ? colors.BannerSuccessBorder
                    : item.modalType == BannerError
                    ? colors.BannerErrorBorder
                    : colors.BannerInfoBorder,
              },
            ]}>
            {item.message}
          </Text>
        </View>
      </Animated.View>
    );
  };
  return (
    <View style={{zIndex: 2, elevation: 2}}>
      <View
        style={{position: 'absolute', width: Width, top: calculateHeight(40)}}>
        {BannerAlert.alert_array == [] ||
        BannerAlert.alert_array == null ||
        BannerAlert.alert_array == undefined ? null : (
          <FlatList
            data={BannerAlert.alert_array}
            renderItem={item => renderList(item)}
            keyExtractor={item => JSON.stringify(item.id)}
            scrollEnabled={false}
            inverted={true}
          />
        )}
      </View>

      {/* <Text
        style={{
          zIndex: 5,
          padding: 50,
          backgroundColor: 'black',
          position: 'absolute',
          width: Width,
        }}>
        ADD
      </Text> */}
    </View>
  );
};

export default BannerAlert;
const styles = StyleSheet.create({
  button: {
    height: calculateHeight(46),
    width: calculateWidth(144),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.statusbar_gray,
  },
  buttonError: {
    height: calculateHeight(46),
    width: calculateWidth(288),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.statusbar_gray,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.orange,
    fontSize: sizes.subtitle,
    fontFamily: LatoMedium,
  },
  delete_acc_title: {
    textAlign: 'center',
    color: colors.light_grey_text,
    fontSize: sizes.loginText,
    marginVertical: calculateHeight(13.82),
    fontFamily: LatoMedium,
  },
  BannerTitle: {
    textAlign: 'center',
    color: colors.light_grey_text,
    fontSize: sizes.loginText,
    marginBottom: calculateHeight(5),
    fontFamily: LatoMedium,
  },
  delete_confirmation: {
    // textAlign: 'center',
    color: colors.light_grey_text,
    fontFamily: LatoSemibold,
    fontSize: sizes.medium,
    fontFamily: Lato,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  Image: {
    height: calculateHeight(64),
    width: calculateHeight(64),
    position: 'absolute',
    top: calculateHeight(-32),
  },
});
