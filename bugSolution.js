import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (status !== 'ready') {
        console.warn('Camera not ready yet!');
        return;
    }
    if (hasPermission) {
      const data = await cameraRef.current.takePictureAsync();
      console.log('Photo taken', data);
    }
  };

  const cameraRef = React.useRef(null);

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} onCameraReady={() => setStatus('ready')}>
      </Camera>
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});