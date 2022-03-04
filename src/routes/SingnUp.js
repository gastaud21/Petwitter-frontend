import {
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

function SingnUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex flexDirection={["column", "row"]}>
      {/*MOBILE*/}
      <Flex
        backgroundImage="./backgroundDog.png"
        height="143px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        display={["flex", "none"]}
      >
        <Image
          src="./pawSymbol.png"
          height={"min-content"}
          margin="45.95px 0 43.5px 31.94px"
        />
      </Flex>
      {/*DESKTOP*/}
      <Flex
        display={["none", "flex"]}
        backgroundImage="./backgroundDogDesktop.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        width="49vw"
        height="100vh"
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
      {/*MOBILE */}
      <Flex
        flexDirection="column"
        margin="32px 32px 0 32px"
        display={["flex", "none"]}
      >
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
            Cadastrar
          </Button>
          <Text fontFamily="Open Sans, sans-serif">Já possui cadastro?</Text>
          <Link
            href="login"
            fontFamily="Open Sans, sans-serif"
            color="#00ACC1"
            textDecoration="underline"
          >
            Faça login
          </Link>
        </FormControl>
      </Flex>
      {/*DESKTOP*/}
      <Flex
        display={["none", "flex"]}
        flexDirection="column"
        width="51vw"
        padding="51px 0 0 32px"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          maxWidth="522px"
          width="-webkit-fill-available"
        >
          <Image src="./paw-cyan-DESKTOP.png" width="fit-content" />
          <Text
            fontSize="20px"
            fontFamily="Open Sans, sans-serif"
            fontWeight="600"
            lineHeight="32px"
            color="#424242"
            margin="32px 0 24px 0"
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
              marginBottom="24px"
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
              marginBottom="24px"
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
              placeholder="Ex : @carlos1234"
              fontFamily="Open Sans, sans-serif"
              marginBottom="24px"
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
            <FormHelperText
              fontFamily="Open Sans, sans-serif"
              fontSize="12px"
              margin="4px 0 0 0"
            >
              Deve conter no mínimo um número e uma letra maiúscula
            </FormHelperText>
            <Button
              colorScheme="blue"
              margin="28px 0 16px 0"
              backgroundColor="#00ACC1"
              fontFamily="Open Sans, sans-serif"
              fontSize="14px"
              width="inherit"
            >
              Cadastrar
            </Button>
            <Text fontFamily="Open Sans, sans-serif">
              Já possui cadastro?{" "}
              <Link
                href="login"
                fontFamily="Open Sans, sans-serif"
                color="#00ACC1"
                textDecoration="underline"
              >
                Faça login
              </Link>
            </Text>
          </FormControl>
        </Flex>
      </Flex>
      {/*MOBILE */}
      <Flex
        display={["flex", "none"]}
        margin="57px 0 24px 0"
        justifyContent="center"
      >
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
  );
}

export default SingnUp;
