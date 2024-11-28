/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Process } from './process.entity';
import { Environment } from '../../environments/entities/environment.entity';
import { Permission } from '../../permissions/entities/permission.entity';

@Entity('process_environment_permissions')
export class ProcessEnvironmentPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Process, (process) => process.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'process_id' })
  process: Process;

  @ManyToOne(() => Environment, (environment) => environment.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'environment_id' })
  environment: Environment;

  @ManyToOne(() => Permission, (permission) => permission.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;
}
