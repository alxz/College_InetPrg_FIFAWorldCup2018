// =======================================
// by Alexey Zapromyotov 1811688
// Internet Programming I - Final Project
// =======================================
var clicked = false;
        function changeLogo(type){
            if(!clicked){
                document.getElementById("logoImg").src = "../Img/"+type+".png";
                if(type == 'zabivaka')
                clicked = true;
            }
        }

//<link rel="stylesheet" href="./CSS/loginstyle.css">
var mainStyle = document.getElementById("mainStyle").innerHTML;
mainStyle = mainStyle +' #AboveheaderDiv td {width: none;vertical-align: center;text-align: center; ';
mainStyle = mainStyle +' border: 0px; padding: 0px; margin: 0px;}';
mainStyle = mainStyle +' #headerDiv { padding: 0px; margin: 0px; width: none; float: none; } ';
mainStyle = mainStyle +' #headerDiv td {width: none;vertical-align: center;text-align: center; ';
mainStyle = mainStyle +' border: 0px; padding: 0px; margin: 0px;}';
mainStyle = mainStyle +' .menuColor {color: #FFFF00;}';
mainStyle = mainStyle +' a:link { font-weight: bold;}';
mainStyle = mainStyle +' a:hover { color: #FFD700; }';
mainStyle = mainStyle +' a:active { color: blue; }';
mainStyle = mainStyle +' a:link { text-decoration: none; } ';
mainStyle = mainStyle +' a:visited { text-decoration: none; } ';
mainStyle = mainStyle +' a:hover { text-decoration: underline; } ';
mainStyle = mainStyle +' a:active { text-decoration: underline; }';
mainStyle = mainStyle +' a.linkBtn:link { background-color: yellow; } ';
mainStyle = mainStyle +' a.linkBtn:visited { background-color: cyan; } ';
mainStyle = mainStyle +' a.linkBtn:hover { background-color: lightgreen; }';
mainStyle = mainStyle +' a.linkBtn:active { background-color: hotpink; }';
mainStyle = mainStyle +' a.linkBtn:link, a.linkBtn:visited { background-color: #f44336; color: white;';
mainStyle = mainStyle +' padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block; } ';
mainStyle = mainStyle +' a.linkBtn:hover, a.linkBtn:active { background-color: red; }';

mainStyle = mainStyle +'.topMenuTbl { background-color: #4682B4; width: 100%; border: 0px; margin: 1px; padding: 0px 15px; } ';
mainStyle = mainStyle +'#logoImg { width: 70px;} ';
mainStyle = mainStyle +'#headTitle { padding: 0px; margin: 0px;color: #FFFFE0; } ';
mainStyle = mainStyle +'.headerText { color: #FFFFF0; } ';
mainStyle = mainStyle +'#headerDiv { position: -webkit-sticky; /* Safari */  position: sticky; top: 0; } ';
mainStyle = mainStyle +'.bkgrndPage { padding: 0px; margin: 5px;  } ';
mainStyle = mainStyle +' span.login { color: #FFFFF0; } ';
mainStyle = mainStyle +' #currentUser { color: #FFFFF0; } ';
document.getElementById("mainStyle").innerHTML = mainStyle;

var divX = document.getElementById("headerDiv").innerHTML;
var loggedUserFlag = sessionStorage.getItem("loggedUser");

//alert("Main Procedure and User Logged Flag check: "+loggedUserFlag);
//DrawTopMenuLogIn(loggedUserFlag);

