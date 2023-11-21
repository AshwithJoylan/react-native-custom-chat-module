# react-native-custom-chat-module

A Simple React Native Chat Module

## Installation

```sh
yarn add react-native-custom-chat-module
```

## Second step(Plugins Installation):

run this command

```sh
yarn add react-native-vector-icons uuid react-native-random-values
```

Add types for react-native-vector-icons

```
yarn add -D @types/react-native-vector-icons
```

## Setup IOS

make sure you have installe dth epods by running the following command

```sh
cd ios && pod install
```

Also make sure you have imported ``react-native-get-random-value`` on the begeniing of App.js or App.tsx

```ts
// App.tsx
import * as React from 'react';
import 'react-native-get-random-values';

// rest of the component
```

## Usage

```js
import ChatList from 'react-native-custom-chat-module';

// ...

<ChatList
  tintColor="#fff"
  headerTitleStyle={{ color: '#fff' }}
  headerStyle={{ backgroundColor: '#1A1F16' }}
  title="Message Title"
  onBackPress={() => {
    // do someting on back press
  }}
  inputPlaceholderTextColor="#ccc"
  chatInputStyle={{ color: '#fff' }}
  onSendMessage={(newMessage) => {
    // api call or store in state
  }}
  data={messages}
/>;
```

## props

````ts
export type IMessageType = {
  /**
   * id of the string unique
   */
  id: string;
  /**
   * message string
   */
  message: string;
  /**
   * sent or recived date of the message
   */
  date: string;
  /**
   * to identify weather message is sent or recived
   */
  sent: boolean;
};

export type IChatListProps = Omit<ViewProps, 'style'> & {
  /**
   * style of the component
   * @default {flex: 1}
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Name or Title of the chat
   */
  title: string;
  /**
   * function which will be called when cross icon on the header is pressed
   * @returns void
   */
  onBackPress?: () => void;
  /**
   * function which will be called when send icon is pressed in the input
   * @param message Message object created by the input text
   * @returns void
   *
   *
   * ```js
   * Eg:
   * <ChatList
   *    onSendMessage={(newMessage) => {
   *        // call the api or store in state
   *    }}
   * />
   *
   * ```
   */
  onSendMessage?: (message: IMessageType) => void;

  /**
   * data array of messages
   *
   * ```js
   * Eg:
   *
   * const items = [{
   *    id: "1",
   *    message: "New Message",
   *    date: new Date().toString()
   * }];
   *
   * return (
   *    <ChatList
   *        data={items}
   *    />
   * )
   *
   * ```
   */
  data: IMessageType[];
  /**
   * header style
   * use this to se the header height and backgroud coloe of the header
   */
  headerStyle?: StyleProp<Omit<ViewStyle, 'justifyContent' | 'alignItems'>>;
  /**
   * header title text style
   * user this to set the style for the header title text
   */
  headerTitleStyle?: StyleProp<TextStyle>;

  /**
   * chat input style
   * use this to change the style for the chat inpput component
   * ie: font size, color, family etc
   */
  chatInputStyle?: StyleProp<TextStyle>;
  /**
   * use this to change the style of the chat input container
   */
  chatInputContainerStyle?: StyleProp<ViewStyle>;
  /**
   * These styles will be applied to the scroll view content container which
   * wraps all of the child views. Example:
   *
   *   return (
   *     <ChatList listContentContainerStyle={styles.contentContainer} />
   *   );
   *   ...
   *   const styles = StyleSheet.create({
   *     contentContainer: {
   *       paddingVertical: 20
   *     }
   *   });
   */
  listContentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * titne color changes the the color of the header title and the back button
   */
  tintColor?: ColorValue;
  /**
   * The text color of the placeholder string
   */
  inputPlaceholderTextColor?: ColorValue;
};

export type IChatHeaderProps = Pick<
  IChatListProps,
  'title' | 'onBackPress' | 'headerStyle' | 'headerTitleStyle' | 'tintColor'
> & {};

export type IChatInputProps = Pick<
  IChatListProps,
  | 'onSendMessage'
  | 'chatInputStyle'
  | 'chatInputContainerStyle'
  | 'inputPlaceholderTextColor'
> & {};

export type IListComponentProps = Pick<
  IChatListProps,
  'data' | 'listContentContainerStyle'
>;

export type IMessageItemProps = {
  item: IMessageType;
};
````

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
