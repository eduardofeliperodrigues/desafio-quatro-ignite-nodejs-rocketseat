import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailInUse = this.usersRepository.findByEmail(email);

    if (!emailInUse) {
      const user = this.usersRepository.create({ name, email });
      return user;
    }

    throw new Error("Mensagem do erro");
  }
}

export { CreateUserUseCase };
