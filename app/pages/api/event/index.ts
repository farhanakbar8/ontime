import { prisma } from "../../../client/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { genericResponse, genericException } from "../../../helper/response";
import { errorHandler } from "../../../helper/errorHandler";
import { Event } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    switch (req.method) {
      case "POST": {
        const data = req.body;
        try {
            const event: Event = await prisma.event.create({data: {...data}});
            res.send(genericResponse<Event>(true, 201, event));
        } catch(error) {
            errorHandler(error,req,res);
        }
        break;
      }
      case "GET": {
        const uId = req.body.userId;
        const event: Array<Event>  =  await prisma.event.findMany({
            where: { userId: uId},
        });
        if (event){
            res.send(genericResponse<Array<Event>>(true, 200, event));
        }else{
            res
            .status(401)
            .json(genericException(false, 401, "Event is empty"));
        }
      }
    //   case "DELETE": {

    //   }
      default:
        res
          .status(404)
          .json(genericException<string>(false, 404, "Method not allowed"));
        break;
    }
  }