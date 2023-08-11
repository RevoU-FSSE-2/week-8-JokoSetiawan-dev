interface Transaction {
    id: number;
    type: string;
    name: string;
    details: string;
    ammount: number;
}

export let transactions: Transaction[] = [
    {
        id: 1,
        type: "cash in",
        name: "salary",
        details: "agustus",
        ammount: 30000000,
    },
    {
        id: 2,
        type: "cash out",
        name: "entertainmet",
        details: "netflix",
        ammount: 200000,
    },
    {
        id: 3,
        type: "cash out",
        name: "jajan",
        details: "kopi",
        ammount: 100000,
    },
    {
        id: 4,
        type: "cash out",
        name: "bayar",
        details: "wifi",
        ammount: 300000,
    }
]
