import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  headerContainer: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    paddingRight: 50,
  },
  headerBackButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    height: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  chatInput: {
    flex: 1,
    paddingHorizontal: 16,
    height: '100%',
  },
  chatInputSendIconContainer: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageItemContainer: {
    alignSelf: 'stretch',
  },
  sentItem: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  recievedItem: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  seperator: { alignSelf: 'stretch', height: 8 },
});

export default styles;
