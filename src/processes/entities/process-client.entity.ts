/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Process } from './process.entity';
import { Client } from '../../clients/entities/client.entity';

@Entity('process_clients')
export class ProcessClient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Process, (process) => process.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'process_id' })
  process: Process;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
