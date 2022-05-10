const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    const blog = {
        id: 1,
        title: "Blog Title",
        desc : "Blog desc"
    }
    res.send(blog);
})

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalıştırılmaya başlandı...`)
})