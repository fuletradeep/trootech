import {View, Text, Image,StyleSheet} from 'react-native';
import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  calculateHeight,
  calculateWidth,
  colors,
  sizes,
  Width,
} from '../../constant/theme';

const AcordingList = () => {
  return (
    <View
      style={styles.main_container}>
      <Collapse>
        <CollapseHeader>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/recycle.png')}
              style={styles.imageStyle}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={styles.heading}>
                Checking History
              </Text>
              <Text style={styles.subHeading}>
                Lat checking 11.08 AM
              </Text>
            </View>

            <Image
              source={require('../../assets/arrow_down.png')}
              style={styles.arrowImg}
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: calculateHeight(10),
            }}>
            <Image
              source={require('../../assets/recycle.png')}
              style={styles.imageStyle}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={[styles.heading,{fontSize:sizes.medium}]}>
                The Hearest Tower
              </Text>
              <Text style={[styles.subHeading,{fontSize: sizes.label_text}]}>
                on sep 08 2019 4.30 am.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: calculateHeight(10),
            }}>
            <Image
              source={require('../../assets/recycle.png')}
              style={styles.imageStyle}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={[styles.heading,{
                  fontSize: sizes.medium,
                }]}>
                The Hearest Tower
              </Text>
              <Text style={[styles.subHeading,{fontSize: sizes.label_text}]}>
                on sep 08 2019 4.30 am.
              </Text>
            </View>
          </View>

          <Text
            style={styles.viewAllText}>
            View all
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default AcordingList;

const styles = StyleSheet.create({
  main_container:{
    backgroundColor: colors.white,
    padding: calculateHeight(10),
    borderRadius: calculateHeight(10),
    shadowColor: colors.black,
    shadowOffset: {height: 8, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginBottom:calculateHeight(20)
  },
  imageStyle:{
    width: calculateWidth(60),
    height: calculateHeight(60),
    resizeMode: 'center',
  },
  heading:{
    fontSize: sizes.title,
    color: colors.black,
    fontWeight: 'bold',
  },
  subHeading:{fontSize: sizes.subtitle, color: colors.grey},
  arrowImg:{
    height: calculateHeight(30),
    width: calculateWidth(30),
    position: 'absolute',
    right: 0,
  },
  viewAllText:{
    alignSelf: 'flex-end',
    color: colors.map_strock,
    fontSize: sizes.label_text,
    fontWeight: 'bold',
  }
})
