const app = require('./src/app.js');
 
const pool = require('./src/pool');
 
pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'students',
    user: 'postgres',
    password: 'root'
})
    .then(()=>{
        app().listen(3005,()=>{
            console.log('Server running on port 3000');
        });
    })
    .catch((err)=>
        console.log(err));