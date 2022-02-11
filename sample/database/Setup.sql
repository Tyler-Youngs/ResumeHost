DROP TABLE IF EXISTS User;

CREATE TABLE IF NOT EXISTS User (
    id varchar(50) Primary Key,
    first_name varchar(50),
    last_name varchar(50),
    occupation varchar(50)
);

CREATE TABLE IF NOT EXISTS Experience (
    title varchar(50),
    content varchar(1000),
    user_id varchar(50),
    FOREIGN KEY(user_id) REFERENCES User(id)
);