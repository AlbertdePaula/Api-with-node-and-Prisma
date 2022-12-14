import "express-async-errors"
import { NextFunction, Response } from 'express';
import { Request } from 'express';
import express, { request } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppError";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response:Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(process.env.PORT || 3000);