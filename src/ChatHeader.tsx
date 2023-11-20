import React, { type FC } from 'react';
import { View } from 'react-native';
import type { IChatHeaderProps } from './types';
import styles from './styles';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const ChatHeader: FC<IChatHeaderProps> = (props) => {
  const {
    title,
    onBackPress,
    tintColor,
    headerStyle,
    headerTitleStyle = {} as any,
  } = props;
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Pressable onPress={onBackPress} style={styles.headerBackButton}>
        <IonIcons name="chevron-back" color={tintColor} size={20} />
      </Pressable>
      <View style={styles.headerTitleContainer}>
        <Text style={{ color: tintColor, ...headerTitleStyle }}>{title}</Text>
      </View>
    </View>
  );
};
export default ChatHeader;
