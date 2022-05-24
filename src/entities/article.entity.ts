import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'articles' })
export class Article extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    title: string;

    @Column({ type: 'varchar', length: 300 })
    description: string;

    @Column({ type: 'boolean' })
    enabled: boolean;

    @Column({ type: 'varchar', length: 100 })
    image: string;
}