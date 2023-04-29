import { Application, Request, Response } from "express";

const data = {
  name: "Tony",
  age: 45,
  id: 321,
};

export const loadApiEndpoints = (app: Application): void => {
  app.get("/", (req: Request, res: Response) => {
    res.json(data);
  });
};
