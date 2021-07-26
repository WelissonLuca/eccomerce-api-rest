interface ICreateOrderDTO {
  order_date: Date;
  note: string;
  payment_methods: string;
  client_id: string;
  product_id: string;
}

export { ICreateOrderDTO };
