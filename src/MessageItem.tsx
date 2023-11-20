import React, { type FC } from 'react';
import { View, Text } from 'react-native';
import type { IMessageItemProps } from './types';
import styles from './styles';

const MessageItem: FC<IMessageItemProps> = (props) => {
  const { item } = props;

  const { sent, message } = item;
  return (
    <View style={styles.messageItemContainer}>
      <View style={sent ? styles.sentItem : styles.recievedItem}>
        <Text style={{ color: sent ? 'white' : 'black' }}>{message}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
