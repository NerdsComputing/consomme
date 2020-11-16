import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pickup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  location_id: number;

  @Column({ type: 'timestamp' })
  publish_date: string;
}
