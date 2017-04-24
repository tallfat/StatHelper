// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

myApp.onPageInit('addNewP', function (page) {
    // run createContentPage func after link was clicked
	$$("#saveNameList").on('click',function(){
		addNewPerson();
	});
});

// myApp.onPageInit('index', function (page) {
    ////run createContentPage func after link was clicked
    // $$('#icon-refresh').on('click', function () {
        // resetStatButton();
    // });
	// $$('.icon-refresh').on('click', function () {
        // resetStatButton();
    // });
	// $$('.stat').on('click', function () {
        // clickStatButton(this);
    // });
	// $$("#icon-help").on('tap click touchstart',showHelp());
// });

document.addEventListener("deviceready", onDeviceReady, false);

$$('#icon-refresh').on('click', function () {
    resetStatButton();
});
$$('.stat').on('click', function () {
        clickStatButton(this);
});
$$("#icon-help").on('tap click touchstart',function(){
	showHelp();
});
$$('#icon-sort').on('click', function () {
    onClickSort();
});
$$('.arrow-upward').on('click', function () {
    moveRowUp(this);
});
$$('.delete').on('click', function () {
	//myApp.confirm(
	//"確定要刪除\""+strip(this.parentNode.parantNode.childNodes[2].innerHTML)+"\"嗎?", 
	//"刪除名單", 
	//deleteRowInTable(this), 
	//function(){}
	//);
	deleteRowInTable(this)
});



function onDeviceReady() {
		console.log(navigator.notification);
}

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


$$('.form-to-data').on('click', function(){
  //myApp.alert('her');
  var formData = myApp.formToData('#my-form');
  //myApp.alert(JSON.stringify(formData));
}); 

function getNameListLength(){
	return rows = document.getElementById("check").getElementsByTagName("tr").length;
}

function addNewPerson() {
	

	
	//myApp.alert('ANP');
	var data = myApp.formToData('#my-form');
	//myApp.alert(JSON.stringify(data));
	
	// Find a <table> element with id="myTable":
	var table = document.getElementById("check");
	var rows = document.getElementById("check").getElementsByTagName("tr").length;
	// Create an empty <tr> element and add it to the 1st position of the table:
	//myApp.alert(rows);
	var row = table.insertRow(rows);
	while(document.getElementById("r"+rows) != null){rows++;}
	row.id = "r"+rows;
	

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);

	// Add some text to the new cells:
	if(data['number']!=''){
		cell1.innerHTML = "<div class='numberL sorthide' id ='numberL"+rows+"'>"+data['number']+"</div>";
	}else{
	cell1.innerHTML = "<div class='numberL sorthide' id ='numberL"+rows+"'>"+rows+"</div>";
		document.getElementById("addNumber").placeholder = rows;
	}
	
	if(data['name']!=''){
		cell2.innerHTML = "<div class='nameL' id='namelist"+rows+"'>"+data['name']+"</div>";
	}else{
		cell2.innerHTML = "<div class='nameL' id='namelist"+rows+"'>"+"朋友"+rows+"</div>";
		document.getElementById("addName").placeholder = "朋友"+rows;
	}
	
	cell3.innerHTML = "<a href='#' class='button stat sorthide' id='lord"+rows+"'>主</a><i class='f7-icons arrow-upward sort' id='up"+rows+"' style='display:none'></i>";
	cell4.innerHTML = "<a href='#' class='button stat sorthide' id='pray"+rows+"'>禱</a><i class='f7-icons arrow-downward sort' id='down"+rows+"' style='display:none'></i>";
	cell5.innerHTML = "<a href='#' class='button stat' id='home"+rows+"'>家</a><i class='f7-icons delete sort' id='delete"+rows+"' style='display:none'></i>";
	cell6.innerHTML = "<a href='#' class='button stat' id='group"+rows+"'>排</a>";
	cell7.innerHTML = "<a href='#' class='button stat' id='gospel"+rows+"'>福</a>";
	cell8.innerHTML = "<a href='#' class='button stat' id='meet"+rows+"'>晨</a>";
	
	// var statBut = document.getElementsByClassName("stat");
	// for (var i = 0; i<statButtons.length; i++) {
		// statBut[i].addEventListener('onclick',clickStatButton(this));
	// }
	
	$$('#lord'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#pray'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#home'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#group'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#gospel'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#meet'+rows).on('click', function () {
        clickStatButton(this);
	});
	$$('#up'+rows).on('click', function () {
		moveRowUp(this);
	});
	$$('#down'+rows).on('click', function () {
		moveRowDown(this);
	});
	$$('#delete'+rows).on('click', function () {
		// myApp.confirm(
			// "確定要刪除\""+strip(this.parentNode.parantNode.childNodes[2].innerHTML)+"\"嗎?", 
			// "刪除名單", 
			// deleteRowInTable(this), 
			// function(){}
		// );
		deleteRowInTable(this);
	});
	
	myApp.alert("可以繼續新增名單", "新增\""+strip(cell2.innerHTML)+"\"成功！", function () {
        //myApp.alert('You clicked Ok button');
		document.getElementById("my-form").reset();
		document.getElementById("addName").placeholder = "姓名";
		document.getElementById("addNumber").placeholder = "編號(選填)";
	}
	
	
	
	
	//myApp.alert('可以繼續新增名單');
	
	//,function () {
        //myApp.alert('You clicked cancel button');
		//onPageBack(); //load another page
		//window.history.go(-1);
		//open("index.html","_self")
		//document.getElementById("backlink").click();
            //return false; //required to prevent default router action
	//}
	);
	
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText||"";
}



