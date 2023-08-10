"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Welcome to revou",
        data: [
            {
                id: 1,
                title: "title 1",
            },
        ],
    });
});
app.listen(port, () => {
    console.log("listening on port" + port);
});
