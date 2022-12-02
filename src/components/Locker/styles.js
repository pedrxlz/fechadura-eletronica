import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountdownTimer = styled.div`
  position: absolute;
  z-index: -10;
  .base {
    width: 220px;
  }
  .base .running {
    stroke: #4300ff;
  }
`;

export const LockerButton = styled(Button)`
  z-index: 10;
  background: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid
    ${(props) => (props.islocked === "true" ? "#4300ff" : "#61c94c")};

  svg {
    color: ${(props) => (props.islocked === "true" ? "#4300ff" : "#61c94c")};
  }

  :hover {
    background: none;
  }
`;
