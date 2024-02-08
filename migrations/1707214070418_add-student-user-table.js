/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE std_user(
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        number VARCHAR(10) NOT NULL,
        email VARCHAR(30) NOT NULL,
        pass varchar(255) NOT NULL
    );
`);
};

exports.down = pgm => {
    pg.sql(` 
    DROP TABLE users;`
    );
};
