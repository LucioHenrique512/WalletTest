export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: ButtonVariants;
  loading?: boolean;
}
