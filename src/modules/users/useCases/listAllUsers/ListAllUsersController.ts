import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    try {
      const allUsers = this.listAllUsersUseCase.execute(user_id);
      return response.status(200).json(allUsers);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Usuario não autorizado ou não existe" });
    }
  }
}

export { ListAllUsersController };
