import React, { useState, type FC } from 'react';
import { View, TextInput, Pressable, Alert } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { v4 as uuidv4 } from 'uuid';
import type { IChatInputProps, IMessageType } from './types';
import styles from './styles';

const ChatInput: FC<IChatInputProps> = (props) => {
  const {
    chatInputContainerStyle,
    inputPlaceholderTextColor,
    chatInputStyle,
    onSendMessage,
  } = props;

  const [message, setMessage] = useState('');

  const onPress = () => {
    if (message.length == 0) {
      Alert.alert('Send Message', 'please enter message to send', [
        { text: 'OK' },
      ]);
      return;
    }

    if (!onSendMessage) return;

    const newMessage: IMessageType = {
      id: uuidv4(),
      message,
      date: new Date().toDateString(),
      sent: true,
    };

    onSendMessage(newMessage);
    setMessage('');
  };

  return (
    <View style={[styles.chatContainer, chatInputContainerStyle]}>
      <TextInput
        placeholderTextColor={inputPlaceholderTextColor}
        placeholder="Enter you message here"
        onChangeText={setMessage}
        value={message}
        style={[styles.chatInput, chatInputStyle]}
      />
      <Pressable style={styles.chatInputSendIconContainer} onPress={onPress}>
        <IonIcons name="send" size={18} color="green" />
      </Pressable>
    </View>
  );
};

export default ChatInput;
