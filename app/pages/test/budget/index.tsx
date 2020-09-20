import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { Header, Footer } from "../../../components";
import * as MongoDB from "mongodb";
import axios from "axios";

const Instance = axios.create({
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

const makeDeposit = (
  account: MongoDB.WithId<Account>,
  amount: number,
  setRedirect: (redirect: boolean) => void
) => {
  const deposit = {
    accountId: account._id,
    amount,
    paidAt: Date.now(),
  };
  Instance.post("/api/deposit/create", {
    deposit,
  }).then((res) => {
    setRedirect(true);
  });
};

const createAccount = (
  setAccount: (account: MongoDB.WithId<Account>) => void
) => {
  Instance.post("/api/account/create", {
    account: { name: "テスト" },
  }).then((res) => {
    setAccount(res.data);
  });
};

const Budget = (): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);
  const [redirect, setRedirect] = useState<boolean>(true);
  const [account, setAccount] = useState<MongoDB.WithId<Account>>();

  useEffect(() => {
    if (redirect) {
      Instance.get("/api/deposit/amount").then((res) => {
        setAmount(res.data.amount);
        setRedirect(false);
      });
    }
  }, [redirect]);

  return (
    <div>
      <Header></Header>
      <Jumbotron className="text-center">
        <Container>
          <h1 className="jumptron-heading">現在の貯金額は{amount}円です</h1>
          <h1 className="jumptron-heading">
            現在のユーザー名：{account?.name}
          </h1>
          <p>
            <Button
              className="btn-primary my-2"
              onClick={() => makeDeposit(account, 1000, setRedirect)}
            >
              +1000円
            </Button>
            <Button
              className="btn-secondary my-2"
              onClick={() => {
                createAccount(setAccount);
              }}
            >
              登録
            </Button>
          </p>
        </Container>
      </Jumbotron>
      <Footer></Footer>
    </div>
  );
};

export default Budget;
