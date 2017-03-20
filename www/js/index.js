/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//document.addEventListener("pause", onPause, false);
		

		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		
		
		if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
			
			window.location.href = "Login.html";
			
		}
		
		
		
		if (localStorage.getItem("nomefoto") === null || localStorage.getItem("nomefoto")=="null" || typeof(localStorage.getItem("nomefoto")) == 'undefined' || localStorage.getItem("nomefoto")==0 || localStorage.getItem("nomefoto")=="") {
			
			localStorage.setItem("foto","default.png")
			
		}
		else{
			nomefoto = localStorage.getItem("nomefoto")+".jpg";
			localStorage.setItem("foto",nomefoto)
		}
		
		
		
		//// AD MOB ////
		
		//admob.initAdmob("ca-app-pub-5263503085775846/1999366017","ca-app-pub-5263503085775846~9522632812"); //admob IOS
		//admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);
		
		
		//// ANDROID //////
		
		var admobid = {};
		 
		 if( /(android)/i.test(navigator.userAgent) ) {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		 };
		 } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		 };
		 } else {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		 };
		 }
		 
		 if(AdMob) AdMob.createBanner( {
			adId:admobid.banner,
			position:AdMob.AD_POSITION.BOTTOM_CENTER,
			autoShow:true} );
		 
		 
		 
		 if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
		 
		 if(AdMob) AdMob.showInterstitial();
		
		///// FINE /////
		
		
		////// AD MOB FINE ////
		
		
		
		
		////////// controllo internet ///////////////
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
		
			
		  var uno;
		  var due;
		  var tre;
		  var quattro;
		  var numero = 1;
		  var numero1 = 2;
		  var numero2 = 3;
		  var numero3 = 4;
		  var numero4 = 5;
		  var numero5 = 6;
			
		 //DATA
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			
			$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
			var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			
		  localStorage.setItem("start","0")
			
		  var somma=0;
		  var punto=0;
		  $("#imgutente2").attr("src","http://msop.it/public/addall/"+localStorage.getItem("foto")+"");
			
			
			//alert(localStorage.getItem("punteggio1"))
			
			
			if(localStorage.getItem("punteggio1") === null || localStorage.getItem("punteggio1") == "" || localStorage.getItem("punteggio1") == "0" || typeof(localStorage.getItem("punteggio1")) == 'undefined' ||localStorage.getItem("punteggio1")==0){
				
			   $("#lastpunt").hide()
			}
			else{
				$("#lastpunt").show()
				$("#punteggio2").html(localStorage.getItem("punteggio1"))
			}
			
			localStorage.setItem("punteggio1","0")
			
			$("#spinner1").hide()
			
		}
		
		//////////////////////////////////////////
		
		$(document).on("touchstart", "#condividi", function(e){
					   
			//alert()
					   
			if(localStorage.getItem("emailfacebook") == "1"){
				window.plugins.socialsharing.shareViaFacebook('Sfidami su AddAll', 'http://www.msop.it/addall/logo.png', 'www.msop.it', function() {console.log('share ok')}, function(onPause){})
			}
			else{
					navigator.notification.alert(
					 							'Devi fare login con Facebook',  // message
												 alertDismissed,         // callback
												 'Login',            // title
												 'OK'                  // buttonName
					);
			}
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
					   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		});
		
		
		
		$(document).on("touchstart", "#loading", function(e){
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
					   
		});
		
		
		$(document).on("tap", "#risultati", function(e){
					   
				var esatte5="<br>";
				var conta=1;
					   
				$("#tbllancia").hide()
				
				//window.location.href = "#home4";
				$.mobile.changePage ($("#home4"));
					   
				$.ajax({
							  type:"GET",
							  url:"http://msop.it/addall/leggipuntiTOT.php?email="+localStorage.getItem("email")+"",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							  $.each(result, function(i,item){
									 
									 if(item.Token=="1"){
									 
									   var dataclass = item.data.replace(".000000","").replace("2017-","")
									 
									    if(dataclass == "0000-00-00 00:00:00"){
									     dataclass = ""
										}
									 
									    if(conta==1){
									 
									       esatte5 = esatte5 + "<b><img src='images/status_green.png' width='12'>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>  "+dataclass+"</a><br><br>"
										}
									   else{
									       esatte5 = esatte5 + "<b>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>  "+dataclass+"</a><br><br>"
									    }
									 
									 }
									 
									 else{
									   esatte5 = esatte5 + "<br>Nessun Risultato"
									 }
									 
									 
									 $("#esatte5").html(esatte5)
									 
									 conta = conta+1
									
								});
					   },
					   error: function(){
					   
					   
					   $("#esatte5").html("<br><br>Nessuna Sfida Aperta")
					   
					   navigator.notification.alert(
													'Errore di rete, riprova sotto copertura',  // message
													alertDismissed,         // callback
													'Errore di Rete',            // title
													'OK'                  // buttonName
													);
					   
					   },
					   
					   dataType:"jsonp"});
					   
					   
				//$("#esatte5").html("<br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br>")
					   
						
						
					   var myScroll2;
					   
					   myScroll2 = new iScroll('wrapper2', {
											   //zoom: true,
											   click: true
											   /*hScrollbar: false,
											   vScrollbar: false,
											   zoomMin:1,
											   zoomMax:2,
											   zoomStart:1*/
											   });
					   
					   setTimeout (function(){
								   
							myScroll2.refresh();
								   
						}, 1000);

					   
		});
		
		
		// PULSANTE CONTROLLO SFIDA //
		$(document).on("touchstart", "#btnsfida", function(e){
					   
					   var esatte="";
					   
					   $.mobile.changePage ($("#home3"));

					   $("#tbllancia").hide()
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/addall/crtround1_V2.php?email="+localStorage.getItem("email")+"&round=1",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							    $.each(result, function(i,item){
									   
									   if(item.Token=="1"){
									   var datasfida = item.data1
									   
									   esatte = esatte + "<br><img src='images/status_yellow.png' width='20'> <b>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+"<br>"
									   
									   }
									   else if(item.Token=="2"){
									   var datasfida = item.data1
									   if(item.punti!="0"){
									   esatte = esatte + "<br><a id='sfida"+item.idsfida+"' ><img src='images/play.png' width='30'></a> <b>"+item.sfidante+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+" <br>"
									   }
									   }
									   else if(item.Token=="3"){
									   var datasfida = item.data1
									   var datasfida2 = item.data2
									   esatte = esatte + "<br><img src='images/status_green.png' width='20'> <b>"+item.sfidante+"</b>, Punti: <b>"+item.punti2+"</b>, "+datasfida.replace("2017-","")+" -- <b>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+"<br>"
									   }
									   else{
									   esatte = esatte + "<br><br>Nessuna Sfida Aperta"
									   }
									 
									   
									   $("#esatte4").html(esatte)
									   
									   $(document).on("touchstart", "#sfida"+item.idsfida+"", function(e){
											
											accettasfida(item.idsfida)
													  
										});
								});
							  
							  
							  
							  },
							  error: function(){
							  
							  
							    $("#esatte4").html("<br><br>Nessuna Sfida Aperta")
							  
							    navigator.notification.alert(
														   'Errore di rete, riprova sotto copertura',  // message
														    alertDismissed,         // callback
														   'Errore di Rete',            // title
														   'OK'                  // buttonName
														   );
							  
							  },
							  
							  dataType:"jsonp"});
					   
					   
					   
					   var myScroll;
					   
					   myScroll = new iScroll('wrapper', {
													//zoom: true,
													click: true
													/*hScrollbar: false,
													vScrollbar: false,
													zoomMin:1,
													zoomMax:2,
													zoomStart:1*/
											  });
					   
					   
					   setTimeout (function(){
								   
							myScroll.refresh();
								   
						}, 1000);
   
					   
		});
		
		
		function btnsfida(){
			
			           var esatte="";
					   
					   //window.location.href = "#home3";
					   $.mobile.changePage ($("#home3"));
					   
					   $("#tbllancia").hide()
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/addall/crtround1_V2.php?email="+localStorage.getItem("email")+"&round=1",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							  $.each(result, function(i,item){
									 
									 if(item.Token=="1"){
									 var datasfida = item.data1
									 
									 esatte = esatte + "<br><img src='images/status_yellow.png' width='20'> <b>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+"<br>"
									 
									 }
									 else if(item.Token=="2"){
									 var datasfida = item.data1
									 if(item.punti!="0"){
									 esatte = esatte + "<br><a id='sfida"+item.idsfida+"' ><img src='images/play.png' width='30'></a> <b>"+item.sfidante+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+" <br>"
									 }
									 }
									 else if(item.Token=="3"){
									 var datasfida = item.data1
									 var datasfida2 = item.data2
									 esatte = esatte + "<br><img src='images/status_green.png' width='20'> <b>"+item.sfidante+"</b>, Punti: <b>"+item.punti2+"</b>, "+datasfida.replace("2017-","")+" -- <b>"+item.nome+"</b>, Punti: <b>"+item.punti+"</b>, "+datasfida.replace("2017-","")+"<br>"
									 }
									 else{
									 esatte = esatte + "<br><br>Nessuna Sfida Aperta"
									 }
									 
									 
									 $("#esatte4").html(esatte)
									 
									 
									 $(document).on("touchstart", "#sfida"+item.idsfida+"", function(e){
													
										accettasfida(item.idsfida)
													
									});
									 
								});
							  
							  
							  
							  },
							  error: function(){
							  
							  
							  $("#esatte4").html("<br><br>Nessuna Sfida Aperta")
							  
							  navigator.notification.alert(
														   'Errore di rete, riprova sotto copertura',  // message
														   alertDismissed,         // callback
														   'Errore di Rete',            // title
														   'OK'                  // buttonName
														   );
							  
							  },
							  
							  dataType:"jsonp"});
					   
					   
					   
					   var myScroll;
					   
					   myScroll = new iScroll('wrapper', {
													//zoom: true,
													click: true
													/*hScrollbar: false,
													vScrollbar: false,
													zoomMin:1,
													zoomMax:2,
													zoomStart:1*/
											  });
					   
					   
					   setTimeout (function(){
								   
								   myScroll.refresh();
								   
								   }, 1000);
					   
					   
		}
		

		
		// FINE //
		
		$(document).on("touchstart", "#btnlancia2", function(e){
			$("#lastpunt").hide()
			localStorage.setItem("round","1")
			localStorage.setItem("sfidalanciata","1")
		    localStorage.setItem("sfida","1")
			
			$("#lastpunt").hide()
			
			$("#tbllancia").show()
		});
		
		
		$(document).on("touchstart", "#btnlancia", function(e){
					   
					
					//$("#tbllancia").show()
					
					localStorage.setItem("round","1")
					localStorage.setItem("sfidalanciata","1")
					localStorage.setItem("sfida","1")
					$("#lastpunt").hide()
					   
					   
					$.ajax({
							type:"GET",
							url:"http://msop.it/addall/lancia_sfida_V2.php?email="+localStorage.getItem("email")+"",
							contentType: "application/json",
							//data: {Lat:3,Longi:4},
							timeout: 7000,
							jsonp: 'callback',
							crossDomain: true,
							success:function(result){
							  
							    $.each(result, function(i,item){
									 
									 if(item.Token=="1"){
									   localStorage.setItem("idsfida",item.idsfida)
									   
									   //alert(localStorage.getItem("idsfida"))
									   
									   $("#btnallenati").hide()
									   $("#btnsfida").hide()
									   $("#btnlancia").hide()
									   $("#bliard").hide()
									   $("#risultati").hide()
									   
									   $("#load").show()
									   
									   localStorage.setItem("session10","0")
									   
									   localStorage.setItem("esatte","0")
									   $("#esatte2").html("0")
									   $("#esatte3").html("0")
									   
									   $("#totale").html("0/10")
									   $("#bianca0").hide()
									   $("#bianca").hide()
									   $("#bianca1").hide()
									   $("#bianca2").hide()
									   
									   var uno;
									   var due;
									   var tre;
									   var quattro;
									   var numero = 1;
									   var numero1 = 2;
									   var numero2 = 3;
									   var numero3 = 4;
									   var numero4 = 5;
									   var numero5 = 6;
									   
									   //DATA
									   var today = new Date();
									   var dd = today.getDate();
									   var mm = today.getMonth()+1;//January is 0, so always add + 1
									   
									   var ora = today.getHours()
									   if(ora<10){ora="0"+ora}
									   
									   var minuti = today.getMinutes();
									   if(minuti<10){minuti="0"+minuti}
									   
									   var secondi = today.getSeconds();
									   if(secondi<10){secondi="0"+secondi}
									   
									   
									   var yyyy = today.getFullYear();
									   if(dd<10){dd="0"+dd}
									   if(mm<10){mm="0"+mm}
									   today = dd+'/'+mm+'/'+yyyy;
									   
									   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
									   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
									   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
									   
									   localStorage.setItem("ora_cell", ora_cell);
									   
									   
									   localStorage.setItem("start","0")
									   localStorage.setItem("punteggio1","0")
									   var somma=0;
									   var punto=0;
									   
									   //admob.hideBanner()
									   
									   AdMob.removeBanner();
									   
									   localStorage.setItem("esatte",0)
									   $("#esatte2").html("0")
									   $("#esatte3").html("0")
									   
									   playAudio('successSound');
									   
									   localStorage.setItem("session10","0")
									   localStorage.setItem("punteggio1","0")
									   somma=0
									   punto = 0
									   $("#somma").html("0")
									   $("#totale").html("0")
									   $("#gioco").show()
									   
									   
									   $("#going").hide()
									   
									   navigator.notification.alert(
											'la somma delle palle colpite deve essere 10',  // message
											alertDismissed,         // callback
											'Somma 10',            // title
											'OK'                  // buttonName
										);
									   
									   setTimeout(function() {
												  
												  playAudio('successSound2');
												  
												  $("#load").hide()
												  
												  $("#dati").show()
												  $("#dati0").show()
												  
												  $("#biliardo").show();
												  
												  $("#somma").html("0")
												  $("#totale").html("0")
												  countdown1(0);
												  
												  }, 1000);
									   
									   localStorage.setItem("start","0")
									   
									   prendinumeri3(0)
									   
									   /*$("#btnallenati").hide()
									   $("#btnsfida").hide()
									   $("#btnlancia").hide()
									   $("#allenati").show()*/
									   
									 }
									 else{
									   //Errore, al momento non è possibile sfidare
									 }
									 
								});
							  
							  },
							  error: function(){
							  
							  
							  navigator.notification.alert(
														   'Errore di rete, riprova sotto copertura',  // message
														   alertDismissed,         // callback
														   'Errore di Rete',            // title
														   'OK'                  // buttonName
														   );
							  
							  },
							  
							  dataType:"jsonp"});
					   
					/*window.location.href = "#home4";
				   
					   
					var myScroll2;
					   
					   
					myScroll2 = new IScroll('#wrapper2', { click: true });
					   
					setTimeout (function(){
						myScroll2.refresh();
					}, 500);
					   
					   
					   
					document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
					   
					document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/

					   
		});
		
		
		function accettasfida(id){
			$.mobile.changePage ($("#home"));
			
			localStorage.setItem("round","1")
			localStorage.setItem("sfidalanciata","2")
			localStorage.setItem("sfida","1")
			
						  localStorage.setItem("idsfida",id)
						  
						  $("#btnallenati").hide()
						  $("#btnsfida").hide()
						  $("#bliard").hide()
						  $("#btnlancia").hide()
			              $("#risultati").hide()
						  
						  $("#load").show()
						  
						  localStorage.setItem("session10","0")
						  
						  localStorage.setItem("esatte","0")
						  $("#esatte2").html("0")
						  $("#esatte3").html("0")
						  
						  $("#totale").html("0/10")
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
						  
						  var uno;
						  var due;
						  var tre;
						  var quattro;
						  var numero = 1;
						  var numero1 = 2;
						  var numero2 = 3;
						  var numero3 = 4;
						  var numero4 = 5;
						  var numero5 = 6;
						  
						  //DATA
						  var today = new Date();
						  var dd = today.getDate();
						  var mm = today.getMonth()+1;//January is 0, so always add + 1
						  
						  var ora = today.getHours()
						  if(ora<10){ora="0"+ora}
						  
						  var minuti = today.getMinutes();
						  if(minuti<10){minuti="0"+minuti}
						  
						  var secondi = today.getSeconds();
						  if(secondi<10){secondi="0"+secondi}
						  
						  
						  var yyyy = today.getFullYear();
						  if(dd<10){dd="0"+dd}
						  if(mm<10){mm="0"+mm}
						  today = dd+'/'+mm+'/'+yyyy;
						  
						  $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
						  $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
						  var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
						  
						  localStorage.setItem("ora_cell", ora_cell);
						  
						  
						  localStorage.setItem("start","0")
						  localStorage.setItem("punteggio1","0")
						  var somma=0;
						  var punto=0;
			
						  
						  localStorage.setItem("esatte",0)
						  $("#esatte2").html("0")
						  $("#esatte3").html("0")
						  
						  playAudio('successSound');
						  
						  localStorage.setItem("session10","0")
						  localStorage.setItem("punteggio1","0")
						  somma=0
						  punto = 0
						  $("#somma").html("0")
						  $("#totale").html("0")
						  $("#gioco").show()
			
			              //admob.hideBanner()
			
			              AdMob.removeBanner();
			
			
						  $("#going").hide()
						  
						  setTimeout(function() {
									 $("#btnallenati").hide()
									 $("#btnsfida").hide()
									 $("#bliard").hide()
									 $("#btnlancia").hide()
									 $("#risultati").hide()
									 
									 playAudio('successSound2');
									 
									 $("#load").hide()
									 
									 $("#dati").show()
									 $("#dati0").show()
									 
									 $("#biliardo").show();
									 
									 $("#somma").html("0")
									 $("#totale").html("0")
									 countdown1(0);
									 
						   }, 1000);

						  localStorage.setItem("start","0")
						  
						  prendinumeri3(0)
			
			
						  
		}
		
		
		$(document).on("touchstart", "#indietro", function(e){
					   
			window.location.href = "index.html";
			//$.mobile.changePage ($("#home"));
					   
		});
		
		
		
		$(document).on("touchstart", "#lanciasfida", function(e){
					   
					   if (document.getElementById("emailsfida").value == "") {
					    navigator.notification.alert(
													'inserire email dello sfidante',  // message
													alertDismissed,         // callback
													'Email Sfidante',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   
					   $("#tbllancia").hide()
					   
					   localStorage.setItem("sfida","1")
					   
					   
					   $("#btnallenati").hide()
					   $("#btnsfida").hide()
					   $("#btnlancia").hide()
					   $("#bliard").hide()
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;
					   
					   //admob.hideBanner()
					   
					   AdMob.removeBanner();
					   
					   localStorage.setItem("esatte",0)
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   playAudio('successSound');
					   
					   localStorage.setItem("session10","0")
					   localStorage.setItem("punteggio1","0")
					   somma=0
					   punto = 0
					   $("#somma").html("0")
					   $("#totale").html("0")
					   $("#gioco").show()
					   
					   
					   $("#going").hide()
					   
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								  
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
						}, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3(0)
					   
					   
					   /*
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/addall/lancia_sfida.php?email="+localStorage.getItem("email")+"&email2=anna.movchan@pokeranswer.it&round=1",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
								$.each(result, function(i,item){
									localStorage.setItem("sfida","1")
						
									going();
									 
								});
							  
							  },
							  error: function(){
							  
							  
							  },
							  
							  dataType:"jsonp"});
						
						*/
					   
		});

		
		
		$(document).on("touchstart", "#btnallenati", function(e){
			$("#btnallenati").hide()
			$("#btnsfida").hide()
			$("#bliard").hide()
			$("#btnlancia").hide()
			$("#risultati").hide()
			$("#allenati").show()
		});
		
		
		
		$(document).on("touchstart", "#indietro2", function(e){
					   
		    $("#allenati").hide()
			$("#btnallenati").show()
			$("#btnsfida").show()
			$("#bliard").show()
			$("#btnlancia").show()
			$("#risultati").show()
		});
		
		
		
		$(document).on("touchstart", "#going", function(e){
					   
					   navigator.notification.alert(
						 'la somma delle palle colpite deve essere 10',  // message
						  alertDismissed,         // callback
						 'Somma 10',            // title
						 'OK'                  // buttonName
						);
					   
					   
					   localStorage.setItem("sfida","0")
					   localStorage.setItem("round","1")
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   $("#lastpunt").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;

					   
			//admob.hideBanner()
					   
			AdMob.removeBanner();
					   
			localStorage.setItem("esatte",0)
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			playAudio('successSound');
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
			$("#gioco").show()
			
					   
			$("#going").hide()
			
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								 
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
					   }, 1000);
			
			localStorage.setItem("start","0")
					   
			prendinumeri3(0)
					   
		});
		
		
		$(document).on("touchstart", "#going2", function(e){
					   
					   navigator.notification.alert(
													'la somma delle palle colpite deve essere 15',  // message
													alertDismissed,         // callback
													'Somma 15',            // title
													'OK'                  // buttonName
													);
					   
					   
					   localStorage.setItem("sfida","0")
					   localStorage.setItem("round","2")
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/15")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   $("#lastpunt").hide()

					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;
					   
					   
					   //admob.hideBanner()
					   
					   AdMob.removeBanner();
					   
					   localStorage.setItem("esatte",0)
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   playAudio('successSound');
					   
					   localStorage.setItem("session10","0")
					   localStorage.setItem("punteggio1","0")
					   somma=0
					   punto = 0
					   $("#somma").html("0")
					   $("#totale").html("0")
					   $("#gioco").show()
					   
					   
					   $("#going").hide()
					   
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								  
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
								  }, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3_15(0)
					   
		});
		
		
		function going2(){
			// SONO ARRIVATO QUI
			
			// devo correggere andando a prendere BTNSFIDA aggiungendo il Round 2
			
			          navigator.notification.alert(
						'la somma delle palle colpite deve essere 15',  // message
						alertDismissed,         // callback
						'Somma 15',            // title
						'OK'                  // buttonName
					  );
			
					   localStorage.setItem("sfida","1")
					   localStorage.setItem("round","2")
					   
					   $("#load").show()
			
					   $("#totale").html("0/15")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
			
					   
					   playAudio('successSound');

					   $("#gioco").show()
			
					   $("#going").hide()
			
			
					   setTimeout(function() {
								  
							playAudio('successSound2');
								  
							$("#load").hide()
								  
							$("#dati").show()
							$("#dati0").show()
								  
							$("#biliardo").show();

							countdown1(0);
								  
						}, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3_15(0)
					   
		}
		
		
		$(document).on("touchstart", "#going3", function(e){
					   
					   navigator.notification.alert(
													'Solo a pagamento',  // message
													alertDismissed,         // callback
													'Round 3',            // title
													'OK'                  // buttonName
													);
		});
		
		
		
		function prendinumeri3(cosa) {
			
			$("#val4").hide()
			
			$("#spinner1").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/addall/gioco10_3.php?email=sasa@tin.it",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $("#palla1").show()
				   $("#palla2").show()
				   $("#palla3").show()
				   $("#palla4").show()
				   
				   $.each(result, function(i,item){
						  
						  $("#palla1").show()
						  $("#palla2").show()
						  $("#palla3").show()
						  $("#palla4").show()
						  
						  uno = item.num1;
						  due = item.num2;
						  tre = item.num3;
						  
						  //quattro = item.num4;
						  
						  var num1 = Math.floor((Math.random() * 3));
						  
						  if (cosa==0){
						  
						    $("#palla1").attr("src","palle/"+item.num1+".png")
						    $("#palla2").attr("src","palle/"+item.num2+".png")
						    $("#palla3").attr("src","palle/"+item.num3+".png")
						  
						  }
						  else{
						    if(num1==0){
						      $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							}
						    if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
						      $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
						    }
						    if(num1==2){
							 $("#palla1").attr("src","palle/"+item.num1+".png")
							 $("#palla2").attr("src","palle/"+item.num2+".png")
						     $("#palla3").attr("src","palle/"+item.num3+"c.png")
							}
						  }
						  
						  
						  $("#spinner1").hide()
						  
						  
						  if (cosa==0){
						  
						  $("#palla1").attr("src","palle/"+item.num1+".png")
						  $("#palla2").attr("src","palle/"+item.num2+".png")
						  $("#palla3").attr("src","palle/"+item.num3+".png")
						  
						  }
						  else{
						  if(num1==0){
						  $("#palla1").attr("src","palle/"+item.num1+"c.png")
						  $("#palla2").attr("src","palle/"+item.num2+".png")
						  $("#palla3").attr("src","palle/"+item.num3+".png")
						  }
						  if(num1==1){
						  $("#palla1").attr("src","palle/"+item.num1+".png")
						  $("#palla2").attr("src","palle/"+item.num2+"c.png")
						  $("#palla3").attr("src","palle/"+item.num3+".png")
						  }
						  if(num1==2){
							 $("#palla1").attr("src","palle/"+item.num1+".png")
							 $("#palla2").attr("src","palle/"+item.num2+".png")
						     $("#palla3").attr("src","palle/"+item.num3+"c.png")
						  }
						  }

				   });
				   
			},
			error: function(){
				   
				   
			},
				   
			dataType:"jsonp"});
				
			}
			
			
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri3(cosa)
			});
			
		}
		
		
		function prendinumeri3_15(cosa) {
			
			$("#val4").hide()
			
			$("#spinner1").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15_3.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  
							  //quattro = item.num4;
							  
							  var num1 = Math.floor((Math.random() * 3));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  }
							  }
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  }
							  }

							  
						 });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri3_15(cosa)
			});
			
		}
		
		
		function prendinumeri(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco10.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+"c.png")
							  }
							  }
							  
							  /*$("#val1").html(uno)
							  $("#val2").html(due)
							  $("#val3").html(tre)
							  $("#val4").html(quattro)*/
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+"c.png")
							  }
							  }
							  
							  });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri(cosa)
			});
			
		}
		
		
		function prendinumeri_15(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+"c.png")
							  }
							  }
							  
							  /*$("#val1").html(uno)
							   $("#val2").html(due)
							   $("#val3").html(tre)
							   $("#val4").html(quattro)*/
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+"c.png")
							  }
							  }
							  
						});
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri_15(cosa)
			});
			
		}
		
		
		function prendinumerimeno1(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			

			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco10meno1.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  var quattro1 = item.num4.replace("-","")
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  
							  $("#spinner1").hide()
							  
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }

						 });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumerimano1(cosa)
			});
		}
		
		
		function prendinumerimeno1_15(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15meno1.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  var quattro1 = item.num4.replace("-","")
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumerimeno1_15(cosa)
			});
			
		}
		
		
		function countdown1(minutes) {
			
			if(localStorage.getItem("round")=="1"){
				var seconds = 59;
			}
			else{
				var seconds = 75;
			}
			
			var mins = minutes
			function tick() {
				var counter = document.getElementById("timer1");
				var current_minutes = 0;
				seconds--;
				counter.innerHTML =
				"<font size='3'>"+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+"</font>";
				if( seconds > 0 ) {
					setTimeout(tick, 1000);
					
					if( seconds == 10 ) {
						playAudio('successSound3');
					}
					
					if( seconds < 10 ) {
						counter.innerHTML =
						"<font size='3' color='red'>"+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+"</font>";
					}
					
				} else {
					
					if(localStorage.getItem("sfida")=="1"){
						
						//alert("caricadati")
						
						if(localStorage.getItem("sfidalanciata")=="1"){
							
						//alert("http://msop.it/addall/gioca1_player1.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"")
						
						$.ajax({
							   type:"GET",
							   url:"http://msop.it/addall/gioca1_player1.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"",
							   contentType: "application/json",
							   //data: {Lat:3,Longi:4},
							   timeout: 7000,
							   jsonp: 'callback',
							   crossDomain: true,
							   success:function(result){
							   
							    $.each(result, function(i,item){
									   
									  if(item.Token=="1"){
									   
									    if(localStorage.getItem("round")=="1"){
									      going2()
									    }
									    else{
									   
									       navigator.notification.alert(
											 'Punteggio',  // message
											  alertDismissed,         // callback
											  localStorage.getItem("punteggio1"),            // title
											  'OK'                  // buttonName
											);
									   
									   
									      btnsfida()
									    }
									   
									  
									  }
									  else{
									  
									  }
									  
								});
							   
							   },
							   error: function(){

							   
							    navigator.notification.alert(
															'Errore di rete, riprova sotto copertura',  // message
															alertDismissed,         // callback
															'Errore di Rete',            // title
															'OK'                  // buttonName
															);
							   
							   },
							   
							   dataType:"jsonp"});
						 }
						else{
							
							//alert("http://msop.it/addall/gioca1_player2.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"")
							
							$.ajax({
								   type:"GET",
								   url:"http://msop.it/addall/gioca1_player2.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"",
								   contentType: "application/json",
								   //data: {Lat:3,Longi:4},
								   timeout: 7000,
								   jsonp: 'callback',
								   crossDomain: true,
								   success:function(result){
								   
							        $.each(result, function(i,item){
									   
									   if(item.Token=="1"){
										   
										   if(localStorage.getItem("round")=="1"){
										    going2()
									       }
										   else{
										   
										     navigator.notification.alert(
												'Punteggio',  // message
												alertDismissed,         // callback
												localStorage.getItem("punteggio1"),            // title
												'OK'                  // buttonName
											 );
										   
										     btnsfida()
									       }
									   
									   }
									   else{
									   
									   }
									   
									});
								   
								   },
								   error: function(){
								   

								   
								   navigator.notification.alert(
																'Errore di rete, riprova sotto copertura',  // message
																alertDismissed,         // callback
																'Errore di Rete',            // title
																'OK'                  // buttonName
																);
								   
								   },
								   
								   dataType:"jsonp"});
						}
						
					}
					else{
						$.ajax({
							   type:"GET",
							   url:"http://msop.it/addall/segnapunti.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"",
							   contentType: "application/json",
							   //data: {Lat:3,Longi:4},
							   timeout: 7000,
							   jsonp: 'callback',
							   crossDomain: true,
							   success:function(result){
							   
							   $.each(result, function(i,item){
									  
									if(item.Token=="1"){
									  navigator.notification.alert(
																   'Punteggio caricato.',  // message
																   alertDismissed,         // callback
																   localStorage.getItem("punteggio1"),            // title
																   'OK'                  // buttonName
																   );
									  
									  window.location.href = "index.html";
									  
									}
									else{
									  
									  window.location.href = "index.html";
									  
									}
									  
								});
							   
							   },
							   error: function(){
							   
							   
							   
							   navigator.notification.alert(
															'Errore di rete, riprova sotto copertura',  // message
															alertDismissed,         // callback
															'Errore di Rete',            // title
															'OK'                  // buttonName
															);
							   
							   window.location.href = "index.html";
							   
							   },
							   
							   dataType:"jsonp"});
					}
					
					
					//window.location.href = "index.html";
					
					/*$("#biliardo").hide()
					localStorage.setItem("start","1")
					
					$("#btnallenati").show()
					$("#btnsfida").show()
					$("#btnlancia").show()
					
					
					admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);//show banner at the top of app*/
				}
			}
			
			tick();
		}
		

		
		$(document).on("touchstart", "#val0", function(e){
								
			localStorage.setItem("session10","0")
					   
			localStorage.setItem("esatte","0")
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			$("#totale").html("0/10")
			$("#bianca0").hide()
			$("#palla1").show()
			/*$("#bianca").hide()
			$("#bianca1").hide()
			$("#bianca2").hide()*/
					   
		});
		
		
		$(document).on("touchstart", "#val00", function(e){
								
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   
					   $("#bianca").hide()
					   $("#palla3").show()
					   
					   
		});
		
		$(document).on("touchstart", "#val000", function(e){
								
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   
					   $("#bianca1").hide()
					   $("#palla2").show()
					   
					   
		});
		
		$(document).on("touchstart", "#val0000", function(e){
								
			localStorage.setItem("session10","0")
					   
			localStorage.setItem("esatte","0")
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			$("#totale").html("0/10")
					   
			$("#bianca2").hide()
			 $("#palla4").show()
		});
		
		
		
		$(document).on("touchstart", "#val1", function(e){
					   
					   var parametro=10;
					   playAudio('successSound');
					   
					   $("#gioco").show()
					   
					   $("#bianca0").show()
					   $("#palla1").hide()
					   
								
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(uno));
					   localStorage.setItem("session10",valore)
					   
					   
					   if(localStorage.getItem("round")=="2"){
					     parametro = 15;
					     $("#totale").html(valore+"/15")
					     var numero = 2;
					     var numero1 = 3;
					     var numero2 = 4;
					     var numero3 = 5;
					     var numero4 = 6;
					     var numero5 = 7;
					   
					     if((Number(localStorage.getItem("esatte")))==5){
					      var bonus = 10;
					     }
					     else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
						 }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
						else{
					      var bonus = 0;
					     }
					   }
					   else if(localStorage.getItem("round")=="3"){
					     parametro = 20;
					     $("#totale").html(valore+"/15")
					   }
					   else{
						parametro = 10;
					    $("#totale").html(valore+"/10")
						var numero = 1;
					    var numero1 = 2;
					    var numero2 = 3;
					    var numero3 = 4;
					    var numero4 = 5;
					    var numero5 = 6;
					   
					    if((Number(localStorage.getItem("esatte")))==5){
					     var bonus = 5;
					    }
						else if((Number(localStorage.getItem("esatte")))==10){
					     var bonus = 10;
						}
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
						else{
					     var bonus = 0;
					    }
					   }
					   
					   if(valore==parametro){
					      somma = Number(somma)+1
						  $("#somma").html(somma)
					   
					   if(localStorage.getItem("round")=="2"){
					    $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					    $("#totale").html("0/10")
					   }
					   else{
					     $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					      $("#palla1").hide()
					      $("#palla2").hide()
						  $("#palla3").hide()
					      $("#palla4").hide()
					   
					      playAudio('successSound2');
					   
						  localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					      $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   
						  $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   

						  
						  if ((somma>=10)&&(somma<16)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
					        if(localStorage.getItem("round")=="1"){
						     prendinumeri3(1)
						    }
					        else if(localStorage.getItem("round")=="2"){
					          prendinumeri3_15(1)
					        }
					        else{
					   
					        }
					   
					      }
						  else if((somma>=16)&&(somma<25)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						    $("#val4").show()
					   
					        if(localStorage.getItem("round")=="1"){
					          prendinumeri(0)
					        }
							else if(localStorage.getItem("round")=="2"){
					         prendinumeri_15(0)
					        }
					        else{
					   
					        }
					      }
						  else if((somma>=25)&&(somma<30)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						     $("#val4").show()
					   
						     if(localStorage.getItem("round")=="1"){
					           prendinumeri(1)
					         }
					         else if(localStorage.getItem("round")=="2"){
					          prendinumeri_15(1)
					         }
					         else{
					   
					         }
					   
						   }
					      else if((somma>=30)&&(somma<40)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					       $("#val4").show()

						    if(localStorage.getItem("round")=="1"){
					          prendinumerimeno1(0)
					        }
					        else if(localStorage.getItem("round")=="2"){
					         prendinumerimeno1_15(0)
							}
					        else{
					   
					        }
					   
						  }
					      else if((somma>=40)&&(somma<99)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
						   $("#punteggio").html(punto)
					   
					        $("#val4").show()
					   

					        if(localStorage.getItem("round")=="1"){
					          prendinumerimeno1(1)
					        }
					        else if(localStorage.getItem("round")=="2"){
					         prendinumerimeno1_15(1)
					        }
					        else{
					   
					        }
					   
						  }
						  else{
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
						   localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					        $("#val4").hide()
					   

					        if(localStorage.getItem("round")=="1"){
					          prendinumeri3(0)
					        }
					        else if(localStorage.getItem("round")=="2"){
					          prendinumeri3_15(0)
					        }
					        else{
					   
					        }
					   
					      }
						  
					   }

		 });
		
		
		
		$(document).on("touchstart", "#val2", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca1").show()
					   $("#palla2").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(due));
					   localStorage.setItem("session10",valore)
					   
					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/15")
					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
						  somma = Number(somma)+1
						  $("#somma").html(somma)
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/10")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					     $("#palla1").hide()
					     $("#palla2").hide()
						 $("#palla3").hide()
					     $("#palla4").hide()
					   
						  playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   
					   }
					   
					   }
						  
					   }
					   

		});
		
		
		$(document).on("touchstart", "#val3", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca").show()
					   $("#palla3").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(tre));
					   localStorage.setItem("session10",valore)
					   
					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/15")
					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
					   somma = Number(somma)+1
						  $("#somma").html(somma)
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/10")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					      $("#palla1").hide()
					      $("#palla2").hide()
						  $("#palla3").hide()
					      $("#palla4").hide()
					   
					      playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   
					   }
					   
					   }
						  
					   }
					   
								
		});
		
		
		$(document).on("touchstart", "#val4", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca2").show()
					   $("#palla4").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(quattro));
					   localStorage.setItem("session10",valore)

					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/15")
					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
					     somma = Number(somma)+1
						  $("#somma").html(somma)
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/10")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					     $("#palla1").hide()
					     $("#palla2").hide()
						 $("#palla3").hide()
					     $("#palla4").hide()
					   
						 playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))

						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   
					   }
					   
					   }
						  
					   }
					   
		});
		
		

		
		$(document).on("tap", "#altro", function(e){
					   
			$("#btnpanel").click();
					   
		});
		
		
		
		
		$(document).on("tap", "#impostazioni", function(e){
					   
			alert("fine");
					   
		});
		
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
					   
			window.location.href = "Login.html";
					   
		});
		
		

		
		// PER FOTOCAMERA //
		
		
		$(document).on("touchstart", "#prendifoto", function(e){
					   
					   navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
												   destinationType: Camera.DestinationType.FILE_URI,
												   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
												   targetWidth: 200,
												   targetHeight: 200
												   });
					   });
		
		
		$(document).on("touchstart", "#scattafoto", function(e){
					   
					   navigator.camera.getPicture(Successo, onFail, { quality: 30,
												   destinationType: Camera.DestinationType.DATA_URL,
												   encodingType: Camera.EncodingType.PNG,
												   targetWidth: 200,
												   targetHeight: 200
												   });
					   });
		
		
		function Successo(imageData) {
			
			localStorage.setItem("Foto1", "data:image/png;base64," + imageData);
			
			var image000 = document.getElementById('imgutente2');
			image000.src = localStorage.getItem("Foto1");
			
			//salvafoto("Sridesv2")
			
		}
		
		
		function onFail(message) {
			navigator.notification.alert(
										 message,  // message
										 alertDismissed,         // callback
										 'Foto',            // title
										 'OK'                  // buttonName
										 );
		}
		
		
		function onPhotoURISuccess(imageURI) {
			// Uncomment to view the image file URI
			// console.log(imageURI);
			// Get image handle
			//
			var largeImage = document.getElementById('imgfoto');
			// Unhide image elements
			//
			largeImage.style.display = 'block';
			// Show the captured photo
			// The inline CSS rules are used to resize the image
			//
			largeImage.src = imageURI;
		}
		
		
		function uploadPhoto(imageURI) {
			var largeImage = document.getElementById('imgutente2');
			// Unhide image elements
			//
			largeImage.style.display = 'block';
			// Show the captured photo
			// The inline CSS rules are used to resize the image
			//
			largeImage.src = imageURI;
			
			
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType="image/jpeg";
			
			var params = {};
			params.value1 = "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".","")+"";
			params.value2 = "param";
			
			options.params = params;
			options.chunkedMode = false;
			
			var ft = new FileTransfer();
			ft.upload(imageURI, "http://msop.it/uploadaddall.php", win, fail, options);
			
		}
		
		
		
		function win(r) {
			console.log("Code = " + r.responseCode);
			console.log("Response = " + r.response);
			console.log("Sent = " + r.bytesSent);
			

			$.ajax({
				   type:"GET",
				   url:"http://msop.it/addall/caricafoto.php?nome=add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".","")+".jpg&email="+localStorage.getItem("email")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				    localStorage.setItem("nomefoto", "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".",""));
				   //$.each(result, function(i,item){
				   
				   //});
				   
				   //alert(r.response);

				   
				   },
				   error: function(){
				   
				     navigator.notification.alert(
												'errore nel caricamento della foto, riprova in seguito',  // message
												alertDismissed,         // callback
												'Foto',            // title
												'OK'                  // buttonName
												);
				   
				   
				   },
			dataType:"jsonp"});
			
			
			
			
			
			//$("#imgutente2").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("foto"));
			/*$("#imgfoto").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");
			 $("#imguser").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");
			 $("#imgutente").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");*/
			
		}
		
		function fail(error) {
			alert("An error has occurred: Code = " + error);
		}
		
		
		
    }
}




