// ZAD1 Stwórzmy nasz pierwszy serwer wykorzystując wbudowany moduł HTTP,
// który wyśle do naszego klienta przywitanie. Sprawdźmy czy działa aplikacja
// poprzez uruchomienie przeglądarki i wysłanie żądania do naszego serwera. (port 4700)

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end(`Hello!`);
// });

// server.listen(4700);

// ZAD2 Dodajmy do naszej aplikacji z zadania 1 warunek, jeżeli w adresie pojawi się parametr name
// przywitajmy naszego użytkownika po nazwie. (wykorzystajmy wbudowany moduł URL)

// const http = require("http");

// const app = http.createServer((req, res) => {
//   const url = new URL(req.url, "http://localhost");
//   const name = url.searchParams.get("name") || "user";

//   res.end(`Hello ${name}`);
// });

// app.listen(4700);

// ZAD3 Jak możemy zaobserwować podczas tworzenia aplikacji na wbudowanym module HTTP uciążliwe jest pobieranie danych wysłanych przez klienta.
// Aby usprawnić tworzenie serwera web powstały różne frameworki, m.in. Express który pozwala na szybsze postawienie naszego serwera.
// Zmodyfikujmy nasz kod z zadania 2 tak aby był wykorzystywany framework Express.

// const express = require("express");
// const app = express();

// app.get("/:name?", (req, res) => {
//   const name = req.params.name || "user";
//   res.send(`hello ${name}`);
// });

// app.listen(4700);

// ZAD4 Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url wykona mnożenie w naszej aplikacji.
// Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

// const express = require("express");

// const app = express();
// app.get("/", (req, res) => {
//   res.send("hello user");
// });

// app.get("/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   const result = a * b;
//   //   res.send(`${result}`); // drugi sposób
//   res.send(200, result);
// });

// app.listen(4700);

// ZAD5 Rozszerzmy naszą aplikację z zadania 4 o dodatkowe działania matematyczne takie jak mnożenie, dzielenie i odejmowanie.
// Podzielmy zadania na odpowiednie ścieżki.

// const express = require("express");

// const app = express();
// app.get("/", (req, res) => {
//   res.send("hello user");
// });
// app.get("/mnozenie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   const result = a * b;
//   res.send(`${result}`);
// });
// app.get("/dzielenie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   const result = a / b;
//   res.send(`${result}`);
// });
// app.get("/dodawanie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   const result = parseInt(a) + parseInt(b);
//   res.send(`${result}`);
// });
// app.get("/odejmowanie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   const result = a - b;
//   res.send(`${result}`);
// });

// app.listen(4700);

// ZAD6 Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników
// - Stworzyć 'końcówkę' /add do dodawania użytkownika która przyjmuje parametry ?name=Jan&username=janko&email=jan@nowak.abc
// - Dodać ścieżkę wyświetlania wszystkich użytkowników oraz jeżeli zostanie podany odpowiedni id wyświetlić jedynie jednego użytkownika
// - Rozszerzyć aplikację o kasowanie użytkownika poprzez odpowiednią ścieżkę.

// const express = require("express");

// const app = express();

// const users = [
//   {
//     name: "Jan",
//     username: "Janko",
//     email: "jan@nowak.abc"
//   }
// ];
// app.get("/add", (req, res) => {
//   users.push(req.query);
//   console.log(users);
//   res.send("dodano uzytkownika");
// });
// app.get("/list/:id?", (req, res) => {
//   const { id } = req.params;
//   if (id) {
//     res.send(users[id]);
//   } else {
//     res.send(users);
//   }
// });
// app.get("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   users.splice(id, 1);
//   res.send(users);
// });

// app.listen(4700);

// ZAD7 Wzorując się na zadaniu 6 stwórzmy analogicznie obsługę tablicy zawierającej posty. Aplikacja ma rozszerzyć naszą już istniejącą aplikację z zadania 6.

// const express = require("express");

// const app = express();

// const users = [
//   {
//     name: "Jan",
//     username: "Janko",
//     email: "jan@nowak.abc"
//   }
// ];

// const posts = [
//   {
//     userId: 0,
//     title: "Janko",
//     body: "jan@nowak.abc"
//   }
// ];

// app.get("/users/add", (req, res) => {
//   users.push(req.query);
//   console.log(users);
//   res.send("dodano uzytkownika");
// });
// app.get("/users/list/:id?", (req, res) => {
//   const { id } = req.params;
//   if (id) {
//     res.send(users[id]);
//   } else {
//     res.send(users);
//   }
// });
// app.get("/users/delete/:id", (req, res) => {
//   const { id } = req.params;
//   users.splice(id, 1);
//   res.send(users);
// });

// app.get("/posts/add", (req, res) => {
//   posts.push(req.query);
//   console.log(posts);
//   res.send("dodano post");
// });
// app.get("/posts/list/:id?", (req, res) => {
//   const { id } = req.params;
//   if (id) {
//     res.send(posts[id]);
//   } else {
//     res.send(posts);
//   }
// });
// app.get("/posts/delete/:id", (req, res) => {
//   const { id } = req.params;
//   posts.splice(id, 1);
//   res.send(posts);
// });

// app.listen(4700);

// ZAD8 Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(https://expressjs.com/en/4x/api.html#router)

const express = require("express");
const app = express();
const users = require("./users");
const posts = require("./posts");

app.use("/users", users);
app.use("/posts", posts);

app.listen(4700, () => console.log("running"));
