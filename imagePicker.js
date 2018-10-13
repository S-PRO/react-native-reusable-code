/*
* @flow
*/

/* MODULES */
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from './actionSheet';

type _t_options = {
  height?: number,
  width?: number
};

type _t_camera_picker = {
  cameraLabel: string,
  galleryLabel: string,
  cancelLabel: string,
  onSelect: Function,
  options?: _t_options
};

type _t_picker_res = {
  sourceURL: ?string,
  path: ?string,
  mime: string,
  data: ?string,
};

const getBase64 = (res: _t_picker_res) => {
  if (res && (
    Object.prototype.hasOwnProperty.call(res, "sourceURL")
    || Object.prototype.hasOwnProperty.call(res, "path"))
  ) {
    return `data:${res.mime};base64,${res.data || ""}`;
  }
  return "";
};

const requestPhotoPermission = (onSuccess: Function, onError: Function) => {
  Permissions.request("photo")
    .then((response: string) => {
      if (response === "authorized") {
        onSuccess();
      } else {
        onError(response);
      }
    });
};

const requestCameraPermission = (onSuccess: Function, onError: Function) => {
  Permissions.request("camera")
    .then((response: string) => {
      if (response === "authorized") {
        onSuccess();
      } else {
        onError(response);
      }
    });
};

const launchImageLibrary = (options?: _t_options): Promise<*> => (
  new Promise((resolve: Function, reject: Function) => {
    requestPhotoPermission(() => {
      ImagePicker.openPicker({
        cropping: true,
        includeBase64: true,
        ...options
      }).then((res) => {
        if (res) {
          resolve(getBase64(res));
        } else {
          reject();
        }
      });
    }, reject);
  })
);


const launchCamera = (options?: _t_options): Promise<*> => (
  new Promise((resolve: Function, reject: Function) => {
    requestCameraPermission(() => {
      ImagePicker.openCamera({
        cropping: true,
        includeBase64: true,
        ...options
      }).then((res) => {
        if (res) {
          resolve(getBase64(res));
        } else {
          reject();
        }
      });
    }, reject);
  })
);

const open = (props: _t_camera_picker) => {
  const options = [
    {
      label: props.cameraLabel,
      onPress: () => {
        launchCamera(props.options || {})
          .then(props.onSelect);
      }
    },
    {
      label: props.galleryLabel,
      onPress: () => {
        launchImageLibrary(props.options || {})
          .then(props.onSelect);
      }
    },
    {
      label: props.cancelLabel,
      onPress: () => {},
      isCancel: true,
    },
  ];

  ActionSheet.show(options);
};

export default {
  launchImageLibrary,
  launchCamera,
  open,
};
