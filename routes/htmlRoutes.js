// router.get("/", function(re, res){
//   res.sendFile(path.join(__dirname, ""))
// })
app.get('/hello', function (req, res) {
  res.send("Hello World!");
});