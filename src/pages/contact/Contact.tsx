import { Container, Text, Wrapper } from "../../components/navbar/style";
import QrCode from "../../components/qrcode/QrCode";

const Contact = () => {
  return (
    <Wrapper>
      <Container size="true">
        <Text>Bog'lanish</Text>
        <QrCode />
      </Container>
    </Wrapper>
  );
};

export default Contact;
