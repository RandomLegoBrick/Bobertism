const bobertData=require("./bobertData.json");
const ejs=require("ejs");
const fs=require("fs");
const express=require("express");
const site=new express();
site.listen(3000,()=>{
    console.log("Bobert Forever");
});
site.use(express.static("./boberts"));
site.use(express.static("./static"));
site.use('/favicon.ico', express.static('./boberts/bobert.png'));
site.get("/",async (req,res)=>{
    ejs.renderFile('./ejsFiles/index.ejs', {boberts:fs.readdirSync("./boberts"),official:bobertData.official}, {}, function(err, str) {
		if (err) {
			res.send(err);
			console.log(err);
			return;
		}
		res.send(str);
	});
});