if ((loggedUserFlag == "1") || (loggedUserFlag == 1))
{ //logged-in user =========== show log-off btton, but hide log-in button!
	var divAbove = document.getElementById("AboveheaderDiv").innerHTML;
			divAbove='<form name="form1">';
			divAbove=divAbove+'<table class="topMenuTbl"><tr><td align="center" rowspan=2>';
			divAbove=divAbove+'<img  id="logoImg" src="../Img/2018_FIFA_WorldCup.png" alt="logo"';
			divAbove=divAbove+' onmousemove="changeLogo(\'2018_FIFA_WorldCupLight\')" onmouseout="changeLogo(\'2018_FIFA_WorldCup\')"';
			divAbove=divAbove+' onclick="changeLogo(\'zabivaka\')"> </td><td align="center" rowspan=2> <h1 id="headTitle">';
			divAbove=divAbove+'<span style="color:#FFD700">2018</span> FIFA World Cup <span style="color:#FFD700">';
			divAbove=divAbove+' RUSSIA </span></h1> </td>';
			divAbove=divAbove+' <td style="text-align: left;" rowspan=2>';
			divAbove=divAbove+' <input type="button" id="logout" onClick="authenticate_logout()" value="Logout" /><br /></td></tr>';
			divAbove=divAbove+' <tr><td id="currentUser"></td></tr></table>';
			divAbove=divAbove+' </form>';
			document.getElementById("AboveheaderDiv").innerHTML=divAbove;	
	
	divX=divX+'<table style="width: 100%; text-align: center; background-color:  #f44336; padding: 0px 10px 0px 10px; ">';
	divX=divX+'<tr><td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Home</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/PageLocations.htm" target="_self">Venue(s)</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/PageTeamsAll.htm" target="_self">Groups Table</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/PageGroups.htm" target="_self">Matches</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/PageSouvenirs.htm" target="_self">Souvenirs</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/PageFIFAWorldCups.htm" target="_self">FIFA World Cup</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="https://en.wikipedia.org/wiki/2018_FIFA_World_Cup" target="_blank">FIFA2018 Wiki</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="http://google.ca" target="_blank">Google</a> </td>';
	//divX=divX+'<td> Logged User: '+loggedUserFlag+' </td>';
	divX=divX+'<td> <td> <a class="linkBtn" href="../Pages/PageCheckOut.htm" target="_self">Shopping Cart</a></td></tr></table>';
	document.getElementById("headerDiv").innerHTML=divX;
	
	currentUser = sessionStorage.getItem('userName');
	document.getElementById("currentUser").innerHTML= 'Current User: <br />&nbsp;&nbsp;&nbsp;'+currentUser;

}
else //((loggedUserFlag == "0") || (loggedUserFlag == null))
{ //logged-off user =========== show log-on btton, but hide log-off button!
	var divAbove = document.getElementById("AboveheaderDiv").innerHTML;
	divAbove='<form name="form1">';
	divAbove=divAbove+'<table class="topMenuTbl"><tr><td align="center" rowspan=2>';
	divAbove=divAbove+'<img  id="logoImg" src="../Img/2018_FIFA_WorldCup.png" alt="logo"';
	divAbove=divAbove+' onmousemove="changeLogo(\'2018_FIFA_WorldCupLight\')" onmouseout="changeLogo(\'2018_FIFA_WorldCup\')"';
	divAbove=divAbove+' onclick="changeLogo(\'zabivaka\')"> </td><td align="center" rowspan=2> <h1 id="headTitle">';
	divAbove=divAbove+'<span style="color:#FFD700">2018</span> FIFA World Cup <span style="color:#FFD700">';
	divAbove=divAbove+' RUSSIA </span></h1> </td>';
	divAbove=divAbove+' <td style="text-align: left;" rowspan=2><span class="login">User :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	divAbove=divAbove+' <input type="text" name="firstname" id="user"/>&nbsp;&nbsp;</span>';
	divAbove=divAbove+' <input type="button" class="login" onClick="authenticate_login()" value="Login " />';
	divAbove=divAbove+' <br /> <span class="login">Password:<input type="password" name="pwd" id="pwd"/>&nbsp;&nbsp;</span>';
	divAbove=divAbove+' <br /></td></tr>';
	divAbove=divAbove+' <tr><td id="currentUser"></td></tr></table>';
	divAbove=divAbove+' </form>';
	document.getElementById("AboveheaderDiv").innerHTML=divAbove;

	divX=divX+'<table style="width: 100%; text-align: center; background-color:  #f44336; padding: 0px 10px 0px 10px; ">';
	divX=divX+'<tr><td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Home</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Venue(s)</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Groups Table</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Matches</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Souvenirs</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">FIFA World Cup</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="https://en.wikipedia.org/wiki/2018_FIFA_World_Cup" target="_blank">FIFA2018 Wiki</a></td>';
	divX=divX+'<td> <a class="linkBtn" href="http://google.ca" target="_blank">Google</a> </td>';
	//divX=divX+'<td> Logged User: '+loggedUserFlag+'  </td>';
	divX=divX+'<td> <td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Shopping Cart</a></td></tr></table>';
	document.getElementById("headerDiv").innerHTML=divX;
 }



function myFind() {
	var x = document.getElementById("mySearch").value;
	var arrItems=['Russia','Argentina','Brazil','France','Panama','S.Arabia',
		'Portugal','Spain','Egypt','Uruguay','Moroco','Belgium','Poland',
		'Croatia','Switzld','Germany','Mexico','Sweden','England','Colombia',
		'Serbia','Korea','Japan','C.Rica','Peru','Nigeria','Iceland','Iran',
		'Senegal','Tunisia']
	for (var i = 0, lenI = arrItems.length; i < lenI; i++) 
	{
		//alert('Team name:' + x );
		var strSearch =  x.toUpperCase();
		var item = arrItems[i].toUpperCase();
		if ( item.indexOf(strSearch) > -1) //find a part of search string
		{
			document.getElementById("searchRes").innerHTML = document.getElementById(arrItems[i]).innerHTML;
		}
	}
}

