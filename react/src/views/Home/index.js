import React/*, { useState, useRef }*/ from "react";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";

import Logo from "../../assets/background.svg";
import ContainerItems from "../../components/ContainerItems";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

const Home = () => {
  return (
    <Container>
         <Image alt="logo-imagem" src={Logo} />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Seu pedido aqui !" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Seu nome aqui !" />

        <Button>
          Novo Pedido
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Home;