// Global Variables
//jsGlobalColorRateUp				=	'#0FD634';
//jsGlobalColorRateUp				=	'#24bc09';
//jsGlobalColorRateDown			=	'#ED093F';

/*
jsGlobalColorRateDown			=	'#d10011';
jsGlobalColorRateUnchanged		=	'transparent';
jsGlobalDataStreamingOffHTML	=	"<div class='cl_stream_off' >Data Streaming is <span style='color:#E35E1B'>off... </span> </div>";
*/

jsGlobalColorRateUp									=	'-webkit-linear-gradient(#12C708, #3AA334)';
jsGlobalColorRateDown						=	'-webkit-linear-gradient(#EB0909, #C4184B)';
jsGlobalColorRateUnchanged		=	'transparent';

jsGlobalShowBlankRate = "-";


jsGblXauAsk = 0;
jsGblXagAsk = 0;
jsGblUsdAsk = 0;

jsGblVJAG999RBid = 0;
jsGblVJAG999TBid = 0;
jsGblVJAGFT999RBid = 0;
jsGblVJAGFT999TBid = 0;
jsGblVJAS999RBid = 0;
jsGblVJAS999TBid = 0;

jsGblVJAG999RAsk 		= 0;
jsGblVJAG999TAsk 		= 0;
jsGblVJAGFT999RAsk = 0;
jsGblVJAGFT999TAsk = 0;
jsGblVJAS999RAsk 		= 0;
jsGblVJAS999TAsk 		= 0;


jsGlobalUserVisitURL	= "http://local_sbrb/dynamic/SBRBPGUpdateMobileUserVisitCount.php";
jsGlobalGetScrollURL	= "http://local_sbrb/dynamic/SBRBPGGetMobileScrollMessage.php";
//jsGlobalJsonpUrl 		= 'http://local_sbrb/dynamic/vbPgGetMobileRatesDynGet.php';
jsGlobalJsonpUrl 		= 'http://127.0.0.1:9005';

//jsGlobalUserVisitURL	= "http://www.vardhamanbullion.com/dynamic/vbPGUpdateMobileUserVisitCount.php";
//jsGlobalGetScrollURL	= "http://www.vardhamanbullion.com/dynamic/vbPGGetMobileScrollMessage.php";
//jsGlobalJsonpUrl 		= 'http://www.vardhamanbullion.com/dynamic/vbPgGetMobileRatesDynGet.php';		
//jsGlobalJsonpUrl 		= 'http://www.vardhamanbullion.com/dynamic/vbPgGetMobileRatesDynGet.php';		

//------------------ Global Config for Jquery Mobile ------------->
// Set Fallback transition for devices that lack 3D support
$.mobile.transitionFallbacks.slideout = "none";

// Changed the default behavior from fade to flip
$.mobile.defaultPageTransition  = "flip";




$(document).on('vclick', 'a', function(e){
	
	var jsObjID, jsObjHref, jsVarPrevDefault;
	jsVarPrevDefault = true;
	

	jsObjID = this.id;
	jsObjHref = this.href;

	if( jsObjID == "id_a_sbrb_booking" || jsObjID == "id_a_sbrb_contact" 
			||  jsObjID == "id_a_sbrb_rtgs" 
			|| jsObjID == "id_a_backbtn_booking" ||  jsObjID == "id_a_backbtn_contact"
			 || jsObjID == "id_a_backbtn_rtgs" ){

		jsVarPrevDefault = true;

		// Prevent default behavior
		e.preventDefault();		

		// Navigate Now
		$.mobile.navigate( jsObjHref );
	}
	
	

		//$.mobile.navigate( "#myBookingPage" );
		//location.hash = "myBookingPage";

	/*	
	var jsVarPrevDefault;
	var jsPopId;
	
	jsPopId = "";
	jsVarPrevDefault = false;
	switch(this.id)
	{
		
		case "id_a_vb_booking":
			jsPopId = "myPopupBooking";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_contact":
			jsPopId = "myPopupContact";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_rtgs":
			jsPopId = "myPopupRTGS";
			jsVarPrevDefault = true;
		break;
	}
	
	
	
	// Launch PopUP

	if( jsPopId != "" ) {
		// Prevent Default behavior
		if(jsVarPrevDefault == true)
		{
			e.preventDefault();		
		}
		
		// Launch animated popup
		$( "#" + jsPopId ).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$(this).removeClass("animated zoomIn");
		});
		
		$( "#" + jsPopId  ).popup( "open" );
		
		
	}		
*/			

});


function jsPostWindowLoad()
{	
	// Load Rates	
	jsMobRefVBRates();
	
}			//End jsPostWindowLoad()

function jsPostDocumentReady()
{	

	// Update Scroll message
		jsSBRBAjaxUpdScroll();
		
		// Update VB Mobile User Visit Count
		jsSBRBAjaxUdpateUserVisitCount();
	
	
}			//End jsPostWindowLoad()



