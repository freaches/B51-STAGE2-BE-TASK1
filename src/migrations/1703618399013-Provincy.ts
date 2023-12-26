import { MigrationInterface, QueryRunner } from "typeorm";

export class Provincy1703618399013 implements MigrationInterface {
    name = 'Provincy1703618399013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "province" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "province"`);
    }

}