function addToBasket(id,name,price)
{
	var totalBefore = document.getElementById("totalSumDiv").innerHTML;
		if (totalBefore =="") {
			totalBefore = 0;
		}

	var isBasketExists = getCookie('basket');
	var qty = document.getElementById('goodsQty_'+id).value;
	var itemFoundInCart = false;
  if (qty == "0") { return; }
	if (qty != "" && qty != null) {
		    if (isBasketExists != "") {
		        var arrItems;
		        var strToShow = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 var arrFields = arrItems[i].split('|');

		 			 	if ( arrFields[0] == id) {
		 			 		
		 			 		arrFields[2] = parseInt(arrFields[2]) + parseInt(qty);
		 			 		arrFields[4] = (parseInt(arrFields[3]) * parseInt(arrFields[2])).toFixed(2);
		 			 		itemFoundInCart = true;
		 			 		//alert('Id found: [0]= '+arrFields[0]+' arrFields[1]= '+arrFields[1]+' arrFields[2]= '+arrFields[2]+' price[3]: '+arrFields[3]);
		 			 	}
		 			 if (strToShow != "" && strToShow != null) {
		 			 	strToShow = strToShow + '::' + arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 }else {
		 			 	strToShow = arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 }
				}
		        if ( itemFoundInCart == false) {
		        	setCookie("basket", isBasketExists+'::'+id+'|'+name+'|'+qty+'|'+(parseFloat(price)).toFixed(2)+'|'+(parseFloat(price)*parseInt(qty)).toFixed(2), 30);
		        }
		        else {
		        	setCookie("basket", strToShow, 30);
		        }
		        isBasketExists = getCookie('basket');
		        // ===== Now showing the basket-cart
		        strToShow = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 arrFields = arrItems[i].split('|');
		 			 for (var j = 0, lenJ = arrFields.length; j < lenJ; j++) {
		 			 		strToShow = strToShow + arrFields[j] + '\t\t' ;
		 			 }
		 			 strToShow = strToShow + '\n';
				}
		    }else {
		        setCookie("basket", id+'|'+name+'|'+qty+'|'+(parseFloat(price)).toFixed(2)+'|'+(parseFloat(price)*parseInt(qty)).toFixed(2), 30);
		        isBasketExists = getCookie('basket');
			}

			//Now we are going to build table with results:
				var arrItems;
		        var strToShow = "";
		        arrItems = isBasketExists.split('::');
		    var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td></tr>';
		    for (var i = 0, lenI = arrItems.length; i < lenI; i++) {
		 		var arrFields = arrItems[i].split('|');
				tblContent = tblContent + '<tr><td>' + arrFields[0] + '</td><td>'+ arrFields[1] + '</td><td>'
				tblContent = tblContent + arrFields[2] + '</td><td>'+ arrFields[3] + '</td><td>'+ arrFields[4]+ '</td></tr>';
		 	}
		document.getElementById("basketTbl").innerHTML = tblContent;

		var totalAfter = parseFloat(totalBefore) + (parseFloat(price) * parseInt(qty));
		document.getElementById("showTotalTop").innerHTML = totalAfter.toFixed(2);

    //set the quantity back to none or 0:
    document.getElementById('goodsQty_'+id).value = "";
			return;
	}
}

function funcRemoveItem(itemID)
{
	//to remove an item from the list
	var isBasketExists = getCookie('basket');
	var id = itemID;
	var itemFoundInCart = false;
	//alert("Item is: " + itemID);

		    if (isBasketExists != "") {
		        var arrItems;
		        var strToShow = "";
		        var strToShowMsg = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 var arrFields = arrItems[i].split('|');
							//alert("Cookie found! " + arrFields[0]);
		 			 	if ( arrFields[0] == id) {
		 			 		//alert("Item to remove! " + arrFields[0]);
		 			 		//arrItems.splice(i,1); //to remove [i] elementh
		 			 		itemFoundInCart = true;
		 			 	}else{
		 			 		if (strToShow != "" && strToShow != null) {
		 			 		strToShow = strToShow + '::' + arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 		strToShowMsg = strToShowMsg + '\n\n' + arrFields[0] +'|\t'+ arrFields[1]+'|\t'+ arrFields[2]+'|\t'+ arrFields[3]+'|\t'+ arrFields[4];
		 			 		}else {
		 			 			strToShow = arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 			strToShowMsg = arrFields[0] +'|\t'+ arrFields[1]+'|\t'+ arrFields[2]+'|\t'+ arrFields[3]+'|\t'+ arrFields[4];
		 					} 
		 			 	}
				}

				//alert("Items Found in The Cart: " + '\n\n' + strToShowMsg);
		        //alert("StrToShow: " + strToShow);
		       setCookie("basket", strToShow, 30);
		       isBasketExists = getCookie("basket");
		       showShoppingCart();
			}
	return;
}

function showShoppingCart ()
{
	//Now we are going to build table with shopping cart content:
	var arrItems;
	var totalAmount = 0;
	var strToShow = "";
	var isBasketExists = getCookie('basket');
	var imgStr1 = '<img src="../Img/item-';
	var imgStr2 = '.jpg" class="goodsPreview" />';

	if (isBasketExists != "") {
			arrItems = isBasketExists.split('::');
			
			var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td><td> MODIFY </td></tr>';
			
			for (var i = 0, lenI = arrItems.length; i < lenI; i++) {
				var arrFields = arrItems[i].split('|');
				tblContent = tblContent + '<tr><td>' + imgStr1+arrFields[0]+imgStr2 + '</td><td>'+ arrFields[1] + '</td><td>';
				tblContent = tblContent + arrFields[2] + '</td><td>'+ arrFields[3] + '</td><td>'+ arrFields[4]+ '</td>';
				totalAmount = parseFloat(parseFloat(totalAmount) + parseFloat(arrFields[4])).toFixed(2);
				tblContent = tblContent + '<td><input type="button" name="Remove" value="Remove" onclick="funcRemoveItem (';
				tblContent = tblContent + arrFields[0].trim()+');"></td></tr>';
			}
			tblContent = tblContent +'<tr><td colspan="4">Total: </td><td>'+totalAmount+'</td><td> &nbsp; </td></tr>';				
	}
	else {
		var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td><td> MODIFY </td></tr>';
		tblContent = tblContent + '<tr><td> 0 </td><td> &nbsp; </td><td> 0 </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td></tr>';
	}
	document.getElementById("basketTbl").innerHTML = tblContent;
	return;
}


