import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text, Avatar} from '@rneui/themed';
import React from 'react';

type NewsItemProps = {
  topic?: string;
  title?: string;
  date?: string;
};

const NewsItem = ({
  topic = 'Sports',
  title = 'Chelsea beat Arsenal 3-0 in Carabo cup game on wednesday',
  date = '22, Jan 2023',
}: NewsItemProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={[styles.listCtn, {borderColor: colors.border}]}>
      <View style={styles.list}>
        <View style={styles.sectionOne}>
          <Text style={styles.topic}>{topic}</Text>
          <Text
            style={[styles.title, {color: colors.text}]}
            numberOfLines={3}
            textBreakStrategy={'balanced'}>
            {title}
          </Text>
          <Text style={[styles.date]}>{date}</Text>
        </View>
        <View style={styles.sectionTwo}>
          <Avatar
            containerStyle={styles.avatarCtn}
            // icon={{}}
            avatarStyle={{...styles.avatar}}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  listCtn: {
    minWidth: 300,
    width: '100%',
    borderBottomWidth: 1,
    maxWidth: 700,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 5,
    // borderWidth: 1,
    minHeight: 50,
  },
  sectionOne: {
    flex: 1,
    // borderWidth: 1,
    marginLeft: 15,
    borderColor: 'purple',
  },
  sectionTwo: {
    flex: 1,
    // borderWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'red',
    marginRight: 15,
  },
  topic: {
    fontWeight: '700',
    color: '#6366f1',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  title: {
    marginVertical: 5,
    letterSpacing: 0.8,
    fontSize: 16,
    // textAlign: 'justify',
    fontWeight: '900',
  },
  date: {
    color: '#6b7280',
    fontSize: 12,
    marginTop: 3,
  },
  avatarCtn: {
    // borderWidth: 1,
    width: 90,
    height: 80,
    borderWidth: 1,
    borderRadius: 8,

    borderColor: '#9ca3af',
  },
  avatar: {
    // borderWidth: 1,
  },
});
