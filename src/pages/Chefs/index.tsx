import { Container, Banner, Card, Box } from './styles';
import chefs_image from '../../assets/Chefs.png';
import { Title } from '../../components/Title';
import { chefsImage } from '../../modules/chefs-images';

export const Chefs = () => {
  return (
    <>
      <Banner>
        <img src={chefs_image} alt="About us image" />
      </Banner>
      <Container>
        <Title>Os chefes mais bravus</Title>
        <Box>
          {chefsImage.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.description}</h4>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};
