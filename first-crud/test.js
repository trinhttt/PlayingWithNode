//express simplifies the server creation process that is already available in Node
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

const data = {
    name: 'Trinhzzzzzz',
    quote: 'Screw it. Let do it.'
}
// Make sure: place .use(...) before your CRUD handlers!
//The urlencoded method within body-parser tells body-parser to extract [trích xuất] data from the <form> element 
//and add them to the body property in the request object.
app.use(express.urlencoded({
    extended: true
}));
// create a server that browsers can connect to
app.listen(3000, function () {
    console.log('listening on 3000')
})

/** GET request (READ operation)
* get(endpoint, callback)  
* endpoint: value that comes after your domain name
* domain: localhost:3000
* requested endpoint comes after localhost:3000 ('/')
* callback tells the server what to do when the requested endpoint matches the endpoint stated. 
* It takes two arguments: A request object and a response object.
*/

app.get('/', (req, res) => {
    //write Hello World back to the browser
    // res.send('Hello World')

    //__dirname is the current directory you're in. Try logging it and see what you get!
    res.sendFile(__dirname + '/index.html')
})

// app.post('/quotes', (req, res) => {
//     console.log(req.body)//{ name: 'Trinh Thai', quote: 'just do it' }
// })

// WAY1: Use callbacks
// MongoClient.connect('mongodb+srv://:@cluster0.q0zfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
// })

//Way 2: MongoDB supports promises, can use promises instead of callbacks
// First arg is mongodb-connection-string
MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.q0zfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //useUnifiedTopology: true:  remove the deprecation warning: 
    //"Current Server Discovery and Monitoring engine is deprecated"
    useUnifiedTopology: true
})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('my-quotes')

        // We use db.collection to specify the collection.
        const quotesCollection = db.collection('quotes')
        app.get('/list', (rep, res) => {
            console.log("cursor")
            quotesCollection.find().toArray()
                .then(results => {
                    console.log(results)
                    res.status(200).json(cursor).end();
                })
                .catch(error => console.log(error))
            // res.status(200).json(cursor).end();
        })

        /** CREATE
        * We need to create a collection before we can store items into a database.
        * In this case, let’s store quotes into a quotes collection.
        */
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    //*If you go back to the Browser, you’ll see it’s still trying to load something
                    //This happens because the browser expects something back from the server.
                    //we don’t need to send the browser information. Let’s ask the browser to redirect back to / instead
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })

        /** PUT
         * findOneAndUpdate: lets us find and change one item in the database. 
         * quotesCollection.findOneAndUpdate(
            query,
            update,
            options
            )
        .then(result => {/* ... })
        .catch(error => console.error(error))
        *"query": lets us filter the collection with key-value pairs. vd: { name: 'Yoda' }
        * "update": tells MongoDB what to change. It uses MongoDB’s update operators like $set, $inc and $push
        * "options": tells MongoDB to define additional options for this update request
        */
        app.put('/update/quote', (req, res) => {
            //use the $set operator since we’re changing quotes
            quotesCollection.findOneAndUpdate(
                { name: 'Trinhzzzzzz' },
                {
                    $set: {
                        name: data.name,
                        quote: data.quote
                    }
                },
                {
                    //FindOneAndReplaceOption
                    upsert: true
                })
                .then(result => {
                    //need to respond to the JavaScript that sent the PUT request
                    console.log(result)
                    res.json('Success')
                })
                .catch(error => console.error(error))
        })

        /** DELETE
         * MongoDB Collections has a method called deleteOne
         * It takes in two parameters: query and options.
         */
        app.delete('/delete/quote', (req, res) => {
            quotesCollection.deleteOne(
                { name: data.name }
            )
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json("Can't find this quote to delete")
                    }
                    res.json('Deleted Trinhzzzz quote')
                })
                .catch(error => console.error(error))
        })

    })
    .catch(error => console.log(error))



