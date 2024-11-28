/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Permission } from './permission.entity';
import { PermissionsGroup } from './permissions-group.entity';

@Entity('group_permissions')
export class GroupPermission {
  @PrimaryColumn()
  groupId: number;

  @PrimaryColumn()
  permissionId: number;

  @ManyToOne(() => PermissionsGroup)
  @JoinColumn({ name: 'group_id' })
  group: PermissionsGroup;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;
}
