import { FaTelegram } from "react-icons/fa";
import { Container, Image } from "./style";
import { Text } from "../navbar/style";

const QrCode = () => {
  return (
    <div className="flex flex-col gap-4 pb-[235px]">
      <Container>
        <Image
          src="https://images.ctfassets.net/lzny33ho1g45/6TK1TbLNZQ4iHr0PjdZS2Y/ffb5c5646b914435f10b085b012bc78d/zap-qr-1.png?w=1400"
          alt="qrCode"
        />
        <Text size="true">
          Telegramda sharh <p>qoldiring yoki savol bering</p>
        </Text>
        <div className="flex gap-1 items-center">
          <FaTelegram />
          <a href="">@maxwaymasterfoood_bot</a>
        </div>
      </Container>
      <div>
        <Text>Yagona aloqa markazi</Text>
        <p>+998 95 058 71 99</p>
      </div>
    </div>
  );
};

export default QrCode;
