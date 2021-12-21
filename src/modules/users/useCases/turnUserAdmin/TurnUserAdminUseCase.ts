import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userIdExists = this.usersRepository.findById(user_id);

    if (userIdExists) {
      const user = this.usersRepository.turnAdmin(user_id);
      return user;
    }

    throw new Error("Mensagem do erro");
  }
}

export { TurnUserAdminUseCase };
