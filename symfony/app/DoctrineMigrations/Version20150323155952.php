<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150323155952 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Transition CHANGE to_page to_page INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Transition ADD CONSTRAINT FK_B848A48AF3E4A7EF FOREIGN KEY (to_page) REFERENCES Page (id)');
        $this->addSql('CREATE INDEX IDX_B848A48AF3E4A7EF ON Transition (to_page)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Transition DROP FOREIGN KEY FK_B848A48AF3E4A7EF');
        $this->addSql('DROP INDEX IDX_B848A48AF3E4A7EF ON Transition');
        $this->addSql('ALTER TABLE Transition CHANGE to_page to_page INT NOT NULL');
    }
}
