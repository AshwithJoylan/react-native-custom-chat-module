import * as React from 'react';
import 'react-native-get-random-values';
import { StyleSheet, SafeAreaView } from 'react-native';
import ChatList, { type IMessageType } from 'react-native-custom-chat-module';
import { v4 as uuidV4 } from 'uuid';

export default function App() {
  const [messages, setMessages] = React.useState<IMessageType[]>([
    {
      id: '1',
      message: 'Hi message',
      date: new Date().toDateString(),
      sent: true,
    },
    {
      id: '2',
      message: 'Hi message',
      date: new Date().toDateString(),
      sent: false,
    },
    {
      id: '3',
      message: 'Hi message',
      date: new Date().toDateString(),
      sent: true,
    },
    {
      id: '4',
      message: 'Hi message',
      date: new Date().toDateString(),
      sent: true,
    },
    {
      id: '5',
      message: 'Hi message',
      date: new Date().toDateString(),
      sent: false,
    },
  ]);

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <ChatList
        tintColor="#fff"
        headerTitleStyle={{ color: '#fff' }}
        headerStyle={{ backgroundColor: '#1A1F16' }}
        title="Message Title"
        onBackPress={() => {}}
        inputPlaceholderTextColor="#ccc"
        chatInputStyle={{ color: '#fff' }}
        onSendMessage={(newMessage) => {
          setMessages((msgs) => [newMessage, ...msgs]);
          setTimeout(() => {
            setMessages((msgs) => [
              { ...newMessage, id: uuidV4(), sent: false },
              ...msgs,
            ]);
          }, 1000);
        }}
        data={messages}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F16',
  },
});
