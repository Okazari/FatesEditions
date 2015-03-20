<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150320100947 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Transition DROP FOREIGN KEY FK_B848A48AC4663E4');
        $this->addSql('DROP INDEX IDX_B848A48AC4663E4 ON Transition');
        $this->addSql('ALTER TABLE Transition CHANGE page_id from_page INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Transition ADD CONSTRAINT FK_B848A48A619C6BC3 FOREIGN KEY (from_page) REFERENCES Page (id)');
        $this->addSql('CREATE INDEX IDX_B848A48A619C6BC3 ON Transition (from_page)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Transition DROP FOREIGN KEY FK_B848A48A619C6BC3');
        $this->addSql('DROP INDEX IDX_B848A48A619C6BC3 ON Transition');
        $this->addSql('ALTER TABLE Transition CHANGE from_page page_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Transition ADD CONSTRAINT FK_B848A48AC4663E4 FOREIGN KEY (page_id) REFERENCES Page (id)');
        $this->addSql('CREATE INDEX IDX_B848A48AC4663E4 ON Transition (page_id)');
    }
}
