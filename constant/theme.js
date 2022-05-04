import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
const Lato = 'Lato-Regular' //400
const LatoBold = 'Lato-Bold' //700
const LatoLight = 'Lato-Light' //300
const LatoMedium = 'Lato-Medium' //500
const LatoSemibold = 'Lato-Semibold' //600
const colors = {
  orange_gradient: ['#FAE12D', '#F68A23'],
  orange_gradient_rev: ['#F68A23', '#FAE12D'],
  green_gradient: ['#9BCE27', '#6B9808'],
  blue_gradient: ['#6BE8FF', '#2974CC'],
  grey_gradient: ['#A8A8A8', '#B2B2B2'],
  transparent: '#ffffff00',
  drawerTransparent: '#00000080',
  orange: '#F68A23',
  darkOrange: '#E27309',
  black: '#000000',
  dark_gray: '#8C8C8C',
  dark_gray_text: '#666666',
  dark_gray_subtitle: '#333333',
  grey: '#B2B2B2',
  light_gray: '#A8A8A8',
  light_grey_text: '#A9A9A9',
  statusbar_gray: '#E2E4E5',
  white: '#FFFFFF',
  white_back: '#E5E5E5',
  button_gradient: ['#FBEB60', '#F8A963'],
  disable_gradient: ['#C4C4C4', '#C4C4C4'],
  main_back: '#FEFBE6',
  orange_text: '#F8A963',
  border_bottom: '#F69331',
  border_top: '#FBEF9D',
  slider_light: '#DADADA',
  map_highlight: '#429FDF15',
  map_strock: '#429FDF',
  error: '#EB5757',
  faq_back: '#FFAA33',
  border: '#F2F2F2',
  yellow_statusbar: '#EFD306',
  light_gray_text: '#C4C4C4',
  black_text: '#1A1A1A',
  fb_border: '#357FB2',
  green_dot: '#00BD56',
  chatMessage: '#F8B628',
  BannerError: '#F8D4DB',
  BannerSuccess: '#D4EDDA',
  BannerInfo: '#A6A6A6',
  BannerSuccessBorder: '#165724',
  BannerErrorBorder: '#721C24',
  BannerInfoBorder: '#E0E0E0',
  handRiseBackground: '#00000059',
  alertBackground: '#00000085',
  calenderCell: '#E9EAEB',
  footerBorder: '#FAC36B',
  articleBackground: '#429FDF26',
  chatTimestamp: '#ACACAC',
  redFeedback: '#FF0100',
  greenFeedback: '#008000',
};

const sizes = {
  btn_text: 8,
  drawer_small_text: 10,
  label_text: 12,
  subtitle: 14,
  medium: 16,
  title: 17,
  delete_title: 18,
  tab_img: 20,
  loginText: 20,
  large: 22,
  extra_large: 24,
  appName_subtitle: 25,
  header_text: 26,
  home_icon: 28,
  profile_name_line_height: 32,
  create_post_icon: 55,
  app_name_text: 60,

  footer_letterSpace: 0.5,
  chat_header_letterSpace: 0.15,
  list_text_letterSpacing: 0.3,
  why_regive_letterspacing: 0.2,
  error_text_letterSpacing: 0.2,
  articleList_letterSpacing: 0.4,
  gradient_button_text_letterSpacing: 0.8,
  articleTitle_letterSpacing: 0.25,
};

export function calculateHeight(value) {
  const newHeight = (value * Height) / 823;
  return newHeight;
}

export function calculateWidth(value) {
  const newWidth = (value * Width) / 411;
  return newWidth;
}

export{
    colors,
    Height,
    Width,
    sizes,
    Lato,
    LatoBold,
    LatoLight,
    LatoMedium,
    LatoSemibold
}
