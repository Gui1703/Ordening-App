import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerOrders } from "./styles";
import Logo from "../../assets/background1.svg";
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItems";
import Button from "../../components/Button";
import Trash from "../../assets/trash.svg";

const Home = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:8000/orders/"
      );

      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:8000/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {orders.map((order) => (
            <ContainerOrders key={order.id}>
              <div>{order.order}</div>
              <div>{order.clientName}</div>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </ContainerOrders>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Home;

/*
<ul>
(){orders.map(order => (
  <ContainerOrders key={order.id}>
    <p>{order.order}</p> <p>{order.clientName}</p>
    <button onClick={() => deleteOrder(order.id)}>
      <img src={Trash} alt="Lata de lixo" />
    </button>
  </ContainerOrders>
))}
</ul>
*/
