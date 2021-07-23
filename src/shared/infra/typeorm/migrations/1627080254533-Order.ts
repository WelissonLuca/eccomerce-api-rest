import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Order1627080254533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'order_date',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'note',
            type: 'varchar',
          },
          {
            name: 'payment_methods',
            type: 'varchar',
          },
          {
            name: 'client_id',
            type: 'varchar',
          },
          {
            name: 'products_id',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FkClient',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FkProduct',
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            columnNames: ['products_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
