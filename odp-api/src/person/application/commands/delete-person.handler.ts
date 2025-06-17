import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePersonCommand } from './delete-person.command';
import { PersonRepositoryInterface } from '../../domain/repositories/person.repository.interface';
import { Inject, NotFoundException } from '@nestjs/common';

@CommandHandler(DeletePersonCommand)
export class DeletePersonHandler
  implements ICommandHandler<DeletePersonCommand>
{
  constructor(
    @Inject('PersonRepository')
    private readonly personRepository: PersonRepositoryInterface,
  ) {}

  async execute(command: DeletePersonCommand): Promise<void> {
    const { id } = command;

    // ตรวจสอบว่าผู้สมัครที่ต้องการลบมีอยู่ในระบบหรือไม่
    const person = await this.personRepository.findById(id);
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }

    // ลบผู้สมัคร
    await this.personRepository.delete(id);
  }
}
