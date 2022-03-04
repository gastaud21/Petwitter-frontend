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

function OtherProfile() {
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
      <Flex flexDirection="column" display={["flex", "none"]}>
        <Flex
          padding="10px 0 10px 16px"
          position="fixed"
          zIndex="999"
          boxShadow="0px 2px 4px 0px #21212133"
          width="100vw"
          backgroundColor="white"
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
          {/*MOBILE*/}
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
      {/*DESKTOP*/}
      <Grid display={["none", "grid"]} templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={2}>
          <Flex flexDirection="column">
            <Flex justifyContent="center" alignItems="center" padding="24px 0">
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
              padding=" 0 0 0 30px"
              backgroundImage={tempData[0].profileCover}
              height="184px"
              justifyContent="flex-end"
            >
              <Avatar src={tempData[0].photo} size="2xl" />
            </Flex>
            <Flex
              flexDirection="column"
              padding=" 34px 0 0 30px"
              borderRight="1px solid rgba(0, 0, 0, 0.08)"
              borderLeft="1px solid rgba(0, 0, 0, 0.08)"
            >
              <Text
                fontFamily="Open Sans, sans-serif"
                fontSize="24px"
                lineHeight="33px"
                fontWeight="bold"
              >
                {tempData[0].name}
              </Text>
              <Text
                fontFamily="Open Sans, sans-serif"
                opacity="0.6"
                lineHeight="22px"
                padding="12px 0"
              >
                @{tempData[0].username}
              </Text>
              <Text
                fontFamily="Open Sans, sans-serif"
                fontSize="18px"
                lineHeight="25px"
              >
                {tempData[0].bio}
              </Text>
              <Flex alignItems="center" padding="12px 0 51.4px 0">
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
                  padding="0 9px"
                  fontSize="18px"
                  opacity="0.6"
                  lineHeight="25px"
                >
                  Joined {tempData[0].createProfile}
                </Text>
              </Flex>
              <Text
                fontFamily="Open Sans, sans-serif"
                fontWeight="700"
                lineHeight="24.51px"
                borderBottom="3px solid #00acc1"
                width="86px"
                textAlign="center"
                fontSize="18px"
              >
                Petposts
              </Text>
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

export default OtherProfile;
