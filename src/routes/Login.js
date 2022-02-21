import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { ChakraProvider, Image, Flex, Text, Input } from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <ChakraProvider>
      <Flex
        backgroundImage={"./backgroundDog.png"}
        height="262px"
        maxW={"100vw"}
        backgroundRepeat="round"
        flexDirection={"column"}
      >
        <Image
          src="./pawSymbol.png"
          alt="paw"
          width={"min-content"}
          margin="46px 0 0 32px"
        />
        <Text
          fontFamily={"Open Sans, sans-serif"}
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
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            E-mail: <input name="email" type="text" />
          </label>{" "}
          <label>
            Senha: <input name="password" type="password" />
          </label>{" "}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </ChakraProvider>
  );
}

export default Login;
