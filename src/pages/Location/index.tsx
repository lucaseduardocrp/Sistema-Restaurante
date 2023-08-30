import { Container, Banner, Box } from './styles';
import location_image from '../../assets/Location.png';
import { Title } from '../../components/Title';

export const Location = () => {
  return (
    <>
      <Banner>
        <img src={location_image} alt="About us image" />
      </Banner>
      <Container>
        <Title>ESTAMOS PERTO DE VOCÊ</Title>
        <Box>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
          ></iframe>
        </Box>

        <Title>NÃO PERCA TEMPO, ESTAMOS EPERANDO VOCÊ</Title>
      </Container>
    </>
  );
};
