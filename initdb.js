const sql = require('better-sqlite3');
const db = sql('visgwo.db');
const dummyProducts = [
    {
        title: 'Beaker Set',
        slug: 'beaker-set',
        image: '/images/beaker-set.jpg',
        summary: 'A set of laboratory-grade beakers for various scientific experiments.',
        specifications: [
            { name: 'Material', value: 'Borosilicate Glass' },
            { name: 'Capacity', value: '50ml, 100ml, 250ml, 500ml, 1000ml' },
            { name: 'Quantity', value: '5 pieces/set' }
        ],
        price: 49.99,
        stock: 100
    },
    {
        title: 'Erlenmeyer Flask',
        slug: 'erlenmeyer-flask',
        image: '/images/erlenmeyer-flask.jpg',
        summary: 'A conical laboratory flask suitable for mixing, storing, and heating liquids.',
        specifications: [
            { name: 'Material', value: 'Borosilicate Glass' },
            { name: 'Capacity', value: '50ml, 100ml, 250ml, 500ml, 1000ml' }
        ],
        price: 29.99,
        stock: 150
    },
    {
        title: 'Bunsen Burner',
        slug: 'bunsen-burner',
        image: '/images/bunsen-burner.jpg',
        summary: 'A gas burner used in laboratories for heating, sterilization, and combustion.',
        specifications: [
            { name: 'Material', value: 'Brass, Steel' },
            { name: 'Gas Type', value: 'Natural Gas, Propane' }
        ],
        price: 39.99,
        stock: 50
    },
    {
        title: 'Microscope',
        slug: 'microscope',
        image: '/images/microscope.jpg',
        summary: 'A high-quality microscope for magnifying and observing small objects or organisms.',
        specifications: [
            { name: 'Magnification', value: '100x - 1000x' },
            { name: 'Light Source', value: 'LED' }
        ],
        price: 199.99,
        stock: 20
    },
    {
        title: 'Sodium Chloride (NaCl)',
        slug: 'sodium-chloride',
        image: '/images/sodium-chloride.jpg',
        summary: 'High-quality sodium chloride for use in chemical experiments and solutions.',
        specifications: [
            { name: 'Purity', value: '99.9%' },
            { name: 'Form', value: 'Powder' }
        ],
        price: 9.99,
        stock: 200
    },
    {
        title: 'Hydrochloric Acid (HCl)',
        slug: 'hydrochloric-acid',
        image: '/images/hydrochloric-acid.jpg',
        summary: 'Concentrated hydrochloric acid for use in chemical reactions and analysis.',
        specifications: [
            { name: 'Concentration', value: '37%' },
            { name: 'Form', value: 'Liquid' }
        ],
        price: 14.99,
        stock: 100
    },
    {
        title: 'Pipette Set',
        slug: 'pipette-set',
        image: '/images/pipette-set.jpg',
        summary: 'A set of laboratory pipettes for accurate measurement and transfer of liquids.',
        specifications: [
            { name: 'Material', value: 'Glass' },
            { name: 'Sizes', value: '1ml, 5ml, 10ml, 25ml, 50ml' }
        ],
        price: 19.99,
        stock: 75
    }
];


for (const product of dummyProducts) {
    // stmt.run(meal);
    console.log(product.title)
}


db.prepare(`
    CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        stock INT NOT NULL
    )
`).run();

// Create the ProductSpecifications table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS ProductSpecifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        productId INT NOT NULL,
        name TEXT NOT NULL,
        value TEXT NOT NULL,
        FOREIGN KEY (productId) REFERENCES Products (id) ON DELETE CASCADE
    )
`).run();

async function initData() {
    // Insert data into Products table
    const insertProduct = db.prepare(`

        INSERT INTO Products (title, slug, image, summary, price, stock)
        VALUES (@title, @slug, @image, @summary, @price, @stock)
    `);

    // Insert data into ProductSpecifications table
    const insertSpecification = db.prepare(`
        INSERT INTO ProductSpecifications (productId, name, value)
        VALUES (@productId, @name, @value)
    `);

    try {
        db.transaction(() => {
            for (const product of dummyProducts) {
                const { specifications, ...productData } = product;
                const { lastInsertRowid } = insertProduct.run(productData);

                if (specifications && specifications.length > 0) {
                    for (const spec of specifications) {
                        insertSpecification.run({ productId: lastInsertRowid, ...spec });
                    }
                }
            }
        })();
        console.log('Data inserted successfully.');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        db.close();
    }
}

initData();

// initData();

