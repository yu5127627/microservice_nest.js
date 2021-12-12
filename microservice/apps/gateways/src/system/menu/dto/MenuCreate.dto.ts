import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MenuCreateDto {
  @ApiProperty({
    required: false,
    default: 1,
    description: '0:目录 1:菜单 2:外链',
  })
  readonly type: number;

  @ApiProperty({ required: true, default: 'icon', description: '图标' })
  @IsNotEmpty({ message: 'icon必填' })
  readonly icon: string;

  @ApiProperty({ required: false, default: 0, description: '菜单是否缓存' })
  readonly cache: boolean;

  @ApiProperty({ required: true, default: 0, description: '是否在菜单显示' })
  readonly hide: boolean;

  @ApiProperty({ required: true, default: '测试', description: '菜单名称' })
  @IsNotEmpty({ message: '菜单名称必填' })
  readonly title: string;

  @ApiProperty({ required: true, default: '/', description: '路由地址' })
  @IsNotEmpty({ message: '路由地址必填' })
  readonly url: string;

  @ApiProperty({ required: true, default: '测试', description: '组件名称' })
  @IsNotEmpty({ message: '组件名称必填' })
  readonly name: string;

  @ApiProperty({
    required: false,
    default: 'home:create',
    description: '操作规则',
  })
  readonly action: string;

  @ApiProperty({ required: true, default: 99, description: '排序' })
  readonly sort: number;

  @ApiProperty({
    required: true,
    default: '/temp/index.vue',
    description: '组件路径',
  })
  @IsNotEmpty({ message: '组件路径必填' })
  readonly path: string;

  @ApiProperty({ required: true, default: 0, description: '父菜单ID 0:无' })
  readonly pid: number;
}
