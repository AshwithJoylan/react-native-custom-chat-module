import React, { type FC } from 'react';
import { View } from 'react-native';
import type { IChatListProps } from './types';
import styles from './styles';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ListComponent from './ListComponent';

const ChatList: FC<IChatListProps> = (props) => {
  const {
    style = styles.constainer,
    data,
    title,
    onBackPress,
    onSendMessage,
    headerStyle,
    headerTitleStyle,
    chatInputContainerStyle,
    chatInputStyle,
    tintColor,
    listContentContainerStyle,
    inputPlaceholderTextColor,
    ...rest
  } = props;

  return (
    <View style={style} {...rest}>
      <ChatHeader
        {...{ tintColor, headerStyle, headerTitleStyle, title, onBackPress }}
      />
      <ChatInput
        {...{
          inputPlaceholderTextColor,
          onSendMessage,
          chatInputContainerStyle,
          chatInputStyle,
        }}
      />
      <ListComponent data={data} {...{ listContentContainerStyle }} />
    </View>
  );
};

export default ChatList;
