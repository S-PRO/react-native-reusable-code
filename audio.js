// @flow
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { Recorder } from "react-native-audio-toolkit";


export default class AudioRecorder {
  audioRecorderPlayer = new AudioRecorderPlayer();
  recorder = new Recorder("record.mp4", {
    // Set bitrate for the recorder, in bits per second
    bitrate: 192000,

    // Set number of channels
    channels: 2,

    // Set how many samples per second
    sampleRate: 44100,

    // Override format. Possible values:
    // Cross-platform:  "mp4", "aac"
    // Android only:    "ogg", "webm", "amr"
    format: "mp4",

    // Override encoder. Android only.
    // Possible values:
    // "aac", "mp4", "webm", "ogg", "amr"
    encoder: "mp4",

    // Quality of the recording, iOS only.
    // Possible values: "min", "low", "medium", "high", "max"
    quality: "low"
  });

  onStartRecord = (callback: (err: string, path: string) => {}) => {
    this.recorder.prepare((err, fsPath) => {
      if (err) {
        console.warn("error onStartRecord:", err);
      }
      callback(err, fsPath);
    });
    this.recorder.record();
  }

  onStopRecord = (callback: Function) => {
    this.recorder.stop(callback);
  }

  onStartPlay = async (path: string) => {
    const url = await this.audioRecorderPlayer.startPlayer(path);

    this.audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        this.audioRecorderPlayer.stopPlayer();
      }
    });
    return url;
  }

  onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
  }

  onStopPlay = () => {
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  }
}
