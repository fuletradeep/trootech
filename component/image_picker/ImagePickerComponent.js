import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {calculateHeight, colors, Lato, sizes} from '../../constant/theme';
// import {CreatepostImagePicker} from '../../src/create_post/CreatePostImagePickerFunction';
// import { showBannerAlert } from '../../src/custom_alert/redux/action/BannerAlert';
// import {showAlert} from '../../src/custom_alert/redux/action/customAlert';
// import {
//   deleteAvatar,
//   resetProfile,
//   showProfile,
//   updateProfileImg,
// } from '../../src/profile/redux/action/profile';

import {translate} from '../../translation/LanguageManager';

const ImagePickerComponent = ({
  setPostImageArray,
  CloseRBSheet,
  postImagePicker,
  postImageArray,
  updatePostImagePicker,
  setUpdatePostImageArray,
  updatePostImageArray,
  createPostObject,
  setCreatePostObject,
  avatar,
  setAvatar
}) => {
  const dispatch = useDispatch();
  return (
    <View style={{height: calculateHeight(60)}}>
      <Text style={styles.selectOption}>{translate('select_option')}</Text>

      <TouchableOpacity
        onPress={() => {
          // if (postImagePicker) {
          //   CreatepostImagePicker(
          //     camera,
          //     CloseRBSheet,
          //     setPostImageArray,
          //     postImageArray,
          //     updatePostImagePicker,
          //     setUpdatePostImageArray,
          //     updatePostImageArray,
          //     createPostObject,
          //     setCreatePostObject,
          //     dispatch
          //   );
          // } else {
          //   updateProfileImg(dispatch, camera, CloseRBSheet,avatar,setAvatar);
          // }
        }}
        style={[styles.buttonList]}>
        <Text style={styles.buttonText}>{translate('take_photo')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // if (postImagePicker) {
          //   CreatepostImagePicker(
          //     selectGalleryPhoto,
          //     CloseRBSheet,
          //     setPostImageArray,
          //     postImageArray,
          //     updatePostImagePicker,
          //     setUpdatePostImageArray,
          //     updatePostImageArray,
          //     createPostObject,
          //     setCreatePostObject,
          //   );
          // } else {
          //   updateProfileImg(dispatch, selectGalleryPhoto, CloseRBSheet,avatar,setAvatar);
          // }
          // CloseRBSheet();
        }}
        style={styles.buttonList}>
        <Text style={styles.buttonText}>
          {translate('choose_from_gallery')}
        </Text>
      </TouchableOpacity>

      {postImagePicker == false ? (
        <TouchableOpacity
          // onPress={async () => {
          //   // resetProfile()
          //   const status_Code = await deleteAvatar(dispatch);
          //   if (status_Code == 200) {
          //     // showProfile(dispatch);
          //     const object = {
          //       title: null,
          //       message: photoRemoved,
          //       display: true,
          //       modalType: BannerSuccess,
          //       priority:high,
          //       accept: null,
          //       acceptFunction: null,
          //       duration: 3000,
          //     };
          //     showBannerAlert(dispatch, object);
          //     setAvatar('')
          //   }

          //   CloseRBSheet();
          // }}
          style={styles.buttonList}>
          <Text style={styles.buttonText}>{translate('remove_photo')}</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={() => {
          CloseRBSheet();
        }}
        style={styles.close}>
        <Text
          style={{
            fontSize: sizes.tab_img,
            color: colors.white,
            // fontWeight: 'bold',
            fontFamily: Lato,
          }}>
          {translate('close')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  close: {
    marginHorizontal: calculateHeight(20),
    borderRadius: 1,
    borderWidth: 2,
    borderColor: colors.orange,
    height: calculateHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  buttonList: {
    marginHorizontal: calculateHeight(20),
    borderRadius: 1,
    borderWidth: 2,
    borderColor: colors.orange,
    height: calculateHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: calculateHeight(20),
  },
  buttonText: {
    fontSize: sizes.tab_img,
    color: colors.orange,
    // fontWeight: 'bold',
    fontFamily: Lato,
  },
  selectOption: {
    textAlign: 'center',
    marginTop: calculateHeight(10),
    marginBottom: calculateHeight(10),
    fontSize: sizes.large,
    // fontWeight: 'bold',
    fontFamily: Lato,
    color: colors.orange,
  },
});
