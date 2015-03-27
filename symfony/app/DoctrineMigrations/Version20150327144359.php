<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150327144359 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE Game (id INT AUTO_INCREMENT NOT NULL, player_id INT DEFAULT NULL, page_id INT DEFAULT NULL, book_id INT DEFAULT NULL, INDEX IDX_83199EB299E6F5DF (player_id), INDEX IDX_83199EB2C4663E4 (page_id), INDEX IDX_83199EB216A2B381 (book_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE Game ADD CONSTRAINT FK_83199EB299E6F5DF FOREIGN KEY (player_id) REFERENCES Player (id)');
        $this->addSql('ALTER TABLE Game ADD CONSTRAINT FK_83199EB2C4663E4 FOREIGN KEY (page_id) REFERENCES Page (id)');
        $this->addSql('ALTER TABLE Game ADD CONSTRAINT FK_83199EB216A2B381 FOREIGN KEY (book_id) REFERENCES Book (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE Game');
    }
}
