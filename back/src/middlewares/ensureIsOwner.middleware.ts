import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactId: number = Number(req.params.id);
  const userId: number = res.locals.userId;

  const contact = await contactsRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  if (contact.user.id !== userId) {
    return res.status(403).json({
      message: "You don't have persimissions",
    });
  }

  next();
};

export { ensureIsOwnerMiddleware };
