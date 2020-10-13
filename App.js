/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HooksComponent from './App/Components/HooksComponent';
import ComponentTemplate from './App/Components/ComponentTemplate';
import NoDataFound from './App/Components/NoDataFound';
import { HeaderCenterText } from './App/Components/Headers';
import { Overlay, Button } from 'react-native-elements';

const App: () => React$Node = () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={styles.safeAreaView}> */}
      {/* <HooksComponent /> */}
      <View style={styles.safeAreaView}>
        <HeaderCenterText leftPress={toggleOverlay} />
        <Overlay isVisible={visible}>
          <View>
            <Text>Hello from Overlay!</Text>
            <Button
              icon={{
                name: 'close',
                size: 20,
                color: '#FFFFFF',
              }}
              title="Close"
              onPress={toggleOverlay}
            />
          </View>
        </Overlay>
      </View>
      {/* </SafeAreaView> */}
    </>
  );
  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
  //         <View style={styles.body}>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step One</Text>
  //             <Text style={styles.sectionDescription}>
  //               Edit <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>See Your Changes</Text>
  //             <Text style={styles.sectionDescription}>
  //               <ReloadInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Debug</Text>
  //             <Text style={styles.sectionDescription}>
  //               <DebugInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Learn More</Text>
  //             <Text style={styles.sectionDescription}>
  //               Read the docs to discover what to do next:
  //             </Text>
  //           </View>
  //           <LearnMoreLinks />
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.select({
      // ios: isIPhoneX() ? 44 : 20,
      android: StatusBar.currentHeight,
      default: 0
    }),
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
