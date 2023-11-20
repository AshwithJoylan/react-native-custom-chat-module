import React, { useCallback, type FC, useRef } from 'react';
import { FlatList, type ListRenderItem, View } from 'react-native';
import type { IListComponentProps, IMessageType } from './types';
import MessageItem from './MessageItem';
import styles from './styles';

const ListComponent: FC<IListComponentProps> = (props) => {
  const { data, listContentContainerStyle = { paddingHorizontal: 16 } } = props;

  const ref = useRef<FlatList>(null);

  const keyExtractor = useCallback((item: IMessageType) => item.id, []);

  const renderItem = useCallback<ListRenderItem<IMessageType>>(
    ({ item }) => <MessageItem item={item} />,
    []
  );

  const onContentSizeChange = useCallback(() => {
    ref.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  }, []);

  const seperator = useCallback(() => <View style={styles.seperator} />, []);

  return (
    <FlatList
      onContentSizeChange={onContentSizeChange}
      ref={ref}
      ItemSeparatorComponent={seperator}
      contentContainerStyle={listContentContainerStyle}
      inverted
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default ListComponent;
