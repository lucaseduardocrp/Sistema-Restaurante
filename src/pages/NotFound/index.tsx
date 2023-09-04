import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from './styles';
import { useCallback } from 'react';

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <Container>
      <div>
        <div className="text">
          <h1>Página não encontrada</h1>
          <h2>Ops, você tentou acessar um caminho errado. Mas não tem problema, eu te levo de volta</h2>
          <Button rounded="rounded" onClick={goHome}>
            Voltar para a página principal
          </Button>
        </div>
        <p>404</p>
      </div>
    </Container>
  );
};
