import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;
    try {
      const user = this.showUserProfileUseCase.execute(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: "Usuario não encontrado" });
    }
  }
}

export { ShowUserProfileController };
