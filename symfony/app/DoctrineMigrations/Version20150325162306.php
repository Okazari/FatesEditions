<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150325162306 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Book ADD starting_page_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Book ADD CONSTRAINT FK_6BD70C0FBB9AC389 FOREIGN KEY (starting_page_id) REFERENCES Page (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6BD70C0FBB9AC389 ON Book (starting_page_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Book DROP FOREIGN KEY FK_6BD70C0FBB9AC389');
        $this->addSql('DROP INDEX UNIQ_6BD70C0FBB9AC389 ON Book');
        $this->addSql('ALTER TABLE Book DROP starting_page_id');
    }
}
