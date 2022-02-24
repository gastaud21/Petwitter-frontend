import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Avatar,
  Flex,
} from "@chakra-ui/react";

function DrawerMenu(props) {
  const { userAvatar } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <Image src="./DrawerButton.png" />
      </button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="center">
              <Avatar src={userAvatar} size="lg" />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <p>Home</p>
            <p>Meu perfil</p>
            <p>Configurações</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
