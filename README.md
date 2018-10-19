# react-native-reusable-code:


## imagePicker.js:

### Uses:

* [react-native-permissions v "1.1.1"](https://github.com/yonahforst/react-native-permissions)

* [react-native-image-crop-picker v "0.21.1"](https://github.com/ivpusic/react-native-image-crop-picker)

* [@yfuks/react-native-action-sheet v "0.0.5"](https://github.com/yfuks/react-native-action-sheet)

* [actionSheet.js](actionSheet.js)

### Methods:

|method | arguments | description|
|------ | ---- | -------|
|launchImageLibrary | ```{ height?: number, width?: number}``` - optional | calls default phone gallery; `height` and `width` params (if provided) will be set for cropping area; returns `Promise`;|
|launchCamera | ```{ height?: number, width?: number}``` - optional | calls default phone camera; `height` and `width` params (if provided) will be set for cropping area; returns `Promise`;|
|open | ```{ cameraLabel: string, galleryLabel: string, cancelLabel: string, onSelect: (base64: string) => {}, options?: { height?: number, width?: number}}``` | Opens `actionSheet` with 3 buttons (Camera, Gallery, Cancel);|

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

* [@yfuks/react-native-action-sheet v "0.0.5"](https://github.com/yfuks/react-native-action-sheet)

### Methods:

|method | arguments | description|
|------ | ---- | -------|
|show | ```Array<{ label: string, onPress: Function, isCancel?: boolean }>``` | calls default phone gallery; `height` and `width` params (if provided) will be set for cropping area;|

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



## audio.js:

### Uses:

* [react-native-audio-recorder-player v "2.0.8"](https://github.com/dooboolab/react-native-audio-recorder-player)
* [react-native-audio-toolkit v "2.0.8"](https://github.com/futurice/react-native-audio-toolkit)

### Methods:

|method | arguments | description|
|------ | ---- | -------|
|onStartRecord | ```{ callback: (err: string, path: string) => void }``` | starts recording audio to a file, by default record.mp4;|
|onStopRecord | ```{ callback: (err: string) => void }``` | stop recording audio;|
|onStartPlay | ```{ path: string }``` | starts play audio from url or local file; return Promise|
|onPausePlay | ```{ }``` | Pause the player;|
|onStopPlay | ```{ }``` | Stops the player and removes the listener;|

### How to use:

1. Install [react-native-audio-recorder-player](https://github.com/dooboolab/react-native-audio-recorder-player)
2. Install [react-native-audio-toolkit](https://github.com/futurice/react-native-audio-toolkit)
3. Copy `audio.js` to your project;
3. Import `import AudioRecorder from 'src/audio';`
4. Call `onStartRecord` method with supported arguments;
4. Call `onStopRecord` method with supported arguments;
4. Call `onStartPlay` method with supported arguments;
4. Call `onPausePlay` method with supported arguments;
4. Call `onStopPlay` method with supported arguments;


### Examples:

1. initial for use AudioRecorder:
```
audioRecorder = new AudioRecorder();
```
2. `onStartRecord` method:

```
this.audioRecorder.onStartRecord((err, filename) => {
  if (err) {
    console.log(err);
  }

  this.setState(() => ({ filename }));
});
```

3. `onStopRecord` method:

```
  this.audioRecorder.onStopRecord((err) => {
    if (err) {
      console.log("error stop recording", err);
    }
  });
```

4. `onStartPlay` method:

```
  this.audioRecorder.onStartPlay("https://somelink/record.mp4");
  this.audioRecorder.onStartPlay("file:///sdcard/record.mp4");
```

5. `onPausePlay` method:

```
  this.audioRecorder.onPausePlay();
```

6. `onStopPlay` method:

```
  this.audioRecorder.onStopPlay();
```
