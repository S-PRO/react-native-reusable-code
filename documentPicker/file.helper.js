/*
* @Author: mac
* @Date:   2018-07-04 17:24:55
* @Last Modified by:   mac
* @Last Modified time: 2018-07-09 17:36:48
* @flow
*/

import * as mime from 'react-native-mime-types';

import { FILE_NAME_EXTENSIONS } from './attachment.config';

export const checkType = (type: string) => {
  const keys = Object.keys(FILE_NAME_EXTENSIONS);
  let types = [];
  keys.forEach((key: string) => {
    types = [
      ...types,
      ...Object.values(FILE_NAME_EXTENSIONS[key])
    ];
  });

  return types.indexOf(type) !== -1;
};

export const getType = (name: string) => mime.lookup(name);

export const getFileName = (url: string): string => url.substring(url.lastIndexOf("/") + 1);
