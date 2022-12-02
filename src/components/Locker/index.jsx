import { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { set, ref, onValue } from "firebase/database";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import * as S from "./styles.js";

export const Locker = () => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setIsLocked(data?.isLocked);
      }
    });
  }, []);

  const handleLocker = () => {
    if (isLocked) {
      set(ref(db, "/isLocked"), false);
    }
  };

  return (
    <S.Container>
      <S.LockerButton
        islocked={isLocked ? "true" : "false"}
        onClick={() => handleLocker()}
      >
        {isLocked ? <AiOutlineLock size={50} /> : <AiOutlineUnlock size={50} />}
      </S.LockerButton>
    </S.Container>
  );
};
