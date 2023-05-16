import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './Customeverything/CustomStyle/CustomStyle';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cssInputcontainer}>
        <TextInput placeholder="Input your task" style={styles.cssAdd} />
        <TouchableOpacity>
          <Text style={styles.cssAdd}>Add Tasks. </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const stylesFlexbox = StyleSheet.create({});
export default App;
