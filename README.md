# react-native-reusable-code:


## imagePicker.js:

### Uses:

* [react-native-permissions](https://github.com/yonahforst/react-native-permissions)

* [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker)

* [@yfuks/react-native-action-sheet](https://github.com/yfuks/react-native-action-sheet)

* [actionSheet.js](actionSheet.js)

### Methods:

method | arguments | description
------ | ---- | ------- | ----
launchImageLibrary | { height?: number, width?: number} | calls default phone gallery; `height` and `width` params (if provided) will be set for cropping area; returns `Promise`;
launchCamera | { height?: number, width?: number} | calls default phone camera; `height` and `width` params (if provided) will be set for cropping area; returns `Promise`;
open | { cameraLabel: string, galleryLabel: string, cancelLabel: string, onSelect: (base64: string) => {}, options?: { height?: number, width?: number}
} | Opens `actionSheet` with 3 buttons (Camera, Gallery, Cancel);

### How to use:

1. Install [react-native-permissions](https://github.com/yonahforst/react-native-permissions), [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker) and [@yfuks/react-native-action-sheet](https://github.com/yfuks/react-native-action-sheet)
2. Copy `imagePicker.js` to your project;
3. Copy `actionSheet.js` to your project;
4. Import `ImagePicker from 'src/imagePicker.js'`;
5. Call one of supported methods;

### Examples:

1. `launchImageLibrary` method:

```
ImagePicker
.launchImageLibrary({width: 200, height: 200})
.then((base64: string) => {})
```

2. `launchCamera` method:

```
ImagePicker
.launchCamera({width: 200, height: 200})
.then((base64: string) => {})
```

3. `open` method:

```
ImagePicker.open({
  cameraLabel: "Open Camera",
  galleryLabel: "Open Gallery",
  cancelLabel: "Cancel",
  onSelect: (base64string) => {}
});
```


## actionSheet.js:

### Uses:

* [@yfuks/react-native-action-sheet](https://github.com/yfuks/react-native-action-sheet)

### Methods:

method | arguments | description
------ | ---- | ------- | ----
show | listOfButtons: Array<{ label: string, onPress: Function, isCancel?: boolean }> | calls default phone gallery; `height` and `width` params (if provided) will be set for cropping area;

### How to use:

1. Install [@yfuks/react-native-action-sheet](https://github.com/yfuks/react-native-action-sheet)
2. Copy `actionSheet.js` to your project;
3. Import `ActionSheet from 'src/actionSheet.js'`;
4. Call `show` method with supported arguments;


### Examples:


1. `show` method:

```
const options = [
  {
    label: props.cameraLabel,
    onPress: () => {}
  },
  {
    label: props.galleryLabel,
    onPress: () => {}
  },
  {
    label: props.cancelLabel,
    onPress: () => {},
    isCancel: true,
  },
];
ActionSheet.show(options);
```