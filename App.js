import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
     color: 'gray'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View 
        style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://picsum.photos/200/300',
              }}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.text}>
            ImageResizeMode is an Enum for different image resizing modes, set via the resizeMode style property on Image components. The values are contain, cover, stretch, center, repeat.
            </Text>
            <Text style={styles.subText}>React News</Text>
          </View>
        </View>
    </View>
  );
}
