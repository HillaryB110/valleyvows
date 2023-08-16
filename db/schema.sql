DROP DATABASE IF EXISTS valleyvows_dev;

CREATE DATABASE valleyvows_dev;

\c valleyvows_dev;


--user is able to see the total dating pool 

CREATE TABLE dating_pool (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthday TEXT NOT NULL,
    family TEXT,
    bio_short TEXT NOT NULL,
    full_profile TEXT NOT NULL,
    best_gift TEXT
);