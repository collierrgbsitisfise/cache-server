import { Request, Response } from "express";
import RedisClient from "./../services/redis.service";

const RedisC = new RedisClient("redis://127.0.0.1:6379");
RedisC.connect();

export const setDataByKey = async (req: Request, res: Response) => {
  try {
    const { key, data } = req.body;
    RedisC.setExpValue(key, data, 60 * 60);
    res.send("ok");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDataByKey = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;
    let data = await RedisC.getValue(key);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
