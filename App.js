import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/a1.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Argentina" />
        <Button label="Francia" />
        <Button label="Marruecos" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity. 
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
