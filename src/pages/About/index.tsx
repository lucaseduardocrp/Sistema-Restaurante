import { Container, Banner, Text, Box } from './styles';
import about_image from '../../assets/about.png';
import history_image from '../../assets/history.png';
import place_image from '../../assets/place.png';
import { Title } from '../../components/Title';

export const About = () => {
  return (
    <>
      <Banner>
        <img src={about_image} alt="About us image" />
      </Banner>
      <Container>
        <Box>
          <Text>
            <Title>Quem somos</Title>
            <p>
              O Bravus Burger é uma rede de restaurantes presente em diversos estados brasileiros e também em outros
              países. Com uma origem no Rio de Janeiro, começou em 2005 e atualmente conta com 87 unidades no Brasil e
              em 12 países. Seus hambúrgueres únicos e acompanhamentos especiais, como as "Bravus Fries", se destacam,
              oferecendo uma culinária de qualidade. Inspirado na cultura dos Estados Unidos, o Bravus Burger
              proporciona uma experiência de alto padrão, combinando elementos como música, esportes e tradições. A
              marca faz parte da Bravus Brands, que inclui outras experiências gastronômicas. Os clientes apreciam o
              #MomentoBravus, um momento único e divertido proporcionado pela marca.
            </p>
          </Text>
          <img src={place_image} alt="Burger Place" />
        </Box>
        <Box>
          <Text>
            <Title>Historia</Title>
            <p>
              Nossa jornada teve início em março de 1995, quando Alex S. Miller, Danielle R. Johnson, Lucas M. Thompson
              e Sofia K. Adams, quatro empreendedores de Houston (Texas, EUA), decidiram estabelecer um novo conceito de
              restaurante que quebrasse com os padrões vigentes. Naquela época, o filme "Máquina Mortífera" estava em
              destaque nos cinemas, trazendo visuais impressionantes da Nova Zelândia e um protagonista carismático, o
              que gerou um aumento do interesse pela cultura neozelandesa nos Estados Unidos. Inspirados por essa
              tendência, surgiu a ideia de um estabelecimento gastronômico especializado em hambúrgueres, com
              influências da terra dos kiwis. Optaram pelo nome Bravus Burger, em referência à maneira como os
              neozelandeses chamam suas vastas paisagens naturais, e optaram por um design interior que refletia as
              casas rurais da Nova Zelândia na década de 1960, incorporando uma iluminação suavemente verde, evocando as
              tonalidades da natureza. Atualmente, o Bravus Burger ainda traz toques da Nova Zelândia em sua decoração.
              O layout leva os clientes a uma exploração pelas diversas regiões do país, apresentando símbolos
              emblemáticos, como os nomes de pratos no menu, inspirados na cultura neozelandesa. Os visitantes podem
              admirar elementos como pounamu (jade maori) e arte maori, além de murais retratando a deslumbrante
              paisagem natural do país. Cada elemento foi meticulosamente planejado para oferecer aos clientes uma
              imersão na cultura da Nova Zelândia.
            </p>
          </Text>
          <img src={history_image} alt="History about us" />
        </Box>
      </Container>
    </>
  );
};
