import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/background.svg";
import ContainerItems from "../../components/ContainerItems";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
  const { data: newOrder } = await axios.post("http://localhost:8000/orders", {
    order: inputOrder.current.value,
    clientName: inputName.current.value,
  });

  setOrders([...orders, newOrder]);
  navigate("/order");
}
  return (
    <Container>
         <Image alt="logo-imagem" src={Logo} />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Seu pedido aqui !" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Seu nome aqui !" />

        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Home;