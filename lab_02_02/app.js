// //ZAD1 Wykorzystując ścieżki ze wzorcem(string pattern) stwórzmy web serwer,
// //który udostępni końcówkę pozwalającą wyliczyć nam podatek z podanej kwoty i zwróci nam 2 wartości: podatek oraz kwota bez podatku.

// const express = require("express");

// const app = express();

// const calculateTax = (tax, amount) => {
//   const taxAmount = (tax / 100) * amount;
//   const income = amount - taxAmount;
//   return { taxAmount, income };
// };

// app.get("/podatek/:tax/:amount", (req, res) => {
//   const { tax, amount } = req.params;
//   const result = calculateTax(tax, amount);

//   res.send(result);
// });

// app.listen(4500);

// //ZAD2 Zmodyfikujmy zadanie 1 tak aby dane były przesyłane metodą POST zamiast GET.
// //W tym celu powinniśmy zmodyfikować naszą ścieżkę oraz pobieranie parametrów.
// //Aby możliwe było przetestowanie wysłanego żądania zainstalujmy POSTMAN'a

// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded());

// const calculateTax = (tax, amount) => {
//   const taxAmount = (tax / 100) * amount;
//   const income = amount - taxAmount;
//   return { taxAmount, income };
// };

// app.post("/podatek", (req, res) => {
//   const { tax, amount } = req.body;
//   const result = calculateTax(tax, amount);

//   res.send(result);
// });

// app.listen(4500);

//ZAD3 Stwórzmy pierwsze pełne REST API, które pozwoli nam na zarządzanie cytatami (klasyczny CRUD).
// wyświetlane wszystkich cytatów (GET)
// wyświetlane konkretnego cytatu (GET)
// dodawanie cytatu (POST)
// usunie cytatu (DELETE)
// edytowanie cytatu (PUT)

//ZAD4 Dodajmy do naszej aplikacji z zadania 3 nową funkcjonalność. Stwórzmy moduł pozwalający na zarządzanie listą zadań. (Task manager/TODO list).
// wyświetlanie wszystkich dostępnych zadań (GET)
// wyświetlanie konkretnego zadania (GET)
// dodawanie zadania (POST)
// usuwanie zadania (DELETE)
// edytowanie zadania (PUT)

//ZAD5 Zaimplementujmy nową funkcjonalność do naszego modułu zarządzania lista zadań.
// Nasz moduł powinien pozwalać na zaznaczenie oraz odznaczenie iż zadanie zostało już wykonane czy też nie.
// stworzyć możliwość zmiany statusu zadania (wykonane/niewykonane) (PATCH?)
// dać możliwość wyświetlenia wszystkich zadań lub też wykonanych/niewykonanych (GET)

//ZAD6 Dodajmy do naszej aplikacji dodatkowy moduł, który będzie zarządzał użytkownikami.
// doda nowego użytkownika (POST)
// wyświetli użytkowników (GET)
// usunie użytkownika (DELETE)
// podmieni cały obiekt (PUT)

const express = require("express");
const taxRouter = require("./tax");
const quotesRouter = require("./quotes");
const tasksRouter = require("./tasks");
const usersRouter = require("./users");

const app = express();
app.use(express.json());

app.use("/podatek", taxRouter);
app.use("/quotes", quotesRouter);
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.listen(4500, () => console.log("server started"));
