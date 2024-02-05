drop database if exists lojinha;
create database lojinha;
use lojinha;
create table clientes(
    id integer not null primary key auto_increment,
    cpf varchar(20) not null,
    nome  varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe clientes;

--DML - popular com dados de teste
insert into clientes(cpf, nome, sobrenome, nascimento) values
("111.111.111-11","john","I.", "1980-01-21"),
("222.222.222-22","jair","P.", "1940-01-12"),
("333.333.333-33","jana","Q.", "1990-01-15"),
("444.444.444-44","jeff","T.", "1999-01-02"),
("555.555.55-55","joe","E.", "1997-01-03");

select * from clientes;