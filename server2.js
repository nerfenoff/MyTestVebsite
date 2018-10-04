var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var app = express();

var arr = [
"https://vk.com/video_ext.php?oid=169064434&id=456239036&hash=2413fbb0f451e675",
"https://vk.com/video_ext.php?oid=169064434&id=456239031&hash=8dba17a7667d8b3d",
"https://vk.com/video_ext.php?oid=169064434&id=456239045&hash=3e2748bac8a568d6",
"https://www.youtube.com/embed/gtd1F_C97yE?ecver=1",
"https://www.youtube.com/embed/e5E84ePfEOw?ecver=1",
"https://www.youtube.com/embed/fB8TyLTD7EE?ecver=1",
"https://coub.com/embed/1b9ilb",
"https://coub.com/embed/169w09"

];

var ImgRes = [
"https://pp.vk.me/c836121/v836121807/21f30/bEe1duMMpUQ.jpg",
"https://pp.userapi.com/c638622/v638622065/2e030/DKhOf3eX2Iw.jpg",
"https://pp.vk.me/c638325/v638325901/1f68d/gfYn32brx5Y.jpg",
"https://pp.vk.me/c837728/v837728434/ed59/Q8ZqFQmBiDI.jpg",
"http://fb.ru/s2587G5k5/a5a9687osWX/ohM/zXOI?i812Il.rBWFbZK=lQ&5q-JfnT=xC2&uQ=hJ8Nav&5Ejew-7=hni7bxp&TO7H=p8HKON&Q6u=q78&Xy4y=7d9&J3NbLUK=m_javAM&kJDxW=mlVjHlY&-BNaB=LmMIuJ&0Jqi=Adk&CCPczL=WToPoY&tp=kB&Ed=IE_rl&f9S=tSkOu7&upFsysm=mjn&UBGq3j=dS0&nnOKK=u27n1g&WoVzWf=08dC&SItDL5W=CSoil&p2mCTu=w1&ogH4mLS=7Qe&KARmx7=vdXow&3N6=CAujD&HnL=FY2&n0J=ucs&4TM=d1_Rmp&hexeR1=-9&W3DhI0=sxl5c&az=HU5gq&lgVqQ=Y7M5bO&DOcpE=2AGRAN&TvuY5UG=7GxG&Ir4kl=_I&CN=evprF&pDdM=kjpc&vo=vk&4_oV1h=bnF56&3wB=8O7W&dAOxA=P7S&ma1a=iCejF&eTsG=pKRG&iQArE3=j9hMZ3l&yM1m5a=4O&dWc=u0&jVS=A-56yp&bxF=f1NLK&X2nx=4XJt6&e_Q=ffR-Gqg&L5ZR=aHjlhln&C3600I=yCKGET7&MxCAFM=8a79X&L8sLb=GLiTHw&mq=th8&VM6gM=sa&W_=FS7wyr&r81A=QWSW&cmXnE=lsf&o48u6=0c9&u69hf=7gm_vRe&BgK=ykW&2YDBAP=a8e&C31=eWCwu&lm5=gpwqCt&bch=NF&pH2K=EvHX&_I5pq=nxZXl&0r0xk=0yhGHJO&hKcJaOq=WqW0OoI&_X=MRz83q&qRRr=y8c&LFfGv=dNS&tC=48gpKK&G8uyk=GvgUC&OK_ABt=zF&f3OYGY7=1FEf5tLTtgId=QSx&hTjEXxi=6o&Wt_pj=nf0lgjP&6m=4aY4&2DTt=u64Hg&f7QSK66=ApB&fw=u7hb&0kwuss=sgW&f5=v7Cq&CmNNB=QUO8dkL&GI2Q=zo&okY=_Uoelp&1Hf=5Ae1dJE&FBGTu3m=_Pz4T&Ru26wV=S2KDeFj&KE_47=afZ&tB=zA7bR&GHv=rR9Arj&IXYUl5m=iHNg8ih&1Ib27=Ps&diJKu4=V3O_H&eTlax0K=g7R1i&TMcLF7f=hsFh&iyAwuZa=7O&c2Wh=m_pU&ymb=zR9EyX&DWGL21=zmB7&W5lPT=_YoV&iSZqzj=RVQGHr&1d3lQ=XY5H&8YC5=24S&Ig1Mzp1=yLLEX&5UzFoaq=vx&jRvo=d9&wE87oN=MEd&8Vu6x=ahssRC&ZlC=Jb&HvMMXo=JvJ&8B5ng=Arb5YQ&6gtzuh=yOSyxiX&ScP=A47S&9OA53=2OER-H&qa=AG&8b=Wy&X-B=dG&rD9=BlLPc&Oo_lZ=bVbWN_n&1B72A9D=HJ2ZG9&xtJb=6KV1&qlP_=TpeQYA&v6V=Lgx&MhD=mjkm953&pQg=5k5WBB&uyX=vm_U&bg6Ryz=VYynPN&LYSa9=VJdYIFR&fdMXZ=B29py7M&aTe6rHJ=3vQPCw3&o5Ao=-nb4Mt&CCRn5ZP=Wf&6Q=oEq&yfoBzA=jo&R50kkbp=8kUS&8V=J3&jiPl=85d&d0uP=SGD-K&UIRhp8=u3HU9&nIdBRos=D5uVVF&wa_k3KZ=LBQ6Rf-&Tx=VG&MFhiRj=rU&f4=Iq&yetBI=FILIGl&3fa=OAR&r5XVc=l97q&09F4=yhyBqG4&Gv=BpL&6yO=R3&iBFsjT=XhM&TrI=dFvz&YfM=0j8pP&hppT=0JjY&OsBcOI=m0vVU&hCK5z=F_4XLSC&bep2=X99d&rlKf=90wci&yiqzn=cYCK&0rUls=hhzD8&Fcs=HJGQ&cZcCFD=5O&06Hma=p4v&Laa=du&jjxjK9h=53s&aitUJWd=BV_gyG&jPZlT1=2od0_M&J2go=vr493Xk&En61iW=JE1-tBJ&MxK8=rGGxDT&Y4a8Gz=zXuyPj-&anKQH4b=ytW&NFRHJf0=NFT&hfN0p=j4Hqe&HRDun=py_DR8&GaSqE=fluHKKD&Vk=aENN&rpf=y81j6d&JvTMrA=HvGr&d5RhTML=vLGfEO&mLrEj6X=Qy&U9wR=Myl&3pF=6Sx-W&dIcrhcR=eQI&cw=if&gS7CXj=2IiVFEk&Rb=j-UQ9D&a2s=UYoi&NA9g4L=7fS&5U=NGIaWrj&DhmJtt2=XUgsd&MAeu=JO0iu&Ki=M9RQUa&rfnzSKF=0Kv7QO&4G4HmY=9_b50j3&NV-NAS_=kVmU&PD=0e&a_yt51=Cl&MxCGr=I0K0KC&hfM5SF=or-&IlDV=Xf03s&Yn_RE=hFtl&J2_A1FO=5W&iPt=5rGq&OAY1CdJ=MH3YT&kSg=Yhnki&kpD=XnLjvRg&uQsxj5=CXKeqT&g2=rPfh6&3yBJ_xH=n6MKyL5&1pOY6F=-ZdI&AcC=C5pR3Bb&RKm=hURRsTb&06=UM8N7&mjSbUw=Lzxr&-rn7=eJ&IsHo2=0hQLxvK&R44lg1=j8&Ii=bO1H3j&K1p8xw=QWS8UH7&hA=mEimqA&f8l=8WjYl&ye=YoI-dh&fNC=Csi2&2Z=HB&QyW8St=50uU&Mx6uiK=sV6ZGlQ&etP=HKfcJX&Xka=OA&Ep43cQ=H1&At=ndW2&jJpB4u=oCP9L&Jb-Oc=WWmAOL&HYDk=RhqB&Tth8=OPE&DIhsVQ=khwyg&aqVHee=uo&ULKbw=6TwzhN0&1TV=KJ-m_Hh&KV5=Z8deQWY&Tud=gS74&WyK=3on5vvT&nG7VQyE=p2DTbs4&CT59=0JPdUo&g8IZ=O1jCP2s&JJ=U6lUYtt&wKT=sVc_gWU&p9B=eb3-&Yd3H2B=Wc&ek=4sB-mgA&mqxfT4Y=d5&8RrFiq=utU&uYF=h0&tSPi=50l&yZ=Ix6N&q7=0Z64Oh&Xsx7FJf=FEmrSb&NkYhoP0=bX9R&g1Fu=2wV&XDLWvL=M1&ABKeZVH=G3PcPG&aQcVs7Z=gqBQ&3O=3Ten&9Ju=ui0dn5-&EEvOfi=UTO&YhCL3R5=G5Vv3E&q-u0=2JgQ&b5=8e8AjWD&m1tS=zfS&A2MhU=Zkqg&_MyGs7A=4ayWp&sbA=iRIx&qbtWpAe=GIqqhAT&9sb=FU&xUIO=qeIzW8l&Vwi=WPictdZ&FurWE=PTD2&gRq6Qv6=1UGi69e&UYME=38&J6=OxGci&1qjP=TIIR8G&T8=Fq-&Fg-B=qYobwK&OrSu5g=L4XOM2&jhT=tc3jrD&uV2V=inUI"
];

