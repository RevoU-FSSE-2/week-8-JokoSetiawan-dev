"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
// Get All Transactions
app.get("/transactions", (req, res) => {
    res.json(data_1.transactions);
});
// GET - Get transaction by ID
app.get("/transactions/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const transaction = data_1.transactions.find((t) => t.id === id);
    if (!transaction) {
        res.status(404).json({ error: "Transaction not found" });
    }
    else {
        res.json(transaction);
    }
});
// POST - Create a new transaction
app.post("/transactions", (req, res) => {
    const newTransaction = req.body;
    if (!newTransaction.id ||
        !newTransaction.type ||
        !newTransaction.name ||
        !newTransaction.details ||
        newTransaction.ammount === undefined) {
        res.json({ error: "Incomplete transaction data" });
    }
    else {
        data_1.transactions.push(newTransaction);
        res.json(data_1.transactions);
    }
});
// PUT - Update transaction by ID
app.put('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTransaction = req.body;
    const index = data_1.transactions.findIndex(t => t.id === id);
    if (index === -1) {
        res.json({ error: 'Transaction not found' });
    }
    else {
        data_1.transactions[index] = updatedTransaction;
        res.json(data_1.transactions);
    }
});
// PATCH /transactions/:id - Partially update transaction by ID
app.patch('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const index = data_1.transactions.findIndex(t => t.id === id);
    if (index === -1) {
        res.json({ error: 'Transaction not found' });
    }
    else {
        data_1.transactions[index] = Object.assign(Object.assign({}, data_1.transactions[index]), updates);
        res.json(data_1.transactions);
    }
});
// DELETE - Delete transaction by ID
app.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data_1.transactions.findIndex(t => t.id === id);
    if (index === -1) {
        res.json({ error: 'Transaction not found' });
    }
    else {
        const deletedTransaction = data_1.transactions.splice(index, 1)[0];
        res.json(data_1.transactions);
    }
});
app.listen(port, () => {
    console.log("listening on port" + port);
});