function jsSBRBAjaxUpdScroll()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	jsParams = jsParams + "&";
	jsParams = jsParams + "PIN=18000101";
	

	$.ajax({type:					"GET", 
					async:			"true",
					url:			jsGlobalGetScrollURL,
					dataType: 		"jsonp",
					data: 			jsParams,
					crossDomain:	true,          
					cache:			false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 			"callback",
					jsonpCallback: 	"jsSBRBProcessScrollMessageJSONPResult",					
					success: 		onAjaxVBMobileGetScrollSuccess,
					error: 			onAjaxVBMobileGetScrollError
	});	
	
	
}	// End jsSBRBAjaxUpdScroll


function onAjaxVBMobileGetScrollSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxVBMobileGetScrollError( jsXhrObj )
{
	// Do Nothing
}


function jsSBRBProcessScrollMessageJSONPResult( jsonData )
{

	var jsCode, jsScrollMsg;
	
	if( typeof jsonData == "object") {

		jsCode						= 	jsonData.CODE;	
		jsScrollMsg		= 	jsonData.SCROLLMSG;	
		
		if(jsCode == "S")	{
			// Set Scroll Value
			//$("#id_scroll_marq span").html(jsScrollMsg);
			//document.getElementById("id_scroll_marq").innerHTML = jsScrollMsg;		

			//alert(jsScrollMsg);
			$('.cl_marq_scrollMsg').html(jsScrollMsg);	
			/* $('.cl_marq_scrollMsg').marquee();	*/
			
			$('.cl_marq_scrollMsg').marquee({
					speed: 75,
					gap: 50,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: false,
					pauseOnHover: true
				});  
		

		}
}
	
}




function jsSBRBAjaxUdpateUserVisitCount()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	

	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalUserVisitURL,
					dataType: 		"jsonp",
					data: 				jsParams,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsSBRBPostUserVisitUpdate",
					success: 			onAjaxSBRBMobileUserVisitSuccess,
					error: 				onAjaxSBRBMobileUserVisitError
		});				

}	  //jsSBRBAjaxUdpateUserVisitCount

function onAjaxSBRBMobileUserVisitSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxSBRBMobileUserVisitError( jsXhrObj )
{
	// Do Nothing
}




function jsSBRBPostUserVisitUpdate( jsonData )
{
	// Do Nothing
}


function jsMobRefVBRates()
{
	var jsTime;
	jsMobUpdVBRates();
	jsTime = setTimeout("jsMobRefVBRates()", 2000);   // 2 Second

}


