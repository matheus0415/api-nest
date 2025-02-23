// Contrato ( Interface, Abstract Classes)

export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
