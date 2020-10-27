import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcrypt";
import { Task } from "src/tasks/entities/task.entity";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    // 微信

    @Column({
        nullable: true
    })
    openid: string;

    @Column({
        nullable: true
    })
    nickName: string;

    @Column({
        nullable: true
    })
    gender: number;
    @Column({
        nullable: true
    })
    language: string;
    @Column({
        nullable: true
    })
    city: string;
    @Column({
        nullable: true
    })
    province: string;
    @Column({
        nullable: true
    })
    country: string;
    @Column({
        nullable: true
    })
    avatarUrl: string;


    @OneToMany(type=> Task,task=> task.user, {eager: true})
    tasks: Task[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password,this.salt);
        return hash == this.password;
    }
}