function clickStatButton(elem) {
	//elem.classList.toggle("active");
	if(elem.classList.contains("active")){
		//myApp.alert("removeACTIVE");
		//alert("removeACTIVE");
		elem.classList.remove("active");
	}else{
		//myApp.alert("addACTIVE");
		elem.classList.add("active");
	}
	return true;
}

function resetStatButton() {
	var statButtons = document.getElementsByClassName("stat");
	//myApp.alert(statButtons);
	//myApp.alert(statButtons.length);
	for (var i = 0; i<statButtons.length; i++) {
		//myApp.alert(statButtons[i].id);
		statButtons[i].classList.remove("active");
	}
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 
today = mm+'/'+dd+'/'+yyyy;
document.write(today);

var bA = document.getElementById("addNP");
bA.addEventListener("click", function (){
	//alert("addNPEventListener");
	if(document.getElementById("icon-sort").classList.contains("apps")){
		onClickSort();
	}
	//var rowsN = document.getElementById("check").getElementsByTagName("tr").length;
	//alert("第一次:"+rowsN);
	//while(document.getElementById("r"+rowsN) != null){rowsN++;}
	//alert("第二次:"+rowsN);
	//$$('#addNumber').setAttribute("value",3);
	//alert("第三次:"+rowsN);
		
}
);

//$("#addNP").click(function () { alert("jQmessage"); });



function onClickSort(){
	//myApp.alert('clicksort');
	
	
	//$$('.sort').style="display:block";
	var elemS = document.getElementById("icon-sort");
	
	var sortEle = document.getElementsByClassName("sort");
	var sortHideEle = document.getElementsByClassName("stat");
	
	if(elemS.classList.contains("swap")){
		//myApp.alert("removeACTIVE");
		//alert("removeACTIVE");
		elemS.classList.remove("swap");
		elemS.classList.add("apps");
		for (var i = 0; i<sortEle.length; i++) {
			//myApp.alert(statButtons[i].id);
			sortEle[i].setAttribute("style","display:block");
		}
		for (var i = 0; i<sortHideEle.length; i++) {
			//myApp.alert(statButtons[i].id);
			sortHideEle[i].setAttribute("style","display:none");
		}
	}else{
		//myApp.alert("addACTIVE");
		elemS.classList.remove("apps");
		elemS.classList.add("swap");
		for (var i = 0; i<sortEle.length; i++) {
			//myApp.alert(statButtons[i].id);
			sortEle[i].setAttribute("style","display:none");
		}
		for (var i = 0; i<sortHideEle.length; i++) {
			//myApp.alert(statButtons[i].id);
			sortHideEle[i].setAttribute("style","display:block");
		}
	}
}

function onTouchshare(){
	/*myApp.alert('touchshare');
	navigator.notification.alert(
		'touch',  // message
		alertDismissed,         // callback
		'title',            // title
		'Done'                  // buttonName
	);*/
}

function showHelp() {
      navigator.notification.alert(
       'Message box please display....', // message
       alertDismissed,             // no callback
       'Message Box Title',         // title
       'Continue'                   // button texr
    );
    }
function  alertDismissed(){
       //navigator.notification.alert("alert box is dismissed");
	}
	
$$(".share").on('tap click touchstart',alertDismissed);

function onDeviceReady() {
		console.log(navigator.notification);
}

function moveRowUp(upElem) {
    var row = upElem.parentNode.parentNode,
        sibling = row.previousElementSibling,
        anchor = row.nextElementSibling,
        parent = row.parentNode;
	if(sibling.id != "header")
		parent.insertBefore(row, sibling);
}

function moveRowDown(downElem) {
    var row = downElem.parentNode.parentNode,
        anchor = row.nextElementSibling,
		anchor2 = anchor.nextElementSibling,
        parent = row.parentNode;

    parent.insertBefore(row, anchor2);
}

function deleteRowInTable(deleteElem) {
	//alert(this.parentNode.innerHTML);
	//var Name = "name";
	//Name = this.parentNode.parentNode.innerHTML;
	//myApp.alert(Name);
	//alert(strip(deleteElem.parentNode.parentNode.childNodes[2].className));
	myApp.alert("刪除名單");
    var row = deleteElem.parentNode.parentNode,
		rowI = row.rowIndex
        parent = row.parentNode;

    parent.deleteRow(rowI);
}

