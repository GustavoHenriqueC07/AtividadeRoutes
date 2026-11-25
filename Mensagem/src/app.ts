import express from "express";
import mensagemRoutes from "./routes/routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", mensagemRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
