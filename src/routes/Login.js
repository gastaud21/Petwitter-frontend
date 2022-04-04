import {
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  extendTheme,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Link as ReachLink, useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const { signin } = useAuth();

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await signin({ email, password });
      setIsLoading(false);
      navigate("/home", { replace: true });
    } catch (error) {}
  }

  const theme = extendTheme({
    //nao tá pegando o tema por default
    fontFamily: "Open Sans, sans-serif",
  });

  return (
    <Flex flexDirection={["column", "row"]}>
      {/*MOBILE*/}
      <Flex
        display={["flex", "none"]}
        backgroundImage={"./backgroundDog.png"}
        height="262px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flexDirection={"column"}
      >
        <Image
          src="./pawSymbol.png"
          alt="paw"
          width={"min-content"}
          margin="46px 0 0 32px"
        />
        <Text
          fontFamily="Open Sans, sans-serif"
          color="white"
          fontWeight="bold"
          fontSize="36px"
          width="302px"
          height="98px"
          lineHeight="49px"
          margin="39.62px 0 24.88px 26px"
        >
          Comece agora.
          <br />
          Conecte-se já.
        </Text>
      </Flex>
      {/*DESKTOP*/}
      <Flex
        display={["none", "flex"]}
        backgroundImage={"./backgroundDogDesktop.png"}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="60vw"
        height="100vh"
        justifyContent="center"
      >
        <Flex alignItems="center">
          <Image src="./pawSymbolDesktop.png" alt="paw" marginRight="24px" />
          <Text
            color="white"
            fontFamily="Open Sans, sans-serif"
            fontSize="51.5px"
            lineHeight="77px"
            fontWeight="bold"
          >
            PETWITTER
          </Text>
        </Flex>
      </Flex>
      {/*MOBILE*/}
      <Flex flexDirection="column" display={["flex", "none"]}>
        <Text
          fontFamily="Open Sans, sans-serif"
          margin="30px 32px 32px 32px"
          fontSize="24px"
          fontWeight="600"
          lineHeight="40px"
        >
          Login
        </Text>
        <FormControl
          margin="0 32px"
          display="flex"
          flexDirection="column"
          width="auto"
          as={"form"}
          onSubmit={handleSubmit}
        >
          <FormLabel
            htmlFor="email"
            fontFamily="Open Sans, sans-serif"
            fontSize="14px"
            fontWeight="600"
            lineHeight="16px"
          >
            E-mail
          </FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            fontFamily="Open Sans, sans-serif"
          />
          <FormLabel
            htmlFor="password"
            fontFamily="Open Sans, sans-serif"
            fontSize="14px"
            fontWeight="600"
            lineHeight="16px"
            marginTop="32px"
          >
            Senha
          </FormLabel>
          <InputGroup>
            <Input
              width={["100%"]}
              height={["40px"]}
              name="password"
              type={show ? "text" : "password"}
              placeholder="Senha"
            />
            <InputRightElement width="4.5rem">
              <Button
                variant={"unstyled"}
                outline={"none"}
                height={"30px"}
                color={"black"}
                backgroundColor={"white"}
                onClick={handleClick}
              >
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            colorScheme="blue"
            margin="40px 0 24px 0"
            backgroundColor="#00ACC1"
            fontFamily="Open Sans, sans-serif"
            fontSize="14px"
            isLoading={isLoading}
            type={"submit"}
          >
            Entrar
          </Button>
          <Text fontFamily="Open Sans, sans-serif">
            Ainda não possui uma conta?
          </Text>
          <Link
            href="singnUp"
            fontFamily="Open Sans, sans-serif"
            color="#00ACC1"
            textDecoration="underline"
          >
            Cadastre-se
          </Link>
        </FormControl>
        <Flex margin="57px 0 24px 0" justifyContent="center">
          <Image src="./paw-symbol-cyan.png" marginRight="14.33px" />
          <Text
            fontFamily="Open Sans, sans-serif"
            alignSelf="center"
            color="#00ACC1"
            fontWeight="bold"
            fontSize="21.5px"
            lineHeight="32px"
          >
            PETWITTER
          </Text>
        </Flex>
      </Flex>
      {/*DESKTOP */}
      <Flex
        flexDirection="column"
        display={["none", "flex"]}
        padding="54px 0 0 0"
        alignItems="center"
        width="40vw"
      >
        <Flex
          flexDirection="column"
          maxWidth="368px"
          width="-webkit-fill-available"
        >
          <Image src="./paw-cyan-DESKTOP.png" width="fit-content" />
          <Text
            fontFamily="Open Sans, sans-serif"
            color="#00ACC1"
            fontWeight="bold"
            fontSize="36px"
            lineHeight="49px"
            padding="20px 0 32px 0"
          >
            Comece agora.
            <br />
            Conecte-se já.
          </Text>
          <Text
            fontFamily="Open Sans, sans-serif"
            color="#212121"
            fontWeight="600"
            fontSize="24px"
            lineHeight="40px"
            paddingBottom="32px"
          >
            Login
          </Text>
          <FormControl
            display="flex"
            flexDirection="column"
            width="auto"
            onSubmit={handleSubmit}
            as={"form"}
          >
            <FormLabel
              htmlFor="email"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16px"
            >
              E-mail
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              fontFamily="Open Sans, sans-serif"
            />
            <FormLabel
              htmlFor="password"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16px"
              marginTop="32px"
            >
              Senha
            </FormLabel>
            <InputGroup>
              <Input
                width={["100%"]}
                height={["40px"]}
                name="password"
                type={show ? "text" : "password"}
                placeholder="Senha"
              />
              <InputRightElement width="4.5rem">
                <Button
                  variant={"unstyled"}
                  outline={"none"}
                  height={"30px"}
                  color={"black"}
                  backgroundColor={"white"}
                  onClick={handleClick}
                >
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="blue"
              margin="40px 0 24px 0"
              backgroundColor="#00ACC1"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              isLoading={isLoading}
              type={"submit"}
            >
              Entrar
            </Button>
            <Text fontFamily="Open Sans, sans-serif">
              Ainda não possui uma conta?{" "}
              <Link
                href="singnUp"
                fontFamily="Open Sans, sans-serif"
                color="#00ACC1"
                textDecoration="underline"
              >
                Cadastre-se
              </Link>
            </Text>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
