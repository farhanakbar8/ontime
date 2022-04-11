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
      const { username, password } = req.body;
      try {
        const user: User = await prisma.user.findFirst({
          where: { username: username },
        });
        if (user.password) {
          const check = await bcrypt.compare(password, user.password);
          if (check) {
            res.send(genericResponse<User>(true, 200, user));
          } else {
            res
              .status(401)
              .json(genericException(false, 401, "Wrong password or username"));
          }
        } else {
          res
            .status(401)
            .json(genericException(false, 401, "User doesn't exist"));
        }
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
