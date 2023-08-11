import express, { Express, Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { transactions } from "./data";

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Succes get API");
});

// Get All Transactions
app.get("/transactions", (req: Request, res: Response) => {
  res.json(transactions);
});

// GET - Get transaction by ID
app.get("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    res.status(404).json({ error: "Transaction not found" });
  } else {
    res.json(transaction);
  }
});

// POST - Create a new transaction
app.post("/transactions", (req, res) => {
  const newTransaction = req.body;

  if (
    !newTransaction.id ||
    !newTransaction.type ||
    !newTransaction.name ||
    !newTransaction.details ||
    newTransaction.ammount === undefined
  ) {
    res.json({ error: "Incomplete transaction data" });
  } else {
    transactions.push(newTransaction);
    res.json(transactions);
  }
});

// PUT - Update transaction by ID
app.put("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTransaction = req.body;

  const index = transactions.findIndex((t) => t.id === id);
  if (index === -1) {
    res.json({ error: "Transaction not found" });
  } else {
    transactions[index] = updatedTransaction;
    res.json(transactions);
  }
});

// PATCH /transactions/:id - Partially update transaction by ID
app.patch("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;

  const index = transactions.findIndex((t) => t.id === id);
  if (index === -1) {
    res.json({ error: "Transaction not found" });
  } else {
    transactions[index] = { ...transactions[index], ...updates };
    res.json(transactions);
  }
});

// DELETE - Delete transaction by ID
app.delete("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = transactions.findIndex((t) => t.id === id);

  if (index === -1) {
    res.json({ error: "Transaction not found" });
  } else {
    const deletedTransaction = transactions.splice(index, 1)[0];
    res.json(transactions);
  }
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
