const fs= require("fs");
mydata =`
<html>
<body bgcolor="blue">
<h1>Hello MY name is Dhairya!!</h1>
<h2>BYE!</h2>
<p>llalallslsalal</p>

</body>
</html>`
fs.writeFile("delta.html", mydata, (err)=>{

    if(err) throw err 
    console.log("file save!!")
})