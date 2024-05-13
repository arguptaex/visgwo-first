import sql from 'better-sqlite3'

const db = sql('visgwo.db');

export async function getProducts() {
    await new Promise((resolve)=>setTimeout(resolve, 6000));

    return db.prepare('SELECT * FROM Products').all()

}


