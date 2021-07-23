import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

@Entity('orders')
class Order {
  @PrimaryColumn()
  readonly id: string;
  @ManyToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  user: User;
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @Column()
  order_date: Date;

  @Column()
  note: string;

  @Column()
  payment_methods: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id ?? uuid();
  }
}

export { Order };
