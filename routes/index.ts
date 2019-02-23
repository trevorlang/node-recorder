import { Request, Response } from "express";
import * as graphql from "express-graphql";

import { schema } from "./schema";
import { Recorder } from "../src";

export default graphql((req: Request, res: Response) => {
  const { mode } = req.query;

  new Recorder({ mode });

  return {
    graphiql: true,
    pretty: true,
    schema
  };
});
