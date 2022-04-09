export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}
