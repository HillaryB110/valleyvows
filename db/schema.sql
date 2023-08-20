-- Drop the old database and create a new one
DROP DATABASE IF EXISTS valleyvows_dev;
CREATE DATABASE valleyvows_dev;

-- Connect to the new database
\c valleyvows_dev;

-- Create the 'user_profile' table
CREATE TABLE user_profile (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthday TEXT NOT NULL,
    skill TEXT NOT NULL,
    bio_short TEXT NOT NULL,
    full_profile TEXT NOT NULL,
    best_gift TEXT
);

-- Create the 'dating_pool_users' table
CREATE TABLE dating_pool_users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    gender TEXT NOT NULL,
    birthday TEXT NOT NULL,
    family TEXT,
    bio_short TEXT NOT NULL,
    full_profile TEXT NOT NULL,
    gift_received BOOLEAN
);

-- Create the 'gifts' table
CREATE TABLE gifts (
    id SERIAL PRIMARY KEY,
    gift_name TEXT,
    gift_description TEXT,
    category TEXT
);

-- Create the 'gift_sent' table with proper references
CREATE TABLE gift_sent (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_profile(id),
    dating_pool_id INTEGER REFERENCES dating_pool_users(id),
    gift_id INTEGER REFERENCES gifts(id)
);

-- Create the 'users_gifts' table
CREATE TABLE users_gifts (
    id SERIAL PRIMARY KEY, 
    dating_pool_id INTEGER REFERENCES dating_pool_users(id),
    gift_id INTEGER REFERENCES gifts(id)
);
