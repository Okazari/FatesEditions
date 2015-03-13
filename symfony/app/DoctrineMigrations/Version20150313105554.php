<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150313105554 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Book DROP FOREIGN KEY FK_6BD70C0FBF396750');
        $this->addSql('ALTER TABLE Book ADD author_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Book ADD CONSTRAINT FK_6BD70C0FF675F31B FOREIGN KEY (author_id) REFERENCES Player (id)');
        $this->addSql('CREATE INDEX IDX_6BD70C0FF675F31B ON Book (author_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE Book DROP FOREIGN KEY FK_6BD70C0FF675F31B');
        $this->addSql('DROP INDEX IDX_6BD70C0FF675F31B ON Book');
        $this->addSql('ALTER TABLE Book DROP author_id');
        $this->addSql('ALTER TABLE Book ADD CONSTRAINT FK_6BD70C0FBF396750 FOREIGN KEY (id) REFERENCES Player (id)');
    }
}
