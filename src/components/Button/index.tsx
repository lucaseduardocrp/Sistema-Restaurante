import { ButtonTypes, Container } from './styles';

interface ButtonProps extends ButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, rounded, text = 'sm', width, onClick }: ButtonProps) => {
  return (
    <Container rounded={rounded} text={text} width={width} onClick={onClick}>
      {children}
    </Container>
  );
};
