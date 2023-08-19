DROP DATABASE IF EXISTS valleyvows_dev;

CREATE DATABASE valleyvows_dev;

\c valleyvows_dev;
--user is able to create dating profile

CREATE TABLE user_profile (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthday TEXT NOT NULL,
    skill TEXT NOT NULL,
    bio_short TEXT NOT NULL,
    full_profile TEXT NOT NULL,
    best_gift TEXT
)



--tracks if the user sent a gift and to who it was sent and which item it was 
CREATE TABLE gift_sent (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_profile(id),
    dating_pool_id INTEGER REFERENCES dating_pool(id)
    gift_id INTEGER REFERENCES gifts(id)
)

--user is able to see the total dating pool 

CREATE TABLE dating_pool_users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthday TEXT NOT NULL,
    family TEXT,
    bio_short TEXT NOT NULL,
    full_profile TEXT NOT NULL,
   gift_recieved BOOLEAN 

);

--table is to see all gifts items
CREATE TABLE gifts (
    id SERIAL PRIMARY KEY,
    gift_name TEXT
    gift_description TEXT
    category TEXT
   
);

CREATE TABLE users_gifts (
    id SERIAL PRIMARY KEY, 
     dating_pool_id INTEGER REFERENCES dating_pool(id),
     gift_id INTEGER REFERENCES gifts(id)
);
    