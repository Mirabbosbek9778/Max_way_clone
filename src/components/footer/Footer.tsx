import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Wrapper } from "../navbar/style";
import { Link } from "react-router-dom";
import { Container, Text } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex items-center gap-[450px]">
          <Link to="/">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="logo"
            />
          </Link>
          <div className="flex gap-5">
            <Link to="/branches">
              <Text>Filiallar</Text>
            </Link>
            <Link to="/about">
              <Text>Biz Haqimizda</Text>
            </Link>
            <Link to="/contacts">
              <Text>Bog'lanish</Text>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-end gap-4">
          <a href="https://www.instagram.com/">
            <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-800" />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook className="w-5 h-5 text-gray-500 hover:text-gray-800" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="w-5 h-5 text-gray-500 hover:text-gray-800" />
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
