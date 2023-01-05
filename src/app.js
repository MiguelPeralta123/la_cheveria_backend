import express from "express"
import pagosRoutes from "./routes/pagos.routes.js"
import enviosRoutes from "./routes/envios.routes.js"
import provRoutes from "./routes/prov.routes.js"
import transporteRoutes from "./routes/transporte.routes.js"
import bancoRoutes from "./routes/banco.routes.js"
import tiendaOnlineRoutes from "./routes/tiendaOnline.routes.js"
import loginRoutes from "./routes/login.routes.js"
import productoRoutes from "./routes/producto.routes.js"
import carritoRoutes from "./routes/carrito.routes.js"


// Configuracion cors
import cors from 'cors';

import { con } from './config.js';

// Esto iba despues de terminado el cors
const app = express();

app.use(cors(
  con.application.cors.server
));
// Aquí termina

app.use(express.json())

app.use(pagosRoutes)
app.use(enviosRoutes)
app.use(provRoutes)
app.use(transporteRoutes)
app.use(bancoRoutes)
app.use(tiendaOnlineRoutes)
app.use(loginRoutes)
app.use(productoRoutes)
app.use(carritoRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint no encontrado"
    })
})

export default app