var users = [
	{
		username : "admin",
 		password : "admin",
 		email: "admin@mail.com"
	}
]

app.set("view engine","ejs");
app.use("/public",express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('Secret string'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//обработчики****************
app.use(function (req, res, next) {
	if(req.cookies.login == null)
	{
		var newUser = {username: null, password: null, email: null};
  		res.cookie('login', newUser);
	}
  next();
});

//***************************

app.get("/",function(req,res){  
	res.render("index");
});
app.get("/index",function(req,res){
	res.render("index");
});

app.get("/screenshot/:id",function(req,res){
	var pageCount = ImgRes.length / 3;
	if(req.params.id > pageCount)
		res.render("404");
	else
		res.render("screenshot",{array: ImgRes, begin: req.params.id, pageCount: pageCount});
});

app.get("/video",function(req,res){
	res.render("video",{array: arr});
});

app.get("/bla",function(req,res){
	res.render("bla");
});

app.get("/registration",function(req,res){
	res.render("registration");
});

app.get("/videosAdds",function(req,res){
	res.render("videosAdds");
});

app.post("/registrationNewUser",urlencodedParser,function(req,res){
	if (!req.body) return res.sendStatus(400);

  		

		var data = req.body;
		var errorString = '';
		var find = false;
		for(var i = 0; i < users.length; ++i)
		{
			if(users[i].username == data.username){
				errorString += '<p>Это имя пользователя уже занято</p>';
				find = true;
			}
			if(users[i].email == data.email){
				errorString += '<p>Это Email уже занят</p>'
				find = true;
			}
			if(find) break;
		}
		if(errorString == ''){
	  		var user = {username: req.body.username, password: req.body.password, email: req.body.email};
	  		res.cookie('login', user, { maxAge : 35000 });
	  		add(user);
	  		//res.writeHead(200, {'Content-Type':'http'}); 
	  		res.end("next");
  		}
  		else
  		{
  			res.writeHead(200, {'Content-Type':'text/plan'}); 
  			res.end(errorString);

  		}


  	
});

function add(user){
	var newUser = {username: user.username, password: user.password, email: user.email};
	users.push(newUser);
}

app.route("/login")
.get(function(req,res){
	res.render("login");
})
.post(urlencodedParser,function(req,res){
	if (!req.body) return res.sendStatus(400);
		var found = false;

		for(var i = 0; i < users.length; ++i)
		{
			if(users[i].username == req.body.username)
			{
				res.cookie('login', users[i], { maxAge : 35000 });
				found = true;
				break;
			}
		}
		if(found){
			console.log("sucsess");
			res.redirect("UserPage");

		}
		else{
			res.writeHead(200, {'Content-Type':'text/plan'}); 

			res.end("try again");
		}

	})

app.get("/getCurrentUser",function(req, res) {
		res.writeHead(200, {'Content-Type':'application/json'}); 
		var obj = JSON.stringify(req.cookies.login);
		res.end(obj); 
	})



app.post("/video",urlencodedParser,function(req,res){
	if (!req.body) return res.sendStatus(400);
	arr.push(req.body.link);
	res.render("videosAdds");
})

app.route('/UserPage')
	.get(function(req, res) {
		res.render("UserPage",{currentUser : req.cookies.login});
	})
	.post(function(req, res) {
		if (!req.body) return res.sendStatus(400);

	})
app.get('/exit',function(req,res){
	var user = {username: null, password: null, email: null};
	res.cookie('login', user, { maxAge : 35000 });

	res.redirect("index");
})


app.listen(3030);