
ua = navigator.userAgent.toLowerCase(); 
isIE = ((ua.indexOf("msie") != -1) );
isIE6 = ((ua.indexOf("msie 6.0") != -1) );
isIE7 = ((ua.indexOf("msie 7.0") != -1) );
isOPERA = ((ua.indexOf("opera") != -1) );
isFF = ((ua.indexOf("firefox") != -1) );
isSafari = ((ua.indexOf("safari") != -1) );

$(document).ready(function(){



});

//-----------------------------------------------
function debug(txt)
{
try {
	console.debug(txt);
	}
catch(e){}
}
//-----------------------------------------------
function inittabs(selector)
{
$(selector).tabs();
					
$(selector).children('ul').localScroll({ 
    target:".tab-set",
    duration:0,
    hash:true
  });
}
//-----------------------------------------------
function initiconmenu(id)
{
var mainelement=$('#'+id);	

$(mainelement).find('.icons li a').click( function(event)
	{
	//event.preventDefault();
	
	$(mainelement).find('.icons li a').removeClass('active');
	
	$(this).addClass('active');
			
	refreshtab();	
	});

refreshtab();

function refreshtab()
	{
	var index= $(mainelement).find('.icons li a').index( $(mainelement).find('.icons li a.active') );
	
	$(mainelement).find('.content').css('display', 'none');
	$(mainelement).find('.content').eq(index).css('display', 'block');	
	}
//END;
}