function checkUser (userName)
{
	getCookie(userName);
	return ;
}

function funcReset ()
{
	//to remove a cookie for basket
	alert("All content of the Shopping Cart will be removed now!!!");
	deleteCookie('basket');
	return;
}

function cartShowHide(objToShowHide)
{
	var objX = document.getElementById(objToShowHide);
	if (objX.style.display === "none") {
    objX.style.display = "table";
  	} else {
    objX.style.display = "none";
  	}
}

function tablesShowHide(objToShowHide)
{
	var listGames = ['GroupPhase','KnochoutPhase','QuaterPhase','SemiFinalPhase','FinalPhase'];
	var objX = document.getElementById(objToShowHide);
	for (var i = 0, lenI = listGames.length; i < lenI; i++) 
	{
		var objY = document.getElementById(listGames[i]);
		if (listGames[i] == objToShowHide)
			{
			    objX.style.display = "table";
		}else 
		  		{  objY.style.display = "none"; }
	}
}

// ============================Cookies time! ============================
function showCookie()
	{ alert("Cookie(s) :"+document.cookie); }

function setCookie(cname, cvalue, exdays){
	

    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    // It used to be:
    // document.cookie = cname + "=" + cvalue + "; " + expires
    // I've added path=/ to try to make it work in Chrome... Didnt help
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";

 //    // Browsers that support the __Host cookie prefix will reject this due to the
	// // missing Secure and Path=/ attributes.
	// document.cookie = '__Host-invalid-without-secure-or-path=1';
	// // Browsers that support the __Host cookie prefix will reject this due to the
	// // missing Path=/ attribute, even though Secure was added.
	// document.cookie = '__Host-invalid-without-path=1; Secure';
	// // All browsers, including those that support the __Host cookie prefix,
	// // will accept this since both the Secure and Path=/ attributes are present.
	// document.cookie = '__Host-valid-with-secure-and-path=1; Secure; Path=/';
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


function deleteCookie(cookieName) {
    var user = getCookie(cookieName);
    if (user == "") {
        alert("Cookie "+cookieName+" doesn’t exist ");
    } else {
        if (user != "" && user != null) {
            setCookie(cookieName, user, -10);
        }
	}
}

// ==================== LOGIN - LOGOUT =======================



function authenticate_login()
{
  // creating 2 parrallel arrays to keep user accounts and passwords:
	var login_username=['admin','teacher','test'];
	var login_password=['12345','teacher','123'];

  var v1, v2;
  v1 = document.getElementById("user").value;
  //v1 = document.form1.firstname.value;
  v2 = document.getElementById("pwd").value;
  var userSession = sessionStorage.getItem("loggedUser");
  var userFound = false;
  //alert('Current user session flag is: '+userSession);

  for (var i = 0, lenI = login_username.length; i < lenI; i++) {

		if ((v1 == login_username[i]) &&
		   (v2 ==  login_password[i]))
		{
		  alert('Welcome to our website, ' + v1);
		  userFound = true;
		  headerDivOnOff("ON");
		  //to setup logged-in flag:
		  sessionStorage.setItem("loggedUser", "1");
		  userSession = sessionStorage.getItem("loggedUser");
	 		//alert('Changed user session flag is: '+userSession);
	 		sessionStorage.setItem('userName', v1);
	 		loggedInUser = sessionStorage.getItem("userName");
	 		//alert('Current User Saved in sessionStorage is: '+loggedInUser);
		  $(document).ready(function(){
			  $(".login").hide();
			  $("#logout").show();
	      });
	      return;
		}
	}

	if (!userFound)
	{
	  alert('Invalid User or Password Login');
	  headerDivOnOff("OFF");

	  $(document).ready(function(){
		  $(".login").show();
		  $("#logout").hide();
         });

	  document.getElementById("pwd").value="";
	  document.getElementById("pwd").focus();
	  var newUserPageHTML = "";
		 newUserPageHTML = '<div style="width:90%; margin-right: auto; margin-left: auto;"><h2 style=" text-align: center;">Create New User Account?</h2>';
		 newUserPageHTML = newUserPageHTML + '<form action="action_page.php">';
		 newUserPageHTML = newUserPageHTML + '<div class="imgcontainer">'; 
		 //newUserPageHTML = newUserPageHTML + '   <img src="../Img/rus2018_mascot_wcup.jpg" alt="Avatar" class="avatar">';
		 newUserPageHTML = newUserPageHTML + ' </div> <div class="container"> <label for="uname"><b>Username</b></label>';
		 newUserPageHTML = newUserPageHTML + '  <input type="text" placeholder="Enter Username" name="uname" required>';
		 newUserPageHTML = newUserPageHTML + '<label for="psw"><b>Password</b></label>';
		 newUserPageHTML = newUserPageHTML + ' <input type="password" placeholder="Enter Password" name="psw" required>';
		 newUserPageHTML = newUserPageHTML + '<button type="submit">Login</button> <label>';
		 newUserPageHTML = newUserPageHTML + ' <input type="checkbox" checked="checked" name="remember"> Remember me </label></div>';
		 newUserPageHTML = newUserPageHTML + ' <div class="container" style="background-color:#f1f1f1; padding: 10px;">';
		 newUserPageHTML = newUserPageHTML + ' <button type="button" class="cancelbtn" onClick="location.href=\'../Pages/Content.htm\';">Cancel</button> ';
		 newUserPageHTML = newUserPageHTML + ' <span class="psw">Forgot <a href="#">password?</a></span></div></form></div>';
		 //onclick="location.href='http://google.com';"
	  document.getElementById("centerDiv").innerHTML=newUserPageHTML;
	  
	}
}


function authenticate_logout()
{
  alert('Thank you and good bye!');

  //to clean-up logged-in flag:
  sessionStorage.setItem("loggedUser", "0");
  
  loggedUserFlag = sessionStorage.getItem("loggedUser");
  sessionStorage.removeItem('userName');
  //alert('LOG-OUT! \n Changed user session flag is: '+loggedUserFlag);

  location.reload(true);
  
  //alert('Step 2 to logout');

	  headerDivOnOff("OFF");

	  $(document).ready(function(){
		  $(".login").show();
		  $("#logout").hide();
         });

  //alert('Step 3 to logout');

  document.getElementById("user").value="";
  document.getElementById("pwd").value="";
  document.getElementById("user").focus();

 		 headerDivOnOff("OFF");
 		 //alert('Step 4 to logout');
 		 //window.location.href = "../Pages/Content.htm"; location.reload(true);
}

function headerDivOnOff (stateNow)
{
	var divX = "";
	  var v1, v2;
	  v1 = document.getElementById("user").value;
	  v2 = document.getElementById("pwd").value;
	  //alert('stateNow = '+stateNow);
	  loggedUserFlag = sessionStorage.getItem("loggedUser");
	  
	if (stateNow == 'ON')
	{
		var divAbove = document.getElementById("AboveheaderDiv").innerHTML;
			divAbove='<form name="form1">';
			divAbove=divAbove+'<table class="topMenuTbl"><tr><td align="center" rowspan=2>';
			divAbove=divAbove+'<img  id="logoImg" src="../Img/2018_FIFA_WorldCup.png" alt="logo"';
			divAbove=divAbove+' onmousemove="changeLogo(\'2018_FIFA_WorldCupLight\')" onmouseout="changeLogo(\'2018_FIFA_WorldCup\')"';
			divAbove=divAbove+' onclick="changeLogo(\'zabivaka\')"> </td><td align="center" rowspan=2> <h1 id="headTitle">';
			divAbove=divAbove+'<span style="color:#FFD700">2018</span> FIFA World Cup <span style="color:#FFD700">';
			divAbove=divAbove+' RUSSIA </span></h1> </td>';
			divAbove=divAbove+' <td style="text-align: left;" rowspan=2>';
			divAbove=divAbove+' <input type="button" id="logout" onClick="authenticate_logout()" value="Logout" /><br /></td></tr>';
			divAbove=divAbove+' <tr><td id="currentUser"></td></tr></table>';
			divAbove=divAbove+' </form>';
			document.getElementById("AboveheaderDiv").innerHTML=divAbove;

		divX=divX+'<table style="width: 100%; text-align: center; background-color:  #f44336; padding: 0px 10px 0px 10px; ">';
		divX=divX+'<tr><td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Home</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="../Pages/PageLocations.htm" target="_self">Venue(s)</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="../Pages/PageTeamsAll.htm" target="_self">Groups Table</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="../Pages/PageGroups.htm" target="_self">Matches</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="../Pages/PageSouvenirs.htm" target="_self">Souvenirs</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="../Pages/PageFIFAWorldCups.htm" target="_self">FIFA World Cup</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="https://en.wikipedia.org/wiki/2018_FIFA_World_Cup" target="_blank">FIFA2018 Wiki</a></td>';
		divX=divX+'<td> <a class="linkBtn" href="http://google.ca" target="_blank">Google</a> </td>';
		//divX=divX+'<td> Logged User: '+loggedUserFlag+'  </td>';
		divX=divX+'<td> <td> <a class="linkBtn" href="../Pages/PageCheckOut.htm" target="_self">Shopping Cart for ';
		divX=divX+'</a></td></tr></table>';
		document.getElementById("headerDiv").innerHTML=divX;

		document.getElementById("currentUser").innerHTML= 'Current User: <br />&nbsp;&nbsp;&nbsp;'+v1;
		
		
	}
	if (stateNow == 'OFF') 
	{	
			var divAbove = document.getElementById("AboveheaderDiv").innerHTML;
			
			divAbove='<form name="form1">';
			
			divAbove=divAbove+'<table class="topMenuTbl"><tr><td align="center" rowspan=2>';
			divAbove=divAbove+'<img  id="logoImg" src="../Img/2018_FIFA_WorldCup.png" alt="logo"';
			divAbove=divAbove+' onmousemove="changeLogo(\'2018_FIFA_WorldCupLight\')" onmouseout="changeLogo(\'2018_FIFA_WorldCup\')"';
			divAbove=divAbove+' onclick="changeLogo(\'zabivaka\')" /> </td><td align="center" rowspan=2> <h1 id="headTitle">';
			divAbove=divAbove+'<span style="color:#FFD700">2018</span> FIFA World Cup <span style="color:#FFD700">';
			divAbove=divAbove+' RUSSIA </span></h1> </td>';
			divAbove=divAbove+' <td style="text-align: left;" rowspan=2><span class="login">User :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
			divAbove=divAbove+' <input type="text" name="firstname" id="user"/>&nbsp;&nbsp;</span>';
			divAbove=divAbove+' <input type="button" class="login" onClick="authenticate_login()" value="Login " />';
			divAbove=divAbove+' <br /> <span class="login">Password:<input type="password" name="pwd" id="pwd"/>&nbsp;&nbsp;</span>';
			divAbove=divAbove+' <br /></td></tr>';
			divAbove=divAbove+' <tr><td id="currentUser"></td></tr></table>';
			divAbove=divAbove+' </form>';

			document.getElementById("AboveheaderDiv").innerHTML=divAbove;
			//alert("divAbove is: \n"+divAbove);
			
			divX=divX+'<table style="width: 100%; text-align: center; background-color:  #f44336; padding: 0px 10px 0px 10px; ">';
			divX=divX+'<tr><td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Home</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Venue(s)</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Groups Table</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Matches</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Souvenirs</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">FIFA World Cup</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="https://en.wikipedia.org/wiki/2018_FIFA_World_Cup" target="_blank">FIFA2018 Wiki</a></td>';
			divX=divX+'<td> <a class="linkBtn" href="http://google.ca" target="_blank">Google</a> </td>';
			//divX=divX+'<td> Logged User: '+loggedUserFlag+'  </td>';
			divX=divX+'<td> <td> <a class="linkBtn" href="../Pages/Content.htm" target="_self">Shopping Cart</a></td></tr></table>';

			document.getElementById("headerDiv").innerHTML=divX;
			//alert("divAbove is: \n"+divX);
			//sessionStorage.removeItem('userName');		
	}
}
	
//////// ================================================ ///////
//////// ===== Functions dependant on user loged in ===== ///////
//////// ================================================ ///////

function USR_showShoppingCart ()
{
	//Now we are going to build table with shopping cart content == based on (userID):
	var userID = sessionStorage.getItem('userName');
	var arrItems;
	var totalAmount = 0;
	var strToShow = "";
	var isBasketExists = getCookie('basket'+userID);
	var imgStr1 = '<img src="../Img/item-';
	var imgStr2 = '.jpg" class="goodsPreview" />';

	if (isBasketExists != "") {
			arrItems = isBasketExists.split('::');
			
			var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td><td> MODIFY </td></tr>';
			
			for (var i = 0, lenI = arrItems.length; i < lenI; i++) {
				var arrFields = arrItems[i].split('|');
				tblContent = tblContent + '<tr><td>' + imgStr1+arrFields[0]+imgStr2 + '</td><td>'+ arrFields[1] + '</td><td>';
				tblContent = tblContent + arrFields[2] + '</td><td>'+ arrFields[3] + '</td><td>'+ arrFields[4]+ '</td>';
				totalAmount = parseFloat(parseFloat(totalAmount) + parseFloat(arrFields[4])).toFixed(2);
				tblContent = tblContent + '<td><input type="button" name="Remove" value="Remove" onclick="USR_funcRemoveItem (';
				tblContent = tblContent + arrFields[0].trim()+');"></td></tr>';
			}
			tblContent = tblContent +'<tr><td colspan="4">Total: </td><td>'+totalAmount+'</td><td> &nbsp; </td></tr>';

			setCookie("totals"+userID, totalAmount, 30); //to save total for the user ID 
	}
	else {
		var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td><td> MODIFY </td></tr>';
		tblContent = tblContent + '<tr><td> 0 </td><td> &nbsp; </td><td> 0 </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td></tr>';
	}
	document.getElementById("basketTbl").innerHTML = tblContent;
	return;
}

function USR_showBillingTotals ()
{
	//Now we are going to build table with shopping cart content == based on (userID):
	var userID = sessionStorage.getItem('userName');
	var isTotalsExists = getCookie('totals'+userID);
	var taxesVal = 0;
	if (isTotalsExists !="") {
		//alert("isTotalsExists = " + isTotalsExists);
		//put value to id=orderSubtotal
		totalVal = (parseFloat(isTotalsExists));
		taxesVal =  (parseFloat(totalVal * 0.05) + parseFloat(totalVal * 0.09975)).toFixed(2); //5% and 9.975%
		document.getElementById("orderSubtotal").innerHTML = "$ "+isTotalsExists + " CAD";
		document.getElementById("orderShipping").innerHTML = "$ "+"0.00" + " CAD";
		document.getElementById("orderTaxes").innerHTML = "$ "+ taxesVal + " CAD";
		document.getElementById("orderTotal").innerHTML = "$ "+ (parseFloat(totalVal) * 1 + parseFloat(taxesVal) * 1).toFixed(2) + " CAD";
		//
		//loggedUserFlag = sessionStorage.getItem("loggedUser");
		document.getElementById("loggedUserID").innerHTML = sessionStorage.getItem("userName");
	}
}

function USR_addToBasket(id,name,price)
{ // adding an item to basket/shopping cart == based on (userID)
	var userID = sessionStorage.getItem('userName');
	var totalBefore = document.getElementById("totalSumDiv").innerHTML;
		if (totalBefore =="") {
			totalBefore = 0;
		}

	var isBasketExists = getCookie('basket'+userID);
	var qty = document.getElementById('goodsQty_'+id).value;
	var itemFoundInCart = false;
  if (qty == "0") { return; }
	if (qty != "" && qty != null) {
		    if (isBasketExists != "") {
		        var arrItems;
		        var strToShow = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 var arrFields = arrItems[i].split('|');

		 			 	if ( arrFields[0] == id) {
		 			 		
		 			 		arrFields[2] = parseInt(arrFields[2]) + parseInt(qty);
		 			 		arrFields[4] = (parseInt(arrFields[3]) * parseInt(arrFields[2])).toFixed(2);
		 			 		itemFoundInCart = true;
		 			 	}
		 			 if (strToShow != "" && strToShow != null) {
		 			 	strToShow = strToShow + '::' + arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 }else {
		 			 	strToShow = arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 }
				}
		        if ( itemFoundInCart == false) {
		        	setCookie("basket"+userID, isBasketExists+'::'+id+'|'+name+'|'+qty+'|'+(parseFloat(price)).toFixed(2)+'|'+(parseFloat(price)*parseInt(qty)).toFixed(2), 30);
		        }
		        else {
		        	setCookie("basket"+userID, strToShow, 30);
		        }
		        isBasketExists = getCookie('basket'+userID);
		        // ===== Now showing the basket-cart --- based on userID:
		        strToShow = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 arrFields = arrItems[i].split('|');
		 			 for (var j = 0, lenJ = arrFields.length; j < lenJ; j++) {
		 			 		strToShow = strToShow + arrFields[j] + '\t\t' ;
		 			 }
		 			 strToShow = strToShow + '\n';
				}
		    }else {
		        setCookie("basket"+userID, id+'|'+name+'|'+qty+'|'+(parseFloat(price)).toFixed(2)+'|'+(parseFloat(price)*parseInt(qty)).toFixed(2), 30);
		        isBasketExists = getCookie('basket'+userID);
			}

			//Now we are going to build table with results:
				var arrItems;
		        var strToShow = "";
		        arrItems = isBasketExists.split('::');
		    var tblContent = '<tr><td> ID </td><td> DESCRIPTION </td><td> QTY </td><td> UNIT.PRICE </td><td> SUM </td></tr>';
		    for (var i = 0, lenI = arrItems.length; i < lenI; i++) {
		 		var arrFields = arrItems[i].split('|');
				tblContent = tblContent + '<tr><td>' + arrFields[0] + '</td><td>'+ arrFields[1] + '</td><td>'
				tblContent = tblContent + arrFields[2] + '</td><td>'+ arrFields[3] + '</td><td>'+ arrFields[4]+ '</td></tr>';
		 	}
		document.getElementById("basketTbl").innerHTML = tblContent;

		var totalAfter = parseFloat(totalBefore) + (parseFloat(price) * parseInt(qty));
		document.getElementById("showTotalTop").innerHTML = totalAfter.toFixed(2);

    //set the quantity back to none or 0:
    document.getElementById('goodsQty_'+id).value = "";
			return;
	}
}