function jsMobUpdVBRates()
{
   // Local data declarations
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	var jsURL, jsParamStr;
	
	/*
	//------- Format current UTC Date start -------->	
	jsToday = new Date();
	jsCurrYear 		= jsToday.getUTCFullYear();
	jsCurrMonth		= jsToday.getUTCMonth();
	jsCurrDate		= jsToday.getUTCDate();
	
	// Format Month
	jsCurrMonth = jsCurrMonth + 1;	
	if( jsCurrMonth < 10 )
	{
		jsCurrMonthStr = '0' + jsCurrMonth.toString();
	}
	else
	{
		jsCurrMonthStr = jsCurrMonth;
	}
	
	// Format Day
	if(jsCurrDate < 10)
	{
		jsCurrDateStr = '0' + jsCurrDate.toString();
	}
	else
	{
		jsCurrDateStr = jsCurrDate;
	}
	
	jsUTCDateStr = jsCurrYear.toString() + jsCurrMonthStr.toString() + jsCurrDateStr.toString();
	//------- Format current UTC Date end -------->	
	 	
	// Get Hidden values
	var jsCurrParam1,  jsCurrParam2, jsCurrParam3, jsCurrParam4, jsCurrParam5;
	var jsCurrParam6,  jsCurrParam7, jsCurrParam8, jsCurrParam9, jsCurrParam10;
	var jsCurrParam11,  jsCurrParam12, jsCurrParam13, jsCurrParam14, jsCurrParam15;
	

	jsCurrParam1 		   = document.getElementById('id_hid_mob_param1').value;
	jsCurrParam2 		    = document.getElementById('id_hid_mob_param2').value;
	jsCurrParam3			= document.getElementById('id_hid_mob_param3').value;
	jsCurrParam4			= document.getElementById('id_hid_mob_param4').value;
	jsCurrParam5			= document.getElementById('id_hid_mob_param5').value;
	jsCurrParam6			= document.getElementById('id_hid_mob_param6').value;
	jsCurrParam7			= document.getElementById('id_hid_mob_param7').value;
	jsCurrParam8			= document.getElementById('id_hid_mob_param8').value;
	jsCurrParam9			= document.getElementById('id_hid_mob_param9').value;
	jsCurrParam10			= document.getElementById('id_hid_mob_param10').value;
	jsCurrParam11			= document.getElementById('id_hid_mob_param11').value;
	jsCurrParam12			= document.getElementById('id_hid_mob_param12').value;
	jsCurrParam13			= document.getElementById('id_hid_mob_param13').value;
	jsCurrParam14			= document.getElementById('id_hid_mob_param14').value;
	jsCurrParam15			= document.getElementById('id_hid_mob_param15').value;
	
	jsParamStr='';
	jsParamStr = jsParamStr + 'PIN=' + jsUTCDateStr;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P001=' + jsCurrParam1;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P002=' + jsCurrParam2;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P003=' + jsCurrParam3;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P004=' + jsCurrParam4;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P005=' + jsCurrParam5;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P006=' + jsCurrParam6;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P007=' + jsCurrParam7;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P008=' + jsCurrParam8;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P009=' + jsCurrParam9;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P010=' + jsCurrParam10;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P011=' + jsCurrParam11;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P012=' + jsCurrParam12;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P013=' + jsCurrParam13;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P014=' + jsCurrParam14;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P015=' + jsCurrParam15;
	
	*/
	var jsNow, jsDate, jsMth, jsFullYear, 
	jsParamPin, jsParamUTCDateStr; 
    jsNow = new Date();
    var jsDate      = jsNow.getUTCDate();        
    var jsMth       = jsNow.getUTCMonth();        
    var jsFullYear  = jsNow.getUTCFullYear();
    
    // Format Date
    jsDate = (jsDate > 9)?(jsDate):( "0" + jsDate);
    
    // Format Month
    jsMth += 1;
    jsMth = (jsMth > 9)?(jsMth):( "0" + jsMth);
    
    // Format it to YYYYMMDD
    jsUTCDateStr   = jsFullYear.toString() + jsMth.toString() + jsDate.toString();

    jsParamPin = "18000101";

	jsParamStr='';
	jsParamStr = jsParamStr + 'TOKEN=' + "90JJSHFJSHJ()(k$$";
	jsParamStr = jsParamStr + "&";
	jsParamStr = jsParamStr + "PIN=" + jsParamPin;
	jsParamStr = jsParamStr + "&";
	jsParamStr = jsParamStr + "PWD=" + jsUTCDateStr;


	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalJsonpUrl,
					dataType: 		"jsonp",
					data: 				jsParamStr,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsProcessJSONPResult",					
					success: 			onAjaxMobGetRatesSuccess,
					error: 				onAjaxMobGetRatesError
		});			
	
	
}

function onAjaxMobGetRatesSuccess(  jsResult )
{

}

function onAjaxMobGetRatesError()
{
	//-- Do not Output Streaming Off HTML becasue this will impace users witl slow internet connection
	//-- Screen will be switching between 'no data' and 'live data'
	/*
		var jsGridDivObj;
		jsGridDivObj	=	document.getElementById("id_div_grid_outer");
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;
	*/
}

