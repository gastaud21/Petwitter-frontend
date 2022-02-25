import {
  Image,
  Flex,
  Text,
  Grid,
  GridItem,
  Container,
  Textarea,
  Avatar,
  Button,
} from "@chakra-ui/react";
import DrawerMenu from "../components/DrawerMenu";
import Tweet from "../components/Tweet";
import DoTweetDrawer from "../components/DoTweetDrawer";

function Home() {
  const tempData = [
    {
      id: 1,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 2,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 3,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 4,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 5,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 6,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 7,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 8,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 9,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 10,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 11,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 12,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
    {
      id: 13,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
    },
    {
      id: 14,
      name: "Dukey",
      tweet: "Lioasd asdijklj ajsnj aasda asius jas.",
      photo:
        "https://64.media.tumblr.com/9f1670ec9e775856db8b0fe2be81ee54/6d85bd513493b99f-0f/s500x750/a71ecf7be0008482965102bff3349f475c6de12b.jpg",
      username: "DuckynhoBrabo",
      postTime: "20s",
    },
  ];
  return (
    <div>
      {/*MOBILE*/}
      <Flex flexDirection="column">
        <Flex
          padding="10px 0 10px 16px"
          position="fixed"
          zIndex="999"
          boxShadow="0px 2px 4px 0px #21212133"
          width="100vw"
          backgroundColor="white"
          display={["flex", "none"]}
          justifyContent="center"
        >
          <Flex position="absolute" left="0" padding="6px 0 6px 16px">
            <DrawerMenu userAvatar={tempData[0].photo} />
          </Flex>
          <Flex alignItems="center">
            <Image src="./pawCyanHeader.png" />
            <Text
              fontFamily="Open Sans, sans-serif"
              color="cyan.400"
              fontSize="14px"
              fontWeight="bold"
              paddingLeft="9.33px"
            >
              PETWITTER
            </Text>
          </Flex>
        </Flex>
        {/*MOBILE*/}

        <Container padding="48px 0 0 0" display={["block", "none"]}>
          {tempData?.map((user) => (
            <Tweet
              username={user.username}
              name={user.name}
              userImage={user.photo}
              post={user.tweet}
              postTime={user.postTime}
              key={user.id}
            />
          ))}
          <Flex
            justifyContent="flex-end"
            padding="0 16px 22px 0"
            position="fixed"
            bottom="0"
            right="0"
          >
            <DoTweetDrawer userAvatar={tempData[0].photo} />
          </Flex>
        </Container>
      </Flex>
      {/*DESKTOP*/}
      <Grid display={["none", "grid"]} templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={2}>
          <Flex flexDirection="column">
            <Flex alignItems="center" justifyContent="center" padding="24px 0">
              <Image src="./paw-cyan-grid.png" />
              <Text
                color="cyan.400"
                fontSize="27px"
                fontWeight="bold"
                paddingLeft="18px"
                fontFamily="Open Sans, sans-serif"
              >
                PETWITTER
              </Text>
            </Flex>
            <Button
              backgroundColor="white"
              color="#424242"
              borderRadius="0"
              leftIcon={
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.57495 17V11H12.575V17H17.575V9H20.575L10.575 0L0.574951 9H3.57495V17H8.57495Z"
                    fill="#424242"
                  />
                </svg>
              }
            >
              Home
            </Button>
            <Button
              backgroundColor="white"
              color="#424242"
              borderRadius="0"
              leftIcon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.575 0C5.05501 0 0.575012 4.48 0.575012 10C0.575012 15.52 5.05501 20 10.575 20C16.095 20 20.575 15.52 20.575 10C20.575 4.48 16.095 0 10.575 0ZM10.575 3C12.235 3 13.575 4.34 13.575 6C13.575 7.66 12.235 9 10.575 9C8.91501 9 7.57501 7.66 7.57501 6C7.57501 4.34 8.91501 3 10.575 3ZM10.575 17.2C8.07501 17.2 5.86501 15.92 4.57501 13.98C4.60501 11.99 8.57501 10.9 10.575 10.9C12.565 10.9 16.545 11.99 16.575 13.98C15.285 15.92 13.075 17.2 10.575 17.2Z"
                    fill="#424242"
                  />
                </svg>
              }
            >
              Meu petfil
            </Button>
            <Button
              backgroundColor="white"
              color="#424242"
              borderRadius="0"
              leftIcon={
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.715 10.936C16.751 10.636 16.775 10.324 16.775 10C16.775 9.67602 16.751 9.36403 16.703 9.06402L18.731 7.48002C18.911 7.33602 18.959 7.07202 18.851 6.86802L16.931 3.54402C16.811 3.32802 16.559 3.25602 16.343 3.32802L13.955 4.28802C13.451 3.90402 12.923 3.59202 12.335 3.35202L11.975 0.808024C11.939 0.568024 11.735 0.400024 11.495 0.400024H7.655C7.415 0.400024 7.223 0.568024 7.187 0.808024L6.827 3.35202C6.239 3.59202 5.699 3.91602 5.207 4.28802L2.819 3.32802C2.603 3.24402 2.351 3.32802 2.231 3.54402L0.310997 6.86802C0.190997 7.08402 0.238997 7.33602 0.430997 7.48002L2.459 9.06402C2.411 9.36403 2.375 9.68802 2.375 10C2.375 10.312 2.399 10.636 2.447 10.936L0.418997 12.52C0.238997 12.664 0.190997 12.928 0.298997 13.132L2.219 16.456C2.339 16.672 2.591 16.744 2.807 16.672L5.195 15.712C5.699 16.096 6.227 16.408 6.815 16.648L7.175 19.192C7.223 19.432 7.415 19.6 7.655 19.6H11.495C11.735 19.6 11.939 19.432 11.963 19.192L12.323 16.648C12.911 16.408 13.451 16.084 13.943 15.712L16.331 16.672C16.547 16.756 16.799 16.672 16.919 16.456L18.839 13.132C18.959 12.916 18.911 12.664 18.719 12.52L16.715 10.936ZM9.575 13.6C7.595 13.6 5.975 11.98 5.975 10C5.975 8.02002 7.595 6.40002 9.575 6.40002C11.555 6.40002 13.175 8.02002 13.175 10C13.175 11.98 11.555 13.6 9.575 13.6Z"
                    fill="#424242"
                  />
                </svg>
              }
            >
              Configurações
            </Button>
          </Flex>
        </GridItem>
        {/*DESKTOP*/}
        <GridItem colSpan={5}>
          <Container margin="0" maxWidth="none" padding="0">
            <Flex
              flexDirection="column"
              border="1px solid rgba(0, 0, 0, 0.1)"
              boxSizing="border-box"
              boxShadow="0px 10px 0px #E7ECF0"
              padding="34px 30px 25px 27px"
            >
              <Flex>
                <Avatar src={tempData[0].photo} size="md" />
                <Textarea
                  placeholder="O que está acontecendo?"
                  resize="none"
                  border="none"
                />
              </Flex>
              <Flex justifyContent="flex-end">
                <Button>Petwittar</Button>
              </Flex>
            </Flex>
            {tempData?.map((user) => (
              <Tweet
                username={user.username}
                name={user.name}
                userImage={user.photo}
                post={user.tweet}
                postTime={user.postTime}
                key={user.id}
              />
            ))}
          </Container>
        </GridItem>
        <GridItem colSpan={2} />
      </Grid>
    </div>
  );
}

export default Home;
