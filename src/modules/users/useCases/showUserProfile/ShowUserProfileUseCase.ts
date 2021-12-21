import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userIdExists = this.usersRepository.findById(user_id);

    if (userIdExists) {
      const user = this.usersRepository.findById(user_id);
      return user;
    }

    throw new Error("Mensagem do erro");
  }
}

export { ShowUserProfileUseCase };
