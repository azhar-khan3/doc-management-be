import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() title: string;
  @Column() description: string;
  @Column() filePath: string;
  @Column() uploadedBy: string;
  @CreateDateColumn() createdAt: Date;
}
