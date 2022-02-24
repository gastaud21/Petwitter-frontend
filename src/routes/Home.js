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
        >
          <DrawerMenu userAvatar={tempData[0].photo} />
          <Flex backgroundColor="grey" alignItems="center">
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
          <Flex justifyContent="flex-end" padding="0 16px 35px 0">
            <DoTweetDrawer userAvatar={tempData[0].photo} />
          </Flex>
        </Container>
      </Flex>
      <Grid display={["none", "grid"]} templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={2}>
          <Flex flexDirection="column">
            <Flex alignItems="center">
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
          </Flex>
        </GridItem>
        <GridItem colSpan={5}>
          <Container>
            <Flex flexDirection="column">
              <Flex>
                <Avatar src={tempData[0].photo} size="md" />
                <Textarea placeholder="O que está acontecendo?" resize="none" />
              </Flex>
              <Flex justifyContent="flex-end">
                <Button>Petwittar</Button>
              </Flex>
            </Flex>
          </Container>
        </GridItem>
        <GridItem colSpan={2} />
      </Grid>
    </div>
  );
}

export default Home;
