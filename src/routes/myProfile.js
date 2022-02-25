import {
  Image,
  Flex,
  Text,
  Grid,
  GridItem,
  Container,
  Avatar,
  Button,
} from "@chakra-ui/react";
import DrawerMenu from "../components/DrawerMenu";
import Tweet from "../components/Tweet";
import DoTweetDrawer from "../components/DoTweetDrawer";

function MyProfile() {
  const tempData = [
    {
      id: 1,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 2,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 3,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 4,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 5,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 6,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 7,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 8,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 9,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
    },
    {
      id: 10,
      name: "Goddard",
      tweet: "Au au",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7xP656kLgaWjtSGvaapHiGV3Xlf64rNpxg&usqp=CAU",
      username: "The_GODdard",
      postTime: "20s",
      profileCover:
        "https://y.yarn.co/f452744e-43c8-4076-ae8f-b44035ed0cd6_screenshot.jpg",
      bio: "UX/UI designer at @nave.rs",
      createProfile: "May 2022",
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
        <Container padding="0">
          <Flex
            backgroundImage={tempData[0].profileCover}
            height="147px"
            margin="48px 0 0 0"
            flexDirection="column"
            justifyContent="end"
          >
            <Avatar
              src={tempData[0].photo}
              size="xl"
              border="4px solid white"
            />
          </Flex>
          <Flex flexDirection="column" padding="16px 16px 0 16px">
            <Text
              fontFamily="Open Sans, sans-serif"
              fontSize="22px"
              lineHeight="29.96px"
              fontWeight="700"
            >
              {tempData[0].name}
            </Text>
            <Text
              fontFamily="Open Sans, sans-serif"
              color="#687684"
              lineHeight="21.79px"
              padding="4px 0 12px 0"
            >
              @{tempData[0].username}
            </Text>
            <Text fontFamily="Open Sans, sans-serif" lineHeight="21px">
              {tempData[0].bio}
            </Text>
            <Flex alignItems="center" padding="12px 0 18px 0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 4.75C4.75 5.30225 4.30225 5.75 3.75 5.75C3.19775 5.75 2.75 5.30225 2.75 4.75C2.75 4.19775 3.19775 3.75 3.75 3.75C4.30225 3.75 4.75 4.19775 4.75 4.75Z"
                  fill="#687684"
                />
                <path
                  d="M3.75 9C4.30225 9 4.75 8.55225 4.75 8C4.75 7.44775 4.30225 7 3.75 7C3.19775 7 2.75 7.44775 2.75 8C2.75 8.55225 3.19775 9 3.75 9Z"
                  fill="#687684"
                />
                <path
                  d="M4.75 11C4.75 11.5522 4.30225 12 3.75 12C3.19775 12 2.75 11.5522 2.75 11C2.75 10.4478 3.19775 10 3.75 10C4.30225 10 4.75 10.4478 4.75 11Z"
                  fill="#687684"
                />
                <path
                  d="M7.25 5.75C7.80225 5.75 8.25 5.30225 8.25 4.75C8.25 4.19775 7.80225 3.75 7.25 3.75C6.69775 3.75 6.25 4.19775 6.25 4.75C6.25 5.30225 6.69775 5.75 7.25 5.75Z"
                  fill="#687684"
                />
                <path
                  d="M8.25 8C8.25 8.55225 7.80225 9 7.25 9C6.69775 9 6.25 8.55225 6.25 8C6.25 7.44775 6.69775 7 7.25 7C7.80225 7 8.25 7.44775 8.25 8Z"
                  fill="#687684"
                />
                <path
                  d="M7.25 12C7.80225 12 8.25 11.5522 8.25 11C8.25 10.4478 7.80225 10 7.25 10C6.69775 10 6.25 10.4478 6.25 11C6.25 11.5522 6.69775 12 7.25 12Z"
                  fill="#687684"
                />
                <path
                  d="M11.75 4.75C11.75 5.30225 11.3022 5.75 10.75 5.75C10.1978 5.75 9.75 5.30225 9.75 4.75C9.75 4.19775 10.1978 3.75 10.75 3.75C11.3022 3.75 11.75 4.19775 11.75 4.75Z"
                  fill="#687684"
                />
                <path
                  d="M10.75 9C11.3022 9 11.75 8.55225 11.75 8C11.75 7.44775 11.3022 7 10.75 7C10.1978 7 9.75 7.44775 9.75 8C9.75 8.55225 10.1978 9 10.75 9Z"
                  fill="#687684"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895508 0 0 0.895386 0 2V12.5C0 13.6046 0.895508 14.5 2 14.5H12.5C13.6045 14.5 14.5 13.6046 14.5 12.5V2C14.5 0.895386 13.6045 0 12.5 0H2ZM12.5 2.5H2C1.79883 2.5 1.61572 2.57947 1.48096 2.70874C1.33838 2.84521 1.25 3.03723 1.25 3.25V12.5C1.25 12.9142 1.58594 13.25 2 13.25H12.5C12.9141 13.25 13.25 12.9142 13.25 12.5V3.25C13.25 2.83582 12.9141 2.5 12.5 2.5Z"
                  fill="#687684"
                />
              </svg>
              <Text
                fontFamily="Open Sans, sans-serif"
                padding="0 4px"
                fontSize="14px"
                color="#687684"
              >
                Joined {tempData[0].createProfile}
              </Text>
            </Flex>
            <Text
              fontFamily="Open Sans, sans-serif"
              fontWeight="600"
              lineHeight="22px"
              borderBottom="3px solid #00acc1"
              width="86px"
              textAlign="center"
            >
              Petposts
            </Text>
          </Flex>
          <Flex display={["block", "none"]}>
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
          </Flex>
        </Container>
      </Flex>
    </div>
  );
}

export default MyProfile;
