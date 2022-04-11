import { prisma } from "../../../client/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import { genericResponse, genericException } from "../../../helper/response";
import { errorHandler } from "../../../helper/errorHandler";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const user: User = await prisma.user.create({ data: { ...data } });
        res.send(genericResponse<User>(true, 201, user));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method not allowed"));
      break;
  }
}
