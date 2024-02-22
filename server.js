

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const express = require('express');
const app = express();

        app.get('/', (req, res) => {
            open({
                filename: "database.db",
                driver: sqlite3.Database
            })
                .then(async (db) => {
                    const rows = await db.all("SELECT * FROM my_table");
                    let ind = rows.length - 1;
                    console.log(rows, rows[ind]);

                    res.status(200).send({
                        element1: rows[ind].column1,
                        element2: rows[ind].column2,
                        element3: rows[ind].column3,
                        element4: rows[ind].column4
                    });

                    await db.close();
                })
                .catch(error => {
                    console.error('Error opening database:', error);
                    res.status(500).send({ error: 'Database error' });
                });
        });

        app.use(express.json());
        app.post('/', (req, res) => {
            const body = req.body;

            console.log(body);

            let elem1 = body.element1;
            let elem2 = body.element2;
            let elem3 = body.element3;
            let elem4 = body.element4;

            open({
                filename: "database.db",
                driver: sqlite3.Database
            })
                .then(async (db) => {
                    await db.run("INSERT INTO my_table(column1, column2, column3, column4) VALUES (?, ?, ?, ?)", [elem1, elem2, elem3, elem4]);
                });

            res.status(200).send({mess: "всё ок"});
        });

        app.listen(3333, () => {
            console.log('Application listening on port 3333!');
        });
