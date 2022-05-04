import React from 'react'
import { Image } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'

const CancelIcon = ({iconPressHandler,iconStyle,iconContainerStyle}) => {
    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={() =>iconPressHandler()}
        style={iconContainerStyle}>
        <Image
          source={require('../../assets/cancel_icon.png')}
          style={iconStyle}
        />
      </TouchableOpacity>
    )
}

export default CancelIcon
