// init for index.jsp
var testdata = [{id:1,name:"map1"},{id:2,name:"map2"},{id:3,name:"map3"},{id:4,name:"map4"},{id:5,name:"map5"},{id:6,name:"map6"}];
var data1 = [{id:1,name:"map1"},{id:2,name:"map2"},{id:3,name:"map3"},{id:4,name:"map4"},{id:5,name:"map5"},{id:6,name:"map6"}];
var data2 = [{id:1,name:"map1"},{id:2,name:"map2"},{id:3,name:"map3"},{id:4,name:"map4"},{id:5,name:"map5"},{id:6,name:"map6"}];
var data3 = [{id:1,name:"map1"},{id:2,name:"map2"},{id:3,name:"map3"},{id:4,name:"map4"},{id:5,name:"map5"},{id:6,name:"map6"}];



$(document).ready(function (e) {
	$('html').css(
		'width',window.screen.availWidth-20);
	$('#myCarousel').carousel({
	interval: 2000
	});
	checkAuthority();
	showMaps("tri",testdata);
	showMaps("tmi1",testdata);
	showMaps("tmi2",testdata);
	showMaps("tmi3",testdata);
});

function checkAuthority()
{
	$.ajax({
			url: "./getActiveAuthority.action",
			async: false,
			type: "POST",
			dataType: "text",
			data: {},
			success: function (flag) {
				if(flag==="true"){
				//TODO 弹窗提示管理员权限开启
				var oldhtml = $('#usermenu').html();
				var newhtml = '<li><a href="./admin.action">审核管理</a></li>';
				$('#usermenu').html(oldhtml+newhtml);
				}
			}
		});
}
/*
function showMap(){
	for(maps in testdata){
		var mapid = testdata[maps].id;
		var mapname = testdata[maps].name;
		var curdiv = "tri" + (parseInt(maps)+1);
		$("#"+curdiv).find("img").attr("src","./img/map/"+mapid+".jpg");
		$("#"+curdiv).children("a").attr("href","./main.action");
		$("#"+curdiv).children("p").text(mapname);
		//$("#"+curdiv).children("a").attr("href","./main.action?mapid="+mapid);
	}

	for(maps in data1){
		var mapid = data1[maps].id;
		var mapname = data1[maps].name;
		var curdiv = "tmi1" + (parseInt(maps)+1);
		$("#"+curdiv).find("img").attr("src","./img/map/"+mapid+".jpg");
		$("#"+curdiv).children("a").attr("href","./main.action");
		$("#"+curdiv).children("p").text(mapname);
		//$("#"+curdiv).children("a").attr("href","./main.action?mapid="+mapid);
	}
	
	for(maps in data2){
		var mapid = data2[maps].id;
		var mapname = data2[maps].name;
		var curdiv = "tmi2" + (parseInt(maps)+1);
		$("#"+curdiv).find("img").attr("src","./img/map/"+mapid+".jpg");
		$("#"+curdiv).children("a").attr("href","./main.action");
		$("#"+curdiv).children("p").text(mapname);
		//$("#"+curdiv).children("a").attr("href","./main.action?mapid="+mapid);
	}
	
	for(maps in data3){
		var mapid = data3[maps].id;
		var mapname = data3[maps].name;
		var curdiv = "tmi3" + (parseInt(maps)+1);
		$("#"+curdiv).find("img").attr("src","./img/map/"+mapid+".jpg");
		$("#"+curdiv).children("a").attr("href","./main.action");
		$("#"+curdiv).children("p").text(mapname);
		//$("#"+curdiv).children("a").attr("href","./main.action?mapid="+mapid);
	}	
}
*/
function showMaps(divIdPrefix,data){
	for(maps in data){
		var mapid = data[maps].id;
		var mapname = data[maps].name;
		var curdiv = divIdPrefix + (parseInt(maps)+1);
		$("#"+curdiv).find("img").attr("src","./img/map/"+mapid+".jpg");
		$("#"+curdiv).children("a").attr("href","./main.action");
		//有地图之后，把上面这条注释掉，换成下面这条
		//$("#"+curdiv).children("a").attr("href","./main.action?mapid="+mapid);
		$("#"+curdiv).children("p").text(mapname);
	}		
}