import { Avatar, Text, Flex, HStack } from "@chakra-ui/react";

function Tweet(props) {
  const { username, name, userImage, post, postTime } = props;

  return (
    <Flex padding="20px 16px 16px 16px" border="1px solid #eeeeee">
      <Avatar size="md" src={userImage} />
      <Flex flexDirection="column" paddingLeft="8px">
        <HStack spacing="4px" paddingBottom="4px">
          <Text
            color="gray.600"
            fontFamily="Open Sans, sans-serif"
            fontWeight="bold"
            fontSize="14px"
            lineHeight="19px"
          >
            {name}
          </Text>
          <Text
            color="gray.600"
            fontFamily="Open Sans, sans-serif"
            fontSize="12px"
            lineHeight="17px"
          >
            @{username}
          </Text>
          <Text
            color="gray.600"
            fontFamily="Open Sans, sans-serif"
            fontSize="12px"
            lineHeight="16px"
          >
            .
          </Text>
          <Text
            color="gray.600"
            fontFamily="Open Sans, sans-serif"
            fontSize="12px"
            lineHeight="17px"
          >
            {postTime}
          </Text>
        </HStack>
        <Text
          fontFamily="Open Sans, sans-serif"
          fontSize="14px"
          lineHeight="18px"
        >
          {post}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Tweet;
