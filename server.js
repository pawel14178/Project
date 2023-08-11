const express = require("express")
const app = express()
const pool = require('./db');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs')


app.get("/", async(req,res) => {
    res.render("index")

})


app.post('/process', async (req, res) => {
    const {CUSTOMERNAME, CUSTOMERPHONE, CUSTOMERCOUNTRY, CUSTOMERCITY, CUSTOMERSTREET, CUSTOMERHOUSENUMBER, CUSTOMERPOST, RECEIVERNAME, RECEIVERPHONE, RECEIVERCOUNTRY, RECEIVERCITY, RECEIVERSTREET, RECEIVERHOUSENUMBER, RECEIVERPOST, STATUSTEXT} = req.body;
    try {
        const conn = await pool.getConnection();
        
        await conn.query('INSERT INTO customer (CUSTOMERNAME, CUSTOMERPHONE, CUSTOMERCOUNTRY, CUSTOMERCITY, CUSTOMERSTREET, CUSTOMERHOUSENUMBER, CUSTOMERPOST) VALUES (?, ?, ?, ?, ?, ?, ?)',
                                               [CUSTOMERNAME, CUSTOMERPHONE, CUSTOMERCOUNTRY, CUSTOMERCITY, CUSTOMERSTREET, CUSTOMERHOUSENUMBER, CUSTOMERPOST]);
        conn.release();
        await conn.query('INSERT INTO receiver (RECEIVERNAME, RECEIVERPHONE, RECEIVERCOUNTRY, RECEIVERCITY, RECEIVERSTREET, RECEIVERHOUSENUMBER, RECEIVERPOST) VALUES (?, ?, ?, ?, ?, ?, ?)',
                                               [RECEIVERNAME, RECEIVERPHONE, RECEIVERCOUNTRY, RECEIVERCITY, RECEIVERSTREET, RECEIVERHOUSENUMBER, RECEIVERPOST]);
        conn.release();
        await conn.query("INSERT INTO status (STATUSTEXT) VALUES (?)", [STATUSTEXT]);
        conn.release();


        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

const userRouter = require('./routes/admin')


app.use('/admin', userRouter)

app.listen(3000,()=>{
    console.log("Express server started 3000")
})



