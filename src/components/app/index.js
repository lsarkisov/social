import React from "react";
import { Container } from 'react-bootstrap';
import LogIn from "../auth/login";

export default function App(props) {
  return (
    <Container>
      <LogIn />
    </Container>
  );
}
