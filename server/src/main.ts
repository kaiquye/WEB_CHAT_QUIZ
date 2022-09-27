import * as express from "express";
import * as cors from 'cors';

import ApplicationRoutes from "./shared/http/routes/application.routes";

try {
    const server = express();

    server.use(cors());
    server.use(express.json());

    server.use(ApplicationRoutes);

    server.listen(3031, () => console.log('Bomb Has Been Planted...'));
} catch (e) {
    console.log(e);
}