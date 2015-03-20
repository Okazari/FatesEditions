<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150320100807 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE Page (id INT AUTO_INCREMENT NOT NULL, book_id INT DEFAULT NULL, text LONGTEXT NOT NULL, image VARCHAR(255) NOT NULL, INDEX IDX_B438191E16A2B381 (book_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE Transition (id INT AUTO_INCREMENT NOT NULL, page_id INT DEFAULT NULL, toPage LONGTEXT NOT NULL COMMENT \'(DC2Type:object)\', text LONGTEXT NOT NULL, INDEX IDX_B848A48AC4663E4 (page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE Page ADD CONSTRAINT FK_B438191E16A2B381 FOREIGN KEY (book_id) REFERENCES Book (id)');
        $this->addSql('ALTER TABLE Transition ADD CONSTRAINT FK_B848A48AC4663E4 FOREIGN KEY (page_id) REFERENCES Page (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Transition DROP FOREIGN KEY FK_B848A48AC4663E4');
        $this->addSql('DROP TABLE Page');
        $this->addSql('DROP TABLE Transition');
    }
}
