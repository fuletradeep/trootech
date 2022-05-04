import {View, Text, Image} from 'react-native';
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
      style={{
        backgroundColor: colors.white,
        padding: calculateHeight(10),
        borderRadius: calculateHeight(10),
        shadowColor: colors.black,
        shadowOffset: {height: 8, width: 0},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        marginBottom:calculateHeight(20)
      }}>
      <Collapse>
        <CollapseHeader>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/recycle.png')}
              style={{
                width: calculateWidth(60),
                height: calculateHeight(60),
                resizeMode: 'center',
              }}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={{
                  fontSize: sizes.title,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                Checking History
              </Text>
              <Text style={{fontSize: sizes.subtitle, color: colors.grey}}>
                Lat checking 11.08 AM
              </Text>
            </View>

            <Image
              source={require('../../assets/arrow_down.png')}
              style={{
                height: calculateHeight(30),
                width: calculateWidth(30),
                position: 'absolute',
                right: 0,
              }}
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
              style={{
                width: calculateWidth(60),
                height: calculateHeight(60),
                resizeMode: 'center',
              }}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={{
                  fontSize: sizes.medium,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                The Hearest Tower
              </Text>
              <Text style={{fontSize: sizes.label_text, color: colors.grey}}>
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
              style={{
                width: calculateWidth(60),
                height: calculateHeight(60),
                resizeMode: 'center',
              }}
            />
            <View style={{marginLeft: calculateWidth(10)}}>
              <Text
                style={{
                  fontSize: sizes.medium,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                The Hearest Tower
              </Text>
              <Text style={{fontSize: sizes.label_text, color: colors.grey}}>
                on sep 08 2019 4.30 am.
              </Text>
            </View>
          </View>

          <Text
            style={{
              alignSelf: 'flex-end',
              color: colors.map_strock,
              fontSize: sizes.label_text,
              fontWeight: 'bold',
            }}>
            View all
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default AcordingList;
