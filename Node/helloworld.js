const express=require('express');
const app = express();
app.use('/index',(req,res)=>{
  res.send("hello world！");
}
);
app.listen(3000，（）=>{
  console.log('The server is running...');
})
