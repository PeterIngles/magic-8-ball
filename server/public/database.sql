-- SQL Database

CREATE TABLE "fortunes" (
	"id" serial primary key,
	"fortune" varchar(500) not null);
	
	
INSERT INTO "fortunes"("fortune") 
VALUES ('Outlook not so good'),
('It is certain'),
('Ask again later'),
('Cannot predict now'),
('Yes, definitely'),
('Dont count on it'),
('Reply hazy, try again'),
('My sources say no'),
('Signs point to yes'),
('Better not tell you now'),
('Concentrate and ask again'),
('My reply is no'),
('Yes, in due time'),
('Cannot disclose that'),
('Most likely'),
('Without a doubt'),
('Ask again after some time'),
('Outlook good'),
('You may rely on it'),
('Very doubtful');

SELECT * FROM "fortunes"
ORDER BY RANDOM()
LIMIT 1;