import ButtonStyled from './ButtonStyled';

interface ButtonsProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'outlined';
  disabled?: boolean;
}

const Button: React.FC<ButtonsProps> = ({ text, onClick, disabled, variant = 'primary' }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} className={variant}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
