<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150316163319 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE Genre (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE Book ADD genre_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Book ADD CONSTRAINT FK_6BD70C0F4296D31F FOREIGN KEY (genre_id) REFERENCES Genre (id)');
        $this->addSql('CREATE INDEX IDX_6BD70C0F4296D31F ON Book (genre_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Book DROP FOREIGN KEY FK_6BD70C0F4296D31F');
        $this->addSql('DROP TABLE Genre');
        $this->addSql('DROP INDEX IDX_6BD70C0F4296D31F ON Book');
        $this->addSql('ALTER TABLE Book DROP genre_id');
    }
}
