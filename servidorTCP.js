const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  //avisarnos de nueva conexion
  console.log("Nueva conexion detectada ");
  //pedirle al cliente que mande un mensaje
  socket.write("Manda un mensaje:\n");

  //imprimir mensaje enviado por el cliente
  socket.on("data", (data) => {
    console.log("\nMensaje del cliente:  " + data);
    //escribir un mensaje de recibido en el lado del cliente
    socket.write("Mensaje Recibido en el servidor!\nManda otro mensaje:\n");
  });

  //al cerrar notificarnos
  socket.on("close", () => {
    console.log("El cliente se ha desconectado");
  });

  //notificarnos de error
  socket.on("error", (err) => {
    console.log(err.message);
  });
});

//poner el puerto en escucha
server.listen(4000, () => {
  console.log("servidor esta corriendo en el puerto 4000");
});
