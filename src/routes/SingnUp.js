import {
  ChakraProvider,
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Link,
} from "@chakra-ui/react";

function SingnUp() {
  return (
    <ChakraProvider>
      <Flex flexDirection="column">
        <Flex
          backgroundImage="./backgroundDog.png"
          height="143px"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Image
            src="./pawSymbol.png"
            height={"min-content"}
            margin="45.95px 0 43.5px 31.94px"
          />
        </Flex>
        <Flex flexDirection="column" margin="32px 32px 0 32px">
          <Text
            fontSize="24px"
            fontFamily="Open Sans, sans-serif"
            fontWeight="600"
            lineHeight="40px"
            color="#212121"
            marginBottom="32px"
          >
            Cadastro
          </Text>
          <FormControl>
            <FormLabel
              htmlFor="name"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16px"
            >
              Nome
            </FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              fontFamily="Open Sans, sans-serif"
              marginBottom="16px"
            />
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
              placeholder="E-mail"
              fontFamily="Open Sans, sans-serif"
              marginBottom="16px"
            />
            <FormLabel
              htmlFor="user"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16px"
            >
              Nome de usuário
            </FormLabel>
            <Input
              id="user"
              type="text"
              placeholder="Ex : @billbulldog"
              fontFamily="Open Sans, sans-serif"
              marginBottom="16px"
            />
            <FormLabel
              htmlFor="password"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16px"
            >
              Senha
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              fontFamily="Open Sans, sans-serif"
            />
            <FormHelperText
              fontFamily="Open Sans, sans-serif"
              fontSize="10px"
              margin="4px 0 0 0"
            >
              Deve conter no mínimo um número e uma letra maiúscula
            </FormHelperText>
            <Button
              colorScheme="blue"
              margin="40px 0 24px 0"
              backgroundColor="#00ACC1"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              width="inherit"
            >
              Entrar
            </Button>
            <Text fontFamily="Open Sans, sans-serif">Já possui cadastro?</Text>
            <Link
              href="singUp"
              fontFamily="Open Sans, sans-serif"
              color="#00ACC1"
              textDecoration="underline"
            >
              Faça login
            </Link>
          </FormControl>
        </Flex>
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
    </ChakraProvider>
  );
}

export default SingnUp;
