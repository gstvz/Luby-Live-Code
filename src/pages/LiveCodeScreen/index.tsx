import { Header, Main, Section, Sneaker, SneakerInfo } from "@components";
import { Container } from "./styles";

export default function LiveCodeScreen() {
  return (
    <Container>
      <Header />
      <Main>
        <Section>
          <Sneaker />
          <SneakerInfo />
        </Section>
      </Main>
    </Container>
  );
}
