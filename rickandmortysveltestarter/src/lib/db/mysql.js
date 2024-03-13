
import mysql from "mysql2/promise";

let mysqlconn = null;

export function mysqlconnFn() {
    if (!mysqlconn) {
        mysqlconn = mysql.createConnection({
            host: "127.0.0.1",
            user: "dev",
            password: "Dev1234!",
            database: "rickandmortydb",
        });
    }

    return mysqlconn;
}


export async function getAllPlanets() {
    try {
        let mysqlconn = await mysqlconnFn();
        const [results] = await mysqlconn.query('SELECT * FROM planet ORDER BY id DESC');
        return results;
    } catch (error) {
        console.error('Got an error!!!');
        console.log(error);
        return error;
    }
}

export async function getPlanet(id) {
    try {
        let mysqlconn = await mysqlconnFn();
        const [results] = await mysqlconn.execute('SELECT * FROM planet WHERE id = ?', [id]);
        return results;
    } catch (error) {
        console.error('Got an error!!!');
        console.log(error);
        return error;
    }
}


export async function deletePlanet(id) {
    try {
        let mysqlconn = await mysqlconnFn();
        const [deleteResults] = await mysqlconn.execute('DELETE FROM planet WHERE id = ?', [id]);
        return deleteResults;
    } catch (error) {
        console.error('Got an error!!!');
        console.log(error);
        return error;
    }
}

export async function insertPlanet(planet) {
    try {
        let mysqlconn = await mysqlconnFn();
        const [insertResults] = await mysqlconn.execute('INSERT INTO planet ( name, imageLink) VALUES (?, ?);',
            [planet.name, planet.imageLink]);
        return insertResults;
    } catch (error) {
        console.error('Got an error!!!');
        console.log(error);
        return error;
    }
}


export async function updatePlanet(planet) {

    try {
        let mysqlconn = await mysqlconnFn();
        const [results] = await mysqlconn.execute('UPDATE planet SET name = ?,image = ?  WHERE planet.id = ?;',
            [planet.name,  planet.image, planet.id]);
        return results;
    } catch (error) {
        console.error('Got an error!!!');
        console.log(error);
        return error;
    }


}



