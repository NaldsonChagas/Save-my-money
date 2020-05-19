import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Purchase } from 'src/purchase/purchase.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  surname: string

  @Column()
  monthlyIncome: number

  @OneToMany(type => Purchase, purchase => purchase.user)
  purchases: Purchase[]
}
