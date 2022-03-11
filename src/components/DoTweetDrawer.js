import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Flex,
  Button,
  Avatar,
  Textarea,
} from "@chakra-ui/react";

function DoTweetDrawer(props) {
  const { userAvatar } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <Image src="./newTweet.png" />
      </button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent borderRadius="10px 10px 0 0" top="35px">
          <DrawerHeader borderBottomWidth="1px" padding="8px 8px 8px 16px">
            <Flex justifyContent="space-between">
              <button
                onClick={onClose}
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "12px",
                  lineHeight: "21px",
                }}
              >
                Cancelar
              </button>
              <Button
                fontFamily="Open Sans, sans-serif"
                borderRadius="10px"
                opacity="0.4"
              >
                Petwittar
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody padding="6px 16px">
            <Flex>
              <Avatar src={userAvatar} size="sm" />
              <Textarea
                placeholder="O que está acontecendo?"
                resize="none"
                border="none"
                padding="8px"
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DoTweetDrawer;