function gpsonError(){
	
	//alert()

}



function onPause() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function onPause3() {
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;//January is 0, so always add + 1
	
	var ora = today.getHours()
	if(ora<10){ora="0"+ora}
	
	var minuti = today.getMinutes();
	if(minuti<10){minuti="0"+minuti}
	
	var secondi = today.getSeconds();
	if(secondi<10){secondi="0"+secondi}
	
	//self.document.formia.ora.value = ora + ":" + minuti
	
	var yyyy = today.getFullYear();
	if(dd<10){dd="0"+dd}
	if(mm<10){mm="0"+mm}
	today = dd+'/'+mm+'/'+yyyy;
	
	$("#distanza3").html("<span style = 'font-size: 18px;'>"+ ora +","+ minuti +","+ secondi +"</span>");
	
	//if(secondi==10){
		//clearInterval(myTimer);
	//}
	
	$.ajax({
		   type:"GET",
		   url:"http://gtechplay.com/mycollection/www/Posizione.asp",
		   contentType: "application/json",
		   data: {Lat:3,Longi:4},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   //$.each(result, function(i,item){
		   //});
		   
		   
		   },
		   error: function(){
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function playAudio(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	
	my_media.play();
	
	
	/*setTimeout(function() {
			   my_media.stop();
			   }, 3000);*/
	
}


$(document).on("touchstart", "#mandaemail", function(e){
			   
	cordova.plugins.email.open({
		to:      "info@pokeranswer.it",
		subject: "Contattaci",
		body:    "Richiedi informazioni",
		isHtml:  true
	});
	
			   
});



