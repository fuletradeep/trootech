import React from 'react';
import {
  DefaultTheme,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Lato,
  sizes,
  Width,
} from '../../constant/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

let show_password_string = '';
let inputTextLength = 0;

const CustomTextInput = ({
  type,
  focusable,
  label,
  value,
  setValue,
  style,
  secureTextEntry,
  setSecureTextEntry,
  rightIcon,
  disabled,
  forPassword,
  onChange,
  iconName,
  onIconPress,
  iconColor,
  errorMsg,
  multiline,
  numberOfLines,autoFocus
}) => {
  return (
    <PaperProvider theme={theme}>
      <TextInput
        scrollEnabled={true}
        disabled={disabled}
        autoCapitalize="none"
        focusable={focusable}
        label={label}
        mode={'outlined'}
        value={value}
        error={focusable}
        onChange={onChange}
        onChangeText={text => {
          setValue(text);
        }}
        // onKeyPress={({nativeEvent}) => {
        //   if (nativeEvent.key === 'Backspace') {
        //     const {eventCount, target, text} = nativeEvent;
        //     show_password_string = show_password_string.substring(
        //       0,
        //       show_password_string.length - 1,
        //     );
        //     setValue(show_password_string);
        //   }
        // }}
        outlineColor={focusable ? colors.error : colors.grey}
        selectionColor={colors.grey}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={[
          style,
          {
            backgroundColor: colors.white,
            fontSize: sizes.title,
            fontFamily: Lato,
            lineHeight: sizes.extra_large,
            textAlign:'auto',
          },
        ]}
        selectTextOnFocus={false}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        right={
          rightIcon ? (
            forPassword ? (
              secureTextEntry==false ? (
                <TextInput.Icon
                  name={() => (
                    <Image
                      source={require('../../assets/eye_on.png')}
                      style={{
                        width: calculateHeight(16),
                        height: calculateHeight(16),
                      }}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                      resizeMode="contain"
                    />
                  )}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <TextInput.Icon
                  name={() => (
                    <Image
                      source={require('../../assets/eye_off.png')}
                      style={{
                        width: calculateHeight(16),
                        height: calculateHeight(16),
                      }}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                      resizeMode="contain"
                    />
                  )}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
            )
            ) : (
              <TextInput.Icon
                name={() => (
                  <Ionicons
                    name={iconName}
                    size={30}
                    color={iconColor}
                    // style={{marginTop: calculateHeight(15)}}
                  />
                )}
                onPress={onIconPress}
              />
            )
          ) : null
        }
        theme={{colors: {text: focusable ? colors.error : colors.dark_gray}}}
      />
      {focusable && <Text style={styles.ErrorTextStyle}>{errorMsg}</Text>}
    </PaperProvider>
  );
};

export default CustomTextInput;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.orange,
    text: colors.dark_gray,
    error: colors.error,
  },
};

const styles = StyleSheet.create({
  ErrorTextStyle: {
    marginLeft: calculateWidth(19),
    letterSpacing: sizes.error_text_letterSpacing,
    color: colors.error,
    fontFamily: Lato,
    lineHeight: sizes.delete_title,
    marginTop: calculateHeight(2),
  },
});
