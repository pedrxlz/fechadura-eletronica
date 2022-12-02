import { Flex, Button, useToast } from "@chakra-ui/react";
import { db } from "../../firebase.js";
import { set, ref, onValue } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import { Locker } from "../Locker";
import * as S from "./styles.js";

const App = () => {
  const [isRegisteringTag, setIsRegisteringTag] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [isLocked, setIsLocked] = useState(true);
  const toast = useToast();

  //the useRef Hook allows you to persist data between renders
  const prevTagRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevTagRef.current = isRegisteringTag;
  }, [tagValue]); //run this code when the value of count changes

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setIsRegisteringTag(data?.isRegisteringTag);
        setTagValue(data?.tag);
        setIsLocked(data?.isLocked);
      }
    });
  }, []);

  useEffect(() => {
    if (prevTagRef.current !== isRegisteringTag && !isRegisteringTag) {
      toast({
        title: "Tag recadastrada com sucesso!",
        description: `Tag: ${tagValue}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isRegisteringTag]);

  const writeToDatabase = () => {
    set(ref(db, "/isRegisteringTag"), true);
  };

  return (
    <S.Container>
      <Locker />

      <Flex paddingTop={70} flexDir={"column"}>
        <S.Label>O Armário está {isLocked ? "trancado" : "aberto"}</S.Label>
        {isLocked && <S.Text>Aperte para destravar</S.Text>}
        <Button
          onClick={writeToDatabase}
          isLoading={isRegisteringTag}
          loadingText={"Aproxime a tag do sensor"}
          marginTop={200}
        >
          Recadastrar Tag
        </Button>
      </Flex>
    </S.Container>
  );
};

export default App;
