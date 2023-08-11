
const express = require("express")
const router = express.Router()
const mariadb = require('mariadb')
const app = express()


const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 10
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

router.get("/", async(req, res)=>{
    let connectDatabase


    try{
        connectDatabase = await pool.getConnection();
        const table = await connectDatabase.query("SELECT t1.*, t2.*, t3.* FROM transport_database.customer AS t1 INNER JOIN transport_database.status AS t2 ON t1.CUSTOMERINDEX = t2.STATUSINDEX INNER JOIN transport_database.receiver AS t3 ON t1.CUSTOMERINDEX = t3.RECEIVERINDEX")
        
        
        res.render("admin", {
            table
        })
    }
    catch(e){
        console.log(e)
    }
})





module.exports = router
/*
index:              orderNumber,
senderNr:           rows[orderNumber].CUSTOMERINDEX,
senderName:         rows[orderNumber].CUSTOMERNAME,
senderPhone:        rows[orderNumber].CUSTOMERPHONE,
senderCountry:      rows[orderNumber].CUSTOMERCOUNTRY,
senderCity:         rows[orderNumber].CUSTOMERCITY,
senderStreet:       rows[orderNumber].CUSTOMERSTREET,
senderHouseNumber:  rows[orderNumber].CUSTOMERHOUSENUMBER,
senderPost:         rows[orderNumber].CUSTOMERPOST,
receiverNr:           rows[orderNumber].RECEIVERINDEX,
receiverName:         rows[orderNumber].RECEIVERNAME,
receiverPhone:        rows[orderNumber].RECEIVERPHONE,
receiverCountry:      rows[orderNumber].RECEIVERCOUNTRY,
receiverCity:         rows[orderNumber].RECEIVERCITY,
receiverStreet:       rows[orderNumber].RECEIVERSTREET,
receiverHouseNumber:  rows[orderNumber].RECEIVERHOUSENUMBER,
receiverPost:         rows[orderNumber].RECEIVERPOST,
orderStatus:            rows[orderNumber].STATUSTEXT,
*/