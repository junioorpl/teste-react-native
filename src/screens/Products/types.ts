import {Animated, ListRenderItem} from 'react-native';
import {ProductProps} from '~/store/types';

export interface FooterProps {
  hideBottomAnim: Omit<typeof Animated.Value, 'prototype'>;
  handlePress: () => void;
}

export interface ProductCardProps {
  product: {item: ProductProps};
}
export interface FlatListProps {
  renderItem: any;
}
export interface FieldProps {
  align?: 'center' | 'flex-start' | 'flex-end';
}
