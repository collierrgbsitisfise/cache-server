import { Request, Response } from "express";

export const setDataByKey = async (req: Request, res: Response) => {
  try {
    const { key, data } = req.body;
    res.send(new Date());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDataByKey = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;
    res.send(key);
  } catch (err) {
    res.status(500).send(err);
  }
};