function USR_funcRemoveItem(itemID)
{ // removing an item to basket/shopping cart == based on (userID)
	//to remove an item from the list
	var userID = sessionStorage.getItem('userName');
	var isBasketExists = getCookie('basket'+userID);
	var id = itemID;
	var itemFoundInCart = false;
	//alert("Item ID is: " + itemID);

		    if (isBasketExists != "") {
		        var arrItems;
		        var strToShow = "";
		        var strToShowMsg = "";
		        arrItems = isBasketExists.split('::');

		        for (var i = 0, lenI = arrItems.length; i < lenI; i++) {

		 			 var arrFields = arrItems[i].split('|');
							//alert("Cookie found! " + arrFields[0]);
		 			 	if ( arrFields[0] == id) {
		 			 		//alert("Item to remove! " + arrFields[0]);
		 			 		//arrItems.splice(i,1); //to remove [i] elementh
		 			 		itemFoundInCart = true;
		 			 	}else{
		 			 		if (strToShow != "" && strToShow != null) {
		 			 		strToShow = strToShow + '::' + arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 		strToShowMsg = strToShowMsg + '\n\n' + arrFields[0] +'|\t'+ arrFields[1]+'|\t'+ arrFields[2]+'|\t'+ arrFields[3]+'|\t'+ arrFields[4];
		 			 		}else {
		 			 			strToShow = arrFields[0] +'|'+ arrFields[1]+'|'+ arrFields[2]+'|'+ arrFields[3]+'|'+ arrFields[4];
		 			 			strToShowMsg = arrFields[0] +'|\t'+ arrFields[1]+'|\t'+ arrFields[2]+'|\t'+ arrFields[3]+'|\t'+ arrFields[4];
		 					} 
		 			 	}
				}

				//alert("Items Found in The Cart: " + '\n\n' + strToShowMsg);
		        //alert("StrToShow: " + strToShow);
		       setCookie("basket"+userID, strToShow, 30);
		       isBasketExists = getCookie("basket"+userID);
		       //showShoppingCart();
		       USR_showShoppingCart();
			}
	return;
}


