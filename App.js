import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1Ijoia2FsZWVtLWVsYWhpIiwiYSI6ImNqcHY0NHAyZjBsY2k0Mm15cXQ0ZGFtYXYifQ.HpYw0QXIH-lpRsC8SFlW1w');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.770]}
          style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
