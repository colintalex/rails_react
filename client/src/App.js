import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const fetchTestDatas = function () {
  fetch('/api/v1/tests')
    .then(res => res.json())
    .then(response => {
      console.log('Test datas response', response);
    })
    .catch(error => {
      console.log('Error while fetching test datas', error);
    });
};

const App: () => React$Node = () => {
  return (
    <View style={styles.sectionContainer}>
      <Button onClick={fetchTestDatas} title="Fetch Data">
        Fetch Data
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
