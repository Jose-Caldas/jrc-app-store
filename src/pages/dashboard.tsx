import { Flex, Text, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";
import nookies from "nookies";
import { APP_TOKEN, AuthContext, User } from "../context/AuthContext";

export default function Dashboard({ loggedUser }: { loggedUser: User }) {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, [loggedUser]);
  return (
    <Flex>
      <SideBar />
      <Flex flex="1" flexDirection="column" mt="131px" p="30px">
        <Text fontSize="40px" fontWeight="600" mb="22px">
          Welcome {user?.name}!!
        </Text>
        <Text fontSize="30px" fontWeight="600" mb="22px" color="#8886A5">
          Confirme seu email: {user?.email}
        </Text>
        <Stack spacing="6">
          <Flex align="center" color="#8886A5" bg="#FFFFFF" p="10px">
            <Text pb="5px" fontSize="30px">
              👈
            </Text>
            <Text ml="10px">Navegue pelo menu a esquerda</Text>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  const token = cookies[APP_TOKEN];

  try {
    if (token) {
      const response = await fetch(
        "https://e-commerce-b4.herokuapp.com/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            query: `query Me{
  me {
    name
    email
  }
}`,
          }),
        }
      );

      const user = await response.json();

      if (!user) {
        ctx.res.writeHead(307, { Location: "/" });
        return ctx.res.end();
      }

      return {
        props: {
          loggedUser: user.data.me,
        },
      };
    }
  } catch (e) {
    console.log(e);
    ctx.res.writeHead(307, { Location: "/" });
    ctx.res.end();
  }

  ctx.res.writeHead(307, { Location: "/" });
  ctx.res.end();

  return {
    props: {},
  };
}
