import {
  ChakraProvider,
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  extendTheme,
  Link,
} from "@chakra-ui/react";

function Login() {
  const theme = extendTheme({
    //nao tá pegando o tema por default
    fontFamily: "Open Sans, sans-serif",
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection={["column", "row"]}>
        {/*MOBILE*/}
        <Flex
          display={["flex", "none"]}
          backgroundImage={"./backgroundDog.png"}
          height="262px"
          maxW={"100vw"}
          backgroundRepeat="no-repeat"
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
          {/*DESKTOP*/}
          <Flex
            display={["none", "flex"]}
            backgroundImage={"./backgroundDog.png"}
            backgroundRepeat="no-repeat"
            width="100vw"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="center"
          >
            <Flex alignItems="center">
              <Image
                src="./pawSymbol.png"
                alt="paw"
                height="fit-content"
                marginRight="24px"
              />
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
        </Flex>
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
          <FormControl margin="0 32px" display="flex" flexDirection="column">
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
              id="email"
              type="email"
              width="296px"
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
            <Input
              id="password"
              type="password"
              width="296px"
              placeholder="Senha"
              fontFamily="Open Sans, sans-serif"
            />
            <Button
              colorScheme="blue"
              width="296px"
              margin="40px 0 24px 0"
              backgroundColor="#00ACC1"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
            >
              Entrar
            </Button>
            <Text fontFamily="Open Sans, sans-serif">
              Ainda não possui uma conta?
            </Text>
            <Link
              href="singUp"
              fontFamily="Open Sans, sans-serif"
              color="#00ACC1"
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
      </Flex>
    </ChakraProvider>
  );
}

export default Login;