function USR_funcReset ()
{ // function to reset shopping cart/basket based on userID:
	//to remove a cookie for basket
	var userID = sessionStorage.getItem('userName');
	var totalAmount = 0;
	alert("All content of the Shopping Cart will be removed now!!!");
	deleteCookie('basket'+userID);
	setCookie("totals"+userID, totalAmount, 30)
	return;
}


function validateBilling() 
{
	//To validate Billing Information and proceed ti Payment:

	// let search = prompt("What you want to search?", "love");
	// let regexp = new RegExp(search);

	// // find whatever the user wants
	// alert( "I love JavaScript".search(regexp));
	// id=credCard, id=expireMonth
	var searchCC = document.getElementById("credCard").value;
	patterN = /^\d{16}$/;
	if (isStrValid (searchCC,patterN))
	{
		//alert("This is correct 16-digits number!");
	}
	else {
		//alert("Not valid!!!");
		return false;
	}

	var searchSC = document.getElementById("cardSecNum").value;
	patterN = /^\d{3}$/;
	if (isStrValid (searchSC,patterN))
	{
		//alert("This is correct 3-digits number!");
	}
	else {
		//alert("Not valid!!!");
		return false;
	}

	var expMonth = document.getElementById("expireMonth").value;
	var expYear = document.getElementById("expireYear").value;
	var orderTotal = document.getElementById("orderTotal").innerHTML;

	var messageStr = "CreditCard: \t" + searchCC + "\n" + "SecretCode: \t" + searchSC;
	var messageStr = messageStr + "\n"+"Month Exp: \t"+expMonth+"\n"+"Month Exp: \t"+expYear;
	var messageStr = messageStr + "\n" +"Order Total: \t" + orderTotal;

	document.getElementById("cardType_popup").innerHTML = document.getElementById("cards").value; 
	document.getElementById("cardNum_popup").innerHTML = searchCC;
	document.getElementById("cardExpDate_popup").innerHTML = expMonth + ' / ' + expYear;
	document.getElementById("cardSecNum_popup").innerHTML = searchSC;
	document.getElementById("orderTotal_popup").innerHTML = orderTotal;
	document.getElementById('id01').style.display='block'
	return true;
	//alert(messageStr);

}

