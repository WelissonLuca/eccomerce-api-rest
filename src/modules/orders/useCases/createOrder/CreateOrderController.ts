import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { order_date, note, payment_methods, client_id, product_id } =
      request.body;

    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    const order = await createOrderUseCase.execute({
      order_date,
      note,
      payment_methods,
      client_id,
      product_id,
    });

    return response.status(201).json({
      message: 'order created successfully',
      result: order,
    });
  }
}

export { CreateOrderController };
