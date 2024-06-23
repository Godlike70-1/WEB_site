create database database_name 
use database_name
create table table_name (
    id int(6) primary key,
    age int(3),
    name varchar(20)
);

insert into table_name (id,age,name) values 
(230201,19,'Manzil Maharjan'),
(230202,19,'manzil ko gf');

delete from table_name where id=230201;
