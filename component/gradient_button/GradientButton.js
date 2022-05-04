import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {calculateHeight, calculateWidth, colors, sizes, Width} from '../../constant/theme';
import { translate } from '../../src/translations/LanguageManager';

const GradientButton = ({loading,btn_name,buttonHandler,btn_style,text_style,disable,isSelect}) => {
    return (
        <LinearGradient colors={disable || isSelect == false ? colors.grey_gradient : colors.orange_gradient} style={btn_style}>
        <TouchableOpacity
          disabled={disable}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => buttonHandler()}>
          {loading ? (
            <ActivityIndicator size={sizes.header_text} color={colors.white} />
          ) : (
            <Text style={text_style}>{btn_name}</Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    )
}

export default GradientButton
