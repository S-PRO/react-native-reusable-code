/*
* @Author: mac
* @Date:   2018-07-04 17:14:27
* @Last Modified by:   mac
* @Last Modified time: 2018-07-11 16:38:11
* @flow
*/
import { Platform } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import OpenFile from 'react-native-doc-viewer';

import { getType, checkType } from './file.helper';

type _t_file = {
  uri: string,
  fileName: string,
  type: string,
};

type _t_res = {
  type?: string,
  fileName: string,
  uri: string,
  data?: {},
  fileSize: number,
};

type _t_err = string;

const init = (): Promise<*> => (
  new Promise((resolve: Function) => DocumentPicker.show({
    filetype: [
      DocumentPickerUtil.allFiles()
    ],
  }, (error: _t_err, res: _t_res) => {
    console.log('res: ', res);
    if (error) {
      console.warn("src/utils/document.picker init error: ", error);
    }
    /**
     * fetching type - can be provided in res by default;
     * if no - parse fileName
     */
    const type = res ? getType(res.fileName) : null;
    if (res && type && checkType(type) && res.uri) {
      resolve({
        ...res,
        type,
      });
    }
  }))
);

const openFile = (data: _t_file): void => {
  const { uri, fileName, type } = data;
  if (Platform.OS === "ios" && !!uri) {
    OpenFile.openDoc([{
      url: uri
    }], () => {});
  } else if (Platform.OS === "android" && !!uri && !!fileName && !!type) {
    OpenFile.openDoc([{
      url: uri,
      fileName,
      cache: false,
      fileType: type
    }], (error) => {
      console.warn("src/utils/document.picker openFile error: ", error);
    });
  }
};

export default {
  init,
  openFile
};
