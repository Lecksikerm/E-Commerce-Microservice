import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@ecommerce/common';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
