import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

 @Entity('users')
  class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ unique: true })
  user: string

  @Column()
  email: string

  @Column({ select: false })
  password_hash: string

  @Column({ default: true })
  is_active: Boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.is_active) {
      this.is_active = true
    }
  }
}

export { User }
