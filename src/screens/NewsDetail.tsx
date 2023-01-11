import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text, Image} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScrollContainer from '../components/ScrollContainer';
import Loader from '../components/Loader';

type NewsDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetail'
> & {};

export const NewsDetail = ({
  navigation,
  route,
}: NewsDetailProps): JSX.Element => {
  const {id} = route.params;
  const {colors} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: id,
    });

    return () => {};
  }, []);

  return (
    <ScrollContainer>
      <View style={styles.container}>
        <Text style={[styles.title, {color: colors.text}]}>
          Tinubu is running for presidential election this year
        </Text>
        <Text style={styles.author}>Owolabi Gideon</Text>
        <Image
          containerStyle={[styles.image, {backgroundColor: colors.border}]}
          resizeMode="cover"
          // source={image}
        />
        <Text style={[styles.body, {color: colors.text}]}>
          One of the most famous couples in the world, Kylie Jenner and Travis
          Scott, have reportedly split up for the second time after reviving
          their relationship in February 2020. The Kylie Cosmetics founder
          shares two children - daughter Stormi and a nearly one-year-old son -
          with the 31-year-old rapper. Us Weekly reported that the two separated
          over Christmas as the reality star headed to Aspen, Colorado, with her
          two children, but without the rapper. "Kylie and Travis are off again,
          they were supposed to spend the holidays together, but she went to
          Aspen to be with her family and friends up there," a person close to
          Ms Jenner and Mr Scott told the magazine, adding, "This has happened
          so many times before, they're known to be on again off again, but
          always remain friends and great co-parents." Other prominent
          personalities in Kylie Jenner's Aspen trip included Hailey Bieber,
          Justin Bieber and Stassie Karanikolaou. On January 1, the 25-year-old
          also shared a video on her Instagram stories, featuring her Stormi. In
          the clip, she was heard saying, "We are on a serious adventure right
          now."{' '}
        </Text>
      </View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    // borderWidth: 2,
    borderColor: 'red',
  },
  title: {
    fontWeight: '900',
    fontSize: 22,
  },
  author: {
    textTransform: 'capitalize',
    marginTop: 10,
    color: '#6b7280',
    fontSize: 14,
  },
  image: {
    width: '100%',
    maxWidth: 700,
    marginTop: 10,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
  },
  body: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'justify',
    fontSize: 16,
  },
});
