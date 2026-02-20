import ButtonStyled from './ButtonStyled';

interface ButtonsProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'outlined';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonsProps> = ({
  text,
  onClick,
  disabled,
  variant = 'primary',
  className,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      className={`${variant} ${className}`.trim()}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
