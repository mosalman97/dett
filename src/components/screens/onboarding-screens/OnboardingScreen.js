import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform, SafeAreaView} from 'react-native';

// images from assets
import Imageone from '../../../assets/images/onboarding-screens/bg-one.svg';
import Imagetwo from '../../../assets/images/onboarding-screens/bg-two.svg';
import Imagethree from '../../../assets/images/onboarding-screens/bg-three.svg';
import Imagefour from '../../../assets/images/onboarding-screens/bg-four.svg';
import Arrowright from '../../../assets/icons/onboarding-screens/arrow-right.svg';

// constants
import {SIZES, COLORS} from '../../constants/Constants';

// button component from inlcudes
import Button from '../../includes/Button';

// Packages
import AppIntroSlider from 'react-native-app-intro-slider';

const OnboardingScreen = ({navigation}) => {
  // data for onboardingscreen
  const slides = [
    {
      key: 1,
      title: (
        <Text style={styles.heading} allowFontScaling={false}>
          Bound your<Text style={styles.headinghighlight}> relationships</Text>
          {'\n'}
          with loved ones
        </Text>
      ),
      backgroundimage: <Imageone width={'100%'} height={'100%'} />,
    },
    {
      key: 2,
      title: (
        <Text style={styles.heading}>
          <Text style={styles.headinghighlight}>Busy</Text> schedules ?{'\n'}
          don’t worry!
        </Text>
      ),
      backgroundimage: <Imagetwo width={'100%'} height={'100%'} />,
    },
    {
      key: 3,
      title: (
        <Text style={styles.heading}>
          <Text style={styles.headinghighlight}>Distance</Text> never
          {'\n'} matters make them feel {'\n'} your presence
        </Text>
      ),
      backgroundimage: <Imagethree width={'100%'} height={'100%'} />,
    },
    {
      key: 4,
      title: (
        <Text style={styles.heading}>
          <Text>
            Pre-book{'\n'}your special days{'\n'}bookmark those
          </Text>
          <Text style={styles.headinghighlight}> moments</Text>
        </Text>
      ),
      backgroundimage: <Imagefour width={'100%'} height={'100%'} />,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainsection}>
        <View style={styles.imagecontainer}>{item.backgroundimage}</View>
        <View style={styles.middlesection}>{item.title}</View>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.skipbutton}>
        <Text style={styles.skiptext} allowFontScaling={false}>
          Skip
        </Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextbutton}>
        <Arrowright style={styles.arrowicon} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return <Button title={'Get started'} />;
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      dotStyle={{
        backgroundColor: COLORS.gray,
        width: SIZES.WP('2%'),
        height: SIZES.HP('1%'),
        borderRadius: 20,
      }}
      activeDotStyle={{
        backgroundColor: '#FC8B62',
        width: SIZES.WP('8%'),
        height: SIZES.HP('1%'),
      }}
      renderNextButton={renderNextButton}
      showSkipButton={true}
      renderSkipButton={renderSkipButton}
      showDoneButton={true}
      showNextButton={true}
      renderDoneButton={renderDoneButton}
      style={{
        backgroundColor: '#fff',
        width: SIZES.WP('100%'),
      }}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  mainsection: {},
  imagecontainer: {
    width: SIZES.WP('100%'),
    height: SIZES.HP('65%'),
  },
  backgroundimage: {
    resizeMode: 'contain',
  },
  middlesection: {},
  circleimage: {
    width: SIZES.WP('18%'),
    height: SIZES.HP('18%'),
  },
  heading: {
    color: COLORS.black,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: SIZES.HP('3.5%'),
    fontSize: SIZES.WP('6%'),
    ...Platform.select({
      ios: {
        fontFamily: 'Gordita',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'medium',
      },
    }),
  },
  headinghighlight: {
    color: COLORS.highlight,
  },
  skipbutton: {
    position: 'absolute',
    top: 16,
  },
  skiptext: {
    color: '#C8C8C8',
    fontSize: SIZES.WP('4%'),
    ...Platform.select({
      ios: {
        fontFamily: 'Gordita',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'medium',
      },
    }),
  },
  nextbutton: {
    width: SIZES.WP('14%'),
    height: SIZES.WP('14%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.highlight,
  },
  arrowicon: {
    width: '100%',
    height: '100%',
  },
});