function isStrValid (strToCheck,patterN)
{
	var search = strToCheck;
	var numericStr = patterN;
	// alert("search string is: "+search);
	if (search.match(numericStr)) {
		//alert("This is correct string according to the pattern: " + numericStr);
		return true;
	}
	else {
		alert("The string is incorrect number!");
		return false;
	}
}

function calculateCash()
{
      var tot=0, res=0, s100=0, s50=0;
	  tot = parseFloat(document.getElementById("total").value);
		if (parseInt(tot/100) > 0)
		   { s100 =  parseInt(tot/100);
		     res = tot - (s100 * 100);
			$(document).ready(function(){
              $("#100d").show();
            });
			document.getElementById("100t").innerHTML = s100;
			document.getElementById("100i").src = "../Img/imgCAD/100cad.jpg";
		     alert("100 : " + s100 + " res : " + res);
		   }
		else
		   {res = tot;
			$(document).ready(function(){
              $("#100d").hide();
            });
		   }
		   
		if (parseInt(res/50) > 0)
		   { s50 =  parseInt(res/50);
		     res = res - (s50 * 50);
			$(document).ready(function(){
              $("#50d").show();
            });
			document.getElementById("50t").innerHTML = s50;
			document.getElementById("50i").src = "../Img/imgCAD/50cad.png";
		     alert("50 : " + s50 + " res : " + res);
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#50d").hide();
            });
 			}
 }

 function hideMe(element)
 {
	    $(document).ready(function(){
            $(element).hide();
        });
 }

 	function closeModalAndExit()
 	{
 		document.getElementById('id01').style.display='none';
 		setCookie("totals"+userID, "", 0);
 		USR_funcReset(); 
 		USR_showShoppingCart (); 

 		window.location.href = "../Pages/Content.htm"; 
 		// location.assign(../Pages/Content.htm);
 		location.reload(true);
 	}
