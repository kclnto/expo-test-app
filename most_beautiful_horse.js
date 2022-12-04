import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

imageString = 'https://turkmenportal.com/images/uploads/images/news/2022/4/23/ICC_0666.jpg'

function App() {
  return (
    <View style={styles.container}>
      <Text>
        Behold. The most beautiful horse in the world, 2022*.
      </Text>
      <Text>
      </Text>
      <Text>
      *As judged by Turkmenistan.
      </Text>
      <Image style={{ width: 300, height: 300, borderRadius: 150}} source={{ uri: imageString}} ></Image>
    </View>
  );
}

export default App;
