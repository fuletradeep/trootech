import {
    calculateHeight,
    calculateWidth,
    colors,
    Height,
    Lato,
    LatoBold,
    LatoSemibold,
    sizes,
    Width,
  } from '../../constant/theme';
  
  export const passwordSuggestionStyle = {
    textAlign: 'right',
    color: colors.dark_gray,
    fontSize: sizes.subtitle,
    fontFamily: Lato,
    marginTop:2
  };
  
  export const LoginButton = {
    width: calculateWidth(347),
    marginTop: calculateHeight(30),
    alignSelf: 'center',
    height: calculateHeight(56),
    borderRadius:8,
    justifyContent: 'center',
  };
  
  export const LoginButtonText = {
    textAlign: 'center',
    fontSize: sizes.loginText,
    // lineHeight:calculateHeight(24),
    fontFamily: LatoBold,
    color: colors.white,
    letterSpacing:sizes.footer_letterSpace
  };
  
  export const LoginButtonSapratorStyle = {
    borderWidth: 1,
    opacity:0.6,
    borderColor: colors.light_gray_text,
    
    marginVertical: calculateHeight(20),
    // position: 'relative',
  };
  
  export const LoginButtonSapratorTextStyle = {
    position: 'absolute',
    backgroundColor: colors.white,
    left: calculateWidth(140),
    top:calculateHeight(9),
    width:calculateWidth(70),
    textAlign: 'center',
    fontFamily:Lato,
    fontSize: sizes.medium-1,
    color:colors.black_text,
  };
  
  export const FacebookButtonStyle = {
    width: calculateWidth(347),
    height: calculateHeight(56),
    alignItems: 'center',
    borderRadius:8,
    justifyContent: 'center',
    backgroundColor: colors.map_strock,
  };
  
  export const FacebookButtonTextStyle = {
    fontSize: sizes.extra_large,
    color: colors.white,
    fontFamily:LatoSemibold,
    // marginLeft: calculateWidth(10),
    //textAlign:'center',
    // flex:1
  };
  
  export const ErrorTextStyle = {
    marginLeft: calculateWidth(19),
    letterSpacing:sizes.error_text_letterSpacing,
    color: colors.error,
    fontFamily:Lato,
    lineHeight:sizes.delete_title,
  }
  
  export const AuthStackContainer = {
    marginBottom: calculateHeight(25),
    marginHorizontal: calculateWidth(16),
  }
  
  export const FaceBookButtonContainer = {
    height: calculateHeight(32),
    width: calculateHeight(32),
    justifyContent: 'center',
  }
  
  export const FaceBookImage = {
    height: calculateHeight(20),
    width: calculateWidth(10.39),
  }
  
  export const ForgotPasswordText = {
    alignSelf: 'center',
    color: colors.darkOrange,
    marginTop: calculateHeight(16),
    letterSpacing: sizes.gradient_button_text_letterSpacing,
    fontSize: sizes.medium-1,
    fontFamily: LatoBold,
  }
  