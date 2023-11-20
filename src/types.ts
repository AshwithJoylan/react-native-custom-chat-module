import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
  ColorValue,
} from 'react-native';

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
