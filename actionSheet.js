/**
 * @flow
 */

/* MODULES */
import ActionSheet from '@yfuks/react-native-action-sheet';

/* CUSTOM MODULES */
import COLORS from 'src/assets/styles/colors';

type _t_list_of_buttons = Array<{
  label: string,
  onPress: Function,
  isCancel?: boolean,
}>;

function initButtonList(list) {
  const buttonList = list.map(item => item.label);
  const buttonOptions = {};

  for (let i = 0; i < list.length; i++) {
    const key = list[i].label;
    buttonOptions[key] = list[i];
  }
  let cancelIndex = null;

  list.forEach((item, index) => {
    if (item.isCancel) {
      cancelIndex = index;
    }
  });

  return {
    list: buttonList,
    options: buttonOptions,
    cancelIndex,
  };
}

const show = (listOfButtons: _t_list_of_buttons) => {
  const { list, options, cancelIndex } = initButtonList(listOfButtons);

  const a_options: {
    options: Array<*>,
    tintColor: string,
    cancelButtonIndex?: number,
  } = {
    options: list,
    tintColor: COLORS.blue,
  };
  if (cancelIndex) {
    a_options.cancelButtonIndex = cancelIndex;
  }
  ActionSheet.showActionSheetWithOptions(
    a_options,
    (buttonIndex) => {
      if (buttonIndex || buttonIndex === 0) {
        const key = list[buttonIndex];
        options[key].onPress(buttonIndex, list[buttonIndex]);
      }
    },
  );
};

export default { show };
