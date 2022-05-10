const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Welcome to the index page</h1>'
})

router.get('/index' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Welcome to the index page</h1>'
})

router.get('/about' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Welcome to the about page</h1>'
})

router.get('/contact' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Welcome to the contact page</h1>'
})


app.use(router.routes())

app.listen(port,() =>{
    console.log(`Server running on ${port} port`)
})