function jsProcessJSONPResult( jsResult )
{
	
	if( typeof jsResult != "object" ){
		return false;
	}

	//alert(   JSON.stringify(jsResult)   );
	//return;

	var jskeyType, jsRateFlag, jsComexFlag, jsBuyColFlag, jsSellColFlag;
	var jsJSONObjArr;
	var jsContRowClass;
	var jsConstYes = 'Y';
	var jsConstNo = 'N';
	var jsUpdateContractBool;

	// jsResult is already an object, So Stringify and then convert to Javascript Object

  jsJSONObjArr = $.parseJSON( JSON.stringify( jsResult ) );

  if( typeof jsJSONObjArr != "object" ){
		return false;
	}

		//alert( JSON.stringify(jsJSONObjArr)  );
	
	// Check if Success / Error  
	jskeyType 		= jsJSONObjArr.RESULT[0].KEY;
	jsFlag 					= jsJSONObjArr.RESULT[0].FLAG;
	jsErrCode		= jsJSONObjArr.RESULT[0].CODE;
	jsErrDesc			= jsJSONObjArr.RESULT[0].DESC;
	
	//alert(jsFlag);
	if ( jsFlag == "S"){
		
		// FadeOut Spinner 
		if(  $(".cl_spin_loader_wrapper").is(':visible') ){			
			$(".cl_spin_loader_wrapper").fadeOut("slow");
		}

		jskeyType 				= jsJSONObjArr.RESULT[1].KEY;
		jsRateFlag 			= jsJSONObjArr.RESULT[1].RATEFLAG;
		jsComexFlag		= jsJSONObjArr.RESULT[1].COMEXFLAG;		
		jsBuyColFlag				= jsJSONObjArr.RESULT[1].BUYFLAG;		
		jsSellColFlag				= jsJSONObjArr.RESULT[1].SELLFLAG;		



		// Comex Rates Hide / Show
		if( jsComexFlag == jsConstYes ) {
			//$('.cl_tbl_comex_table_wrapper').css("display","table");
			//$('.cl_tbl_comex_table_wrapper').show("slow");
			//$('.cl_tbl_comex_table_wrapper').fadeIn("slow");
			//alert( jsComexFlag );
			$('.cl_div_grid_comex_wrapper').removeClass("animated fadeOut").addClass("animated fadeIn");
		}
		else {
			  //$('.cl_tbl_comex_table_wrapper').css("display","none");
			  //$('.cl_tbl_comex_table_wrapper').hide("slow");
			  //$('.cl_tbl_comex_table_wrapper').fadeOut("slow");
			  $('.cl_div_grid_comex_wrapper').removeClass("animated fadeIn").addClass("animated fadeOut");
		}

		// Symbol  Rates Hide / Show
		if( jsRateFlag == jsConstYes ) {			
			$('.cl_symbol_loc_vja').removeClass("animated fadeOut").addClass("animated fadeIn");
			$('.cl_symbol_hdr_vja').removeClass("animated fadeOut").addClass("animated fadeIn");
			$('.cl_div_grid_vja_symbol_wrapper').removeClass("animated fadeOut").addClass("animated fadeIn");
			
		}
		else {
			$('.cl_symbol_loc_vja').removeClass("animated fadeIn").addClass("animated fadeOut");
			$('.cl_symbol_hdr_vja').removeClass("animated fadeIn").addClass("animated fadeOut");
			$('.cl_div_grid_vja_symbol_wrapper').removeClass("animated fadeIn").addClass("animated fadeOut");
		}

		// Buy Column Hide / Show
		if( jsBuyColFlag == jsConstYes ) {			
			$('.cl_div_vja_buycol').show("slow");

			// --- Update Grid and Block Layouts			
			$('.cl_symbol_hdr_vja').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('.cl_symbol_hdr_vja  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");

			$('#id_div_grid_vja_g999r').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_g999r  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");
			$('#id_div_grid_vja_g999t').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_g999t  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");
			$('#id_div_grid_vja_gft999r').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_gft999r  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");
			$('#id_div_grid_vja_gft999t').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_gft999t  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");
			$('#id_div_grid_vja_s999r').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_s999r  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");
			$('#id_div_grid_vja_s999t').removeClass("ui-grid-a").addClass("ui-grid-b");
			$('#id_div_grid_vja_s999t  div:nth-child(3)').removeClass("ui-block-b").addClass("ui-block-c");

		}


		else {			
			$('.cl_div_vja_buycol').hide("slow");	

			// --- Update Grid and Block Layouts
			$('.cl_symbol_hdr_vja').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('.cl_symbol_hdr_vja  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");

			$('#id_div_grid_vja_g999r').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_g999r  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");
			$('#id_div_grid_vja_g999t').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_g999t  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");
			$('#id_div_grid_vja_gft999r').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_gft999r  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");
			$('#id_div_grid_vja_gft999t').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_gft999t  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");
			$('#id_div_grid_vja_s999r').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_s999r  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");
			$('#id_div_grid_vja_s999t').removeClass("ui-grid-b").addClass("ui-grid-a");
			$('#id_div_grid_vja_s999t  div:nth-child(3)').removeClass("ui-block-c").addClass("ui-block-b");

		}

		// Sell Column Hide / Show
		if( jsSellColFlag == jsConstYes ) {			
			$('.cl_div_vja_sellcol').show("slow");
		}
		else {			
			$('.cl_div_vja_sellcol').hide("slow");
		}

		// Exit if Comex and Rate Flags are both N
		 if( jsComexFlag == jsConstNo && jsRateFlag == jsConstNo ) {
		 	// Exit
		 	return;
		 }




		//-------------------- Update Comex Data ---------------->
		if( jsComexFlag == jsConstYes ) {
			
			// XAUUSD
			jsComexRowkeyType 	= jsJSONObjArr.RESULT[2].KEY;
			jsComexRowBid 					= jsJSONObjArr.RESULT[2].BID;
			jsComexRowAsk 				= jsJSONObjArr.RESULT[2].ASK;
			jsComexRowHigh 				= jsJSONObjArr.RESULT[2].HIGH;
			jsComexRowLow 				= jsJSONObjArr.RESULT[2].LOW;
			jsComexRowAct 					= jsJSONObjArr.RESULT[2].ACT;
			
			$('#id_span_data_xauusd_ask').html(jsComexRowAsk);
			$('#id_span_data_xauusd_high').html(jsComexRowHigh);
			$('#id_span_data_xauusd_low').html(jsComexRowLow);

			if( jsComexRowAct == jsConstYes ){
				//$('.cl_div_symbol_xauusd').css("display","table-row");
				$('.cl_div_symbol_xauusd').css("display","block");
			}
			else{
				$('.cl_div_symbol_xauusd').css("display","none");
			}


			// Apply Color - Ask
			if( jsGblXauAsk == 0 || jsGblXauAsk == 0.00){
				//$('#id_span_data_xauusd_ask').css("color", jsGlobalColorRateUnchanged);
				$('#id_span_data_xauusd_ask').css("background", jsGlobalColorRateUnchanged);
			}
			else {

					if(isNaN(jsComexRowAsk) || jsComexRowAsk == 0 || jsComexRowAsk == 0.00 ){
						//$('#id_span_data_xauusd_ask').css("color", jsGlobalColorRateUnchanged);											
						$('#id_span_data_xauusd_ask').css("background", jsGlobalColorRateUnchanged);											
						}
						else if ( jsComexRowAsk > jsGblXauAsk ){
								//$('#id_span_data_xauusd_ask').css("color", jsGlobalColorRateUp );					
								$('#id_span_data_xauusd_ask').css("background", jsGlobalColorRateUp );					
						}
						else if ( jsComexRowAsk < jsGblXauAsk ){
								//$('#id_span_data_xauusd_ask').css("color", jsGlobalColorRateDown );	
								$('#id_span_data_xauusd_ask').css("background", jsGlobalColorRateDown );	

						}
						else{
							//$('#id_span_data_xauusd_ask').css("color", jsGlobalColorRateUnchanged);	
							$('#id_span_data_xauusd_ask').css("background", jsGlobalColorRateUnchanged);	
						}

			}		// End  else

			// Update Global Variable			
			if( ! isNaN(jsComexRowAsk) ){			
				jsGblXauAsk	=	jsComexRowAsk;
			}

			

			// XAGUSD
			jsComexRowkeyType 	= jsJSONObjArr.RESULT[3].KEY;
			jsComexRowBid 					= jsJSONObjArr.RESULT[3].BID;
			jsComexRowAsk 				= jsJSONObjArr.RESULT[3].ASK;
			jsComexRowHigh 				= jsJSONObjArr.RESULT[3].HIGH;
			jsComexRowLow 				= jsJSONObjArr.RESULT[3].LOW;
			jsComexRowAct 					= jsJSONObjArr.RESULT[3].ACT;

			$('#id_span_data_xagusd_ask').html(jsComexRowAsk);
			$('#id_span_data_xagusd_high').html(jsComexRowHigh);
			$('#id_span_data_xagusd_low').html(jsComexRowLow);

			if( jsComexRowAct == jsConstYes ){
				//$('.cl_comex_tr_controw_xagusd').css("display","table-row");
				$('.cl_div_symbol_xagusd').css("display","block");
			}
			else{
				$('.cl_div_symbol_xagusd').css("display","none");	
			}


			// Apply Color - Ask
			if( jsGblXagAsk == 0 || jsGblXagAsk == 0.00 ){
				//$('#id_span_data_xagusd_ask').css("color", jsGlobalColorRateUnchanged);
				$('#id_span_data_xagusd_ask').css("background", jsGlobalColorRateUnchanged);
			}
			else {

					if(isNaN(jsComexRowAsk) || jsComexRowAsk == 0 || jsComexRowAsk == 0.00 ){
						//$('#id_span_data_xagusd_ask').css("color", jsGlobalColorRateUnchanged);											
						$('#id_span_data_xagusd_ask').css("background", jsGlobalColorRateUnchanged);											
						}
						else if ( jsComexRowAsk > jsGblXagAsk ){
								//$('#id_span_data_xagusd_ask').css("color", jsGlobalColorRateUp );					
								$('#id_span_data_xagusd_ask').css("background", jsGlobalColorRateUp );					
						}
						else if ( jsComexRowAsk < jsGblXagAsk ){
								//$('#id_span_data_xagusd_ask').css("color", jsGlobalColorRateDown );	
								$('#id_span_data_xagusd_ask').css("background", jsGlobalColorRateDown );	

						}
						else{
							//$('#id_span_data_xagusd_ask').css("color", jsGlobalColorRateUnchanged);	
							$('#id_span_data_xagusd_ask').css("background", jsGlobalColorRateUnchanged);	
						}

			}		// End  else


			// Update Global Variable
			if( ! isNaN(jsComexRowAsk) ){			
				jsGblXagAsk	=	jsComexRowAsk;
			}


			// USDINR
			jsComexRowkeyType 	= jsJSONObjArr.RESULT[4].KEY;
			jsComexRowBid 					= jsJSONObjArr.RESULT[4].BID;
			jsComexRowAsk 				= jsJSONObjArr.RESULT[4].ASK;
			jsComexRowHigh 				= jsJSONObjArr.RESULT[4].HIGH;
			jsComexRowLow 				= jsJSONObjArr.RESULT[4].LOW;
			jsComexRowAct 					= jsJSONObjArr.RESULT[4].ACT;

			$('#id_span_data_usdinr_ask').html(jsComexRowAsk);
			$('#id_span_data_usdinr_high').html(jsComexRowHigh);
			$('#id_span_data_usdinr_low').html(jsComexRowLow);

			if( jsComexRowAct == jsConstYes ){
				//$('.cl_div_symbol_usdinr').css("display","table-row");
				$('.cl_div_symbol_usdinr').css("display","block");
			}
			else{
				$('.cl_div_symbol_usdinr').css("display","none");	
			}



			// Apply Color - Ask
			if( jsGblUsdAsk == 0 || jsGblUsdAsk == 0.00 ) {
				//$('#id_span_data_usdinr_ask').css("color", jsGlobalColorRateUnchanged);
				$('#id_span_data_usdinr_ask').css("background", jsGlobalColorRateUnchanged);
			}
			else {

					if(isNaN(jsComexRowAsk) || jsComexRowAsk == 0 || jsComexRowAsk == 0.00 ){
						//$('#id_span_data_usdinr_ask').css("color", jsGlobalColorRateUnchanged);											
						$('#id_span_data_usdinr_ask').css("background", jsGlobalColorRateUnchanged);											
						}
						else if ( jsComexRowAsk > jsGblUsdAsk ) {
								//$('#id_span_data_usdinr_ask').css("color", jsGlobalColorRateUp );					
								$('#id_span_data_usdinr_ask').css("background", jsGlobalColorRateUp );					
						}
						else if ( jsComexRowAsk < jsGblUsdAsk ) {
								//$('#id_span_data_usdinr_ask').css("color", jsGlobalColorRateDown );	
								$('#id_span_data_usdinr_ask').css("background", jsGlobalColorRateDown );	

						}
						else {
							//$('#id_span_data_usdinr_ask').css("color", jsGlobalColorRateUnchanged);	
							$('#id_span_data_usdinr_ask').css("background", jsGlobalColorRateUnchanged);	
						}

			}		// End  else


			// Update Global Variable
			if( ! isNaN(jsComexRowAsk) ){			
				jsGblUsdAsk	=	jsComexRowAsk;
			}

		}		// Check for jsComexFlag = 'S'







		//-------------------- Update Rates Data (Vijayawada)---------------->
		if( jsRateFlag == jsConstYes ){

				var jsTmpObj;
				jsTmpObj = jsJSONObjArr.RESULT[5].SYMRATES[0].VJA;

				// Check if VJA is defined		
				if( jsTmpObj != undefined ){
						var jsTmpObj2, jsRowIndex;
						
						// G999R ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 0;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_G999R;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;

								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_g999r_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_g999r_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_g999r_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_g999r_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->

								// Activate , De-Activate
								if( jsRateDataRowAct == jsConstYes ){
									//$('#id_div_grid_vja_g999r').css("display","table-row");
									$('#id_div_grid_vja_g999r').css("display","block");
								}
								else{
									$('#id_div_grid_vja_g999r').css("display","none");	
								}	

								// Apply Color - Bid
								if(jsGblVJAG999RBid == 0 || jsGblVJAG999RBid == 0.00){
									//$('#id_span_vja_data_g999r_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_g999r_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_g999r_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_g999r_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAG999RBid ){
													//$('#id_span_vja_data_g999r_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_g999r_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAG999RBid ){
													//$('#id_span_vja_data_g999r_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_g999r_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_g999r_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_g999r_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAG999RAsk == 0 || jsGblVJAG999RAsk == 0.00){
									//$('#id_span_vja_data_g999r_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_g999r_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_g999r_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_g999r_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAG999RAsk ){
													//$('#id_span_vja_data_g999r_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_g999r_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAG999RAsk ){
													//$('#id_span_vja_data_g999r_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_g999r_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_g999r_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_g999r_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else
								
								// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_g999r').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_g999r').hide("slow");
								}



								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAG999RBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAG999RAsk	=	jsRateDataRowAsk;
								}

						}



						// G999T  ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 1;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_G999T;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;

								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_g999t_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_g999t_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_g999t_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_g999t_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->


								if( jsRateDataRowAct == jsConstYes ){
									//$('#id_div_grid_vja_g999t').css("display","table-row");
									$('#id_div_grid_vja_g999t').css("display","block");
								}
								else{
									$('#id_div_grid_vja_g999t').css("display","none");	
								}

								// Apply Color - Bid
								if(jsGblVJAG999TBid == 0 || jsGblVJAG999TBid == 0.00){
									//$('#id_span_vja_data_g999t_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_g999t_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_g999t_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_g999t_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAG999TBid ){
													//$('#id_span_vja_data_g999t_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_g999t_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAG999TBid ){
													//$('#id_span_vja_data_g999t_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_g999t_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_g999t_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_g999t_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAG999TAsk == 0 || jsGblVJAG999TAsk == 0.00){
									//$('#id_span_vja_data_g999t_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_g999t_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_g999t_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_g999t_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAG999TAsk ){
													//$('#id_span_vja_data_g999t_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_g999t_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAG999TAsk ){
													//$('#id_span_vja_data_g999t_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_g999t_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_g999t_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_g999t_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else


									// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_g999t').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_g999t').hide("slow");
								}

								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAG999TBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAG999TAsk	=	jsRateDataRowAsk;
								}

							}	// Check for undefined

						// GFT999R   ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 2;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_GFT999R;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;


								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_gft999r_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_gft999r_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_gft999r_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_gft999r_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->


								if( jsRateDataRowAct == jsConstYes ){
									//$('#id_div_grid_vja_gft999r').css("display","table-row");
									$('#id_div_grid_vja_gft999r').css("display","block");
								}
								else{
									$('#id_div_grid_vja_gft999r').css("display","none");	
								}

								// Apply Color - Bid
								if(jsGblVJAGFT999RBid == 0 || jsGblVJAGFT999RBid == 0.00){
									//$('#id_span_vja_data_gft999r_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_gft999r_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_gft999r_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_gft999r_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAGFT999RBid ){
													//$('#id_span_vja_data_gft999r_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_gft999r_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAGFT999RBid ){
													//$('#id_span_vja_data_gft999r_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_gft999r_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_gft999r_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_gft999r_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAGFT999RAsk == 0 || jsGblVJAGFT999RAsk == 0.00){
									//$('#id_span_vja_data_gft999r_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_gft999r_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_gft999r_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_gft999r_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAGFT999RAsk ){
													//$('#id_span_vja_data_gft999r_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_gft999r_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAGFT999RAsk ){
													//$('#id_span_vja_data_gft999r_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_gft999r_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_gft999r_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_gft999r_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else	

									// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_gft999r').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_gft999r').hide("slow");
								}

								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAGFT999RBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAGFT999RAsk	=	jsRateDataRowAsk;
								}

						}		// Check for undefined
						


						// GFT999T ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 3;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_GFT999T;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;

								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_gft999t_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_gft999t_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_gft999t_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_gft999t_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->

								if( jsRateDataRowAct == jsConstYes ){
									//$('.id_div_grid_vja_gft999t').css("display","table-row");
									$('#id_div_grid_vja_gft999t').css("display","block");
								}
								else{
									$('#id_div_grid_vja_gft999t').css("display","none");	
								}
						
								// Apply Color - Bid
								if(jsGblVJAGFT999TBid == 0 || jsGblVJAGFT999TBid == 0.00){
									//$('#id_span_vja_data_gft999t_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_gft999t_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_gft999t_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_gft999t_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAGFT999TBid ){
													//$('#id_span_vja_data_gft999t_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_gft999t_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAGFT999TBid ){
													//$('#id_span_vja_data_gft999t_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_gft999t_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_gft999t_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_gft999t_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAGFT999TAsk == 0 || jsGblVJAGFT999TAsk == 0.00){
									//$('#id_span_vja_data_gft999t_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_gft999t_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_gft999t_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_gft999t_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAGFT999TAsk ){
													//$('#id_span_vja_data_gft999t_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_gft999t_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAGFT999TAsk ){
													//$('#id_span_vja_data_gft999t_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_gft999t_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_gft999t_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_gft999t_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else

									// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_gft999t').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_gft999t').hide("slow");
								}

								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAGFT999TBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAGFT999TAsk	=	jsRateDataRowAsk;
								}

						}	// Check for Undefined
								
						// S999R ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 4;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_S999R;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;

								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_s999r_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_s999r_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_s999r_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_s999r_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->


								if( jsRateDataRowAct == jsConstYes ){
									//$('#id_div_grid_vja_s999r').css("display","table-row");
									$('#id_div_grid_vja_s999r').css("display","block");
								}
								else{
									$('#id_div_grid_vja_s999r').css("display","none");	
								}


								// Apply Color - Bid
								if(jsGblVJAS999RBid == 0 || jsGblVJAS999RBid == 0.00){
									//$('#id_span_vja_data_s999r_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_s999r_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_s999r_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_s999r_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAS999RBid ){
													//$('#id_span_vja_data_s999r_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_s999r_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAS999RBid ){
													//$('#id_span_vja_data_s999r_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_s999r_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_s999r_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_s999r_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAS999RAsk == 0 || jsGblVJAS999RAsk == 0.00){
									//$('#id_span_vja_data_s999r_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_s999r_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_s999r_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_s999r_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAS999RAsk ){
													//$('#id_span_vja_data_s999r_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_s999r_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAS999RAsk ){
													//$('#id_span_vja_data_s999r_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_s999r_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_s999r_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_s999r_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else

									// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_s999r').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_s999r').hide("slow");
								}

								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAS999RBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAS999RAsk	=	jsRateDataRowAsk;
								}

						}		// Check for Undefined


						// S999T ----------------------------------------------------------------------------------------------------->
						jsRowIndex = 5;
						jsTmpObj2 = jsTmpObj[ jsRowIndex ];
						if( jsTmpObj2 != undefined ){
								jsRateDataRowkeyType 			= jsTmpObj[ jsRowIndex ].KEY;
								jsRateDataRowBid 							= jsTmpObj[ jsRowIndex ].BID;
								jsRateDataRowAsk 						= jsTmpObj[ jsRowIndex ].ASK;
								jsRateDataRowRdyFlag 			=  jsTmpObj[ jsRowIndex ].RI_S999T;
								jsRateDataRowAct 							= jsTmpObj[ jsRowIndex ].ACT;

								//----- Update rate Bid and Ask on screen  Start --------->
								if( jsRateDataRowBid == undefined || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){ 
										$('#id_span_vja_data_s999t_bid').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_s999t_bid').html( jsRateDataRowBid );
								}

								if( jsRateDataRowAsk == undefined || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){ 
									$('#id_span_vja_data_s999t_ask').html( jsGlobalShowBlankRate	);
								}
								else{
									$('#id_span_vja_data_s999t_ask').html( jsRateDataRowAsk );
								}
								//----- Update rate Bid and Ask on screen end --------->


								if( jsRateDataRowAct == jsConstYes ){
									//$('#id_div_grid_vja_s999t').css("display","table-row");
									$('#id_div_grid_vja_s999t').css("display","block");
								}
								else{
									$('#id_div_grid_vja_s999t').css("display","none");	
								}

								// Apply Color - Bid
								if(jsGblVJAS999TBid == 0 || jsGblVJAS999TBid == 0.00){
									//$('#id_span_vja_data_s999t_bid').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_s999t_bid').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowBid) || jsRateDataRowBid == 0 || jsRateDataRowBid == 0.00 ){
											//$('#id_span_vja_data_s999t_bid').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_s999t_bid').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowBid > jsGblVJAS999TBid ){
													//$('#id_span_vja_data_s999t_bid').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_s999t_bid').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowBid < jsGblVJAS999TBid ){
													//$('#id_span_vja_data_s999t_bid').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_s999t_bid').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_s999t_bid').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_s999t_bid').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else 

								// Apply Color - Ask
								if( jsGblVJAS999TAsk == 0 || jsGblVJAS999TAsk == 0.00){
									//$('#id_span_vja_data_s999t_ask').css("color", jsGlobalColorRateUnchanged);
									$('#id_span_vja_data_s999t_ask').css("background", jsGlobalColorRateUnchanged);
								}
								else {

										if(isNaN(jsRateDataRowAsk) || jsRateDataRowAsk == 0 || jsRateDataRowAsk == 0.00 ){
											//$('#id_span_vja_data_s999t_ask').css("color", jsGlobalColorRateUnchanged);											
											$('#id_span_vja_data_s999t_ask').css("background", jsGlobalColorRateUnchanged);											
											}
											else if ( jsRateDataRowAsk > jsGblVJAS999TAsk ){
													//$('#id_span_vja_data_s999t_ask').css("color", jsGlobalColorRateUp );					
													$('#id_span_vja_data_s999t_ask').css("background", jsGlobalColorRateUp );					
											}
											else if ( jsRateDataRowAsk < jsGblVJAS999TAsk ){
													//$('#id_span_vja_data_s999t_ask').css("color", jsGlobalColorRateDown );	
													$('#id_span_vja_data_s999t_ask').css("background", jsGlobalColorRateDown );	
				
											}
											else{
												//$('#id_span_vja_data_s999t_ask').css("color", jsGlobalColorRateUnchanged);	
												$('#id_span_vja_data_s999t_ask').css("background", jsGlobalColorRateUnchanged);	
											}

								}		// End  else


									// Ready Flag - On or Off
								if( jsRateDataRowRdyFlag == jsConstYes) {
									$('.cl_tr_vja_rdyflag_s999t').show("slow");
								}
								else{
									$('.cl_tr_vja_rdyflag_s999t').hide("slow");
								}

								// Update Global Variable
								if( ! isNaN(jsRateDataRowBid) ){			
									jsGblVJAS999TBid	=	jsRateDataRowBid;
								}

								if( ! isNaN(jsRateDataRowAsk) ){			
									jsGblVJAS999TAsk	=	jsRateDataRowAsk;
								}

						}		// Check for undefined

						//alert(jsRateDataRowAsk);

			}	// check undefined
		}

	}		// Check for jsFlag = 'S'




	
}		// End function - jsProcessJSONPResult
