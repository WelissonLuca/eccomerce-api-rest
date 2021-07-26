import { getManager, EntityManager, getRepository, Repository } from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '@modules/orders/dtos/IUpdateOrderDTO';
import { IOrderRepository } from '@modules/orders/repositories/IOrderRepository';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

import { Order } from '../entities/Orders';

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order>;
  private manager: EntityManager;

  constructor() {
    this.repository = getRepository(Order);
    this.manager = getManager();
  }

  async create({
    order_date,
    note,
    payment_methods,
    client_id,
    product_id,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.repository.create({
      order_date,
      note,
      payment_methods,
      client_id,
      product_id,
    });

    const result = await this.repository.save(order);

    return result;
  }

  async findAll(): Promise<Order[]> {
    const result = await this.manager.query(`
    SELECT orders.id as order_id, orders.note as order_note, orders.payment_methods as order_payment_methods, orders.order_date , users.name client_name, users.cpf client_cpf, users.email as client_email, products.name as product_name,products.value as product_price  
      FROM
        orders
      LEFT JOIN users ON users.id = orders.client_id
      LEFT JOIN products ON products.id = orders.product_id
    `);

    return result;
  }

  async findById(id: string): Promise<Order> {
    const result = await this.manager.query(`
     SELECT orders.id as order_id, orders.note as order_note, orders.payment_methods as order_payment_methods, orders.order_date , users.name client_name, users.cpf client_cpf, users.email as client_email, products.name as product_name,products.value as product_price  
      FROM
        orders
      LEFT JOIN users ON users.id = orders.client_id
      LEFT JOIN products ON products.id = orders.product_id
      
      WHERE orders.id = '${id}'
    `);

    return result;
  }
  async updateOrder(
    id: string,
    { note, payment_methods }: IUpdateOrderDTO
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ note, payment_methods })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { OrderRepository };
