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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function DoTweetDrawer(props) {
  const { userAvatar } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textLenght, setTextLenght] = useState(0);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setTextLenght(inputValue.length);
    console.log(textLenght);
  };

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
              <Flex>
                <Text
                  color={"#828282"}
                  fontFamily="Open Sans, sans-serif"
                  marginRight="14px"
                  alignSelf="center"
                  fontSize="14px"
                  fontWeight="400"
                >
                  {textLenght}/140
                </Text>
                <Button
                  fontFamily="Open Sans, sans-serif"
                  borderRadius="10px"
                  opacity="0.4"
                >
                  Petwittar
                </Button>
              </Flex>
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
                name="content"
                onChange={handleChange}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DoTweetDrawer;
