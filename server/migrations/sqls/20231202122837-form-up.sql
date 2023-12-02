/* Replace with your SQL commands */
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create TABLE form(
 id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
 salesname VARCHAR(255)  NOT NULL,
 salesphone numeric(30,0) NOT NULL,
 developer VARCHAR(250) NOT NULL,
 unit VARCHAR(250) NOT NULL,
 date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 devename VARCHAR(250) NOT NULL,
 deal VARCHAR(250) NOT NULL,
 img TEXT[] NOT NULL,
 code TEXT[] NOT NULL
 );