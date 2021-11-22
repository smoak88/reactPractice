import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const ModalCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  padding: 0;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & div {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Backdrop = (props) => {
  return <BackdropDiv onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalCard>
      <header>
        <h2> {props.title} </h2>
      </header>
      <div>
        <p>{props.message} </p>
      </div>
      <footer>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </ModalCard>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
