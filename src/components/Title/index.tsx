import { Container } from './styles';

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return <Container>{children}</Container>;
};
