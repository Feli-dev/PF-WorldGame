const express = require('express');
const http = require("http");

const server = express();
const servidor = http.createServer(server);
const socketio = require("socket.io");
const io = socketio(servidor);

io.on("connection", (socket) => {
    let nombre = "";

    socket.on("conectado", (nomb) => {
        nombre = nomb || "";
        if(nombre.length){
            socket.broadcast.emit("mensajes", {
                nombre: "Servidor",
                mensaje: `${nombre} ha entrado en la sala del chat`
            });
        }
    });

    socket.on("mensaje", (nombre, mensaje) => {
        if(nombre.length)io.emit("mensajes", { nombre, mensaje });
    });

    socket.on("disconnect", () => {
        if(nombre.length){
            io.emit("mensajes", {
            nombre: "Servidor",
            mensaje: `${nombre} ha abandonado la sala`,
            });
        }
    });
});


servidor.listen(5000, () => console.log("Servidor socket.io inicializado"));