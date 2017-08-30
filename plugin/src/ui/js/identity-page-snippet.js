var url = SailPoint.CONTEXT_PATH + '/plugins/pluginPage.jsf?pn=@PluginName@';  
jQuery(document).ready(function(){  
  var pluginIcon = '<h1>' +  
   '<i id="showPluginIcon" role="presenation" class="fa fa-info-circle fa-lg" style="cursor:pointer"></i>' +  
  '</h1>';  
  
  jQuery("#bodyDivTitle > h1").after(pluginIcon);  
  
  var getUrlParameter = function getUrlParameter(sParam) {  
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),  
      sURLVariables = sPageURL.split('&'),  
      sParameterName,  
      i;  
  
    for (i = 0; i < sURLVariables.length; i++) {  
      sParameterName = sURLVariables[i].split('=');  
  
      if (sParameterName[0] === sParam) {  
        return sParameterName[1] === undefined ? true : sParameterName[1];  
      }  
    }  
  };  
  
jQuery("#showPluginIcon").click(function(){  
    var identityName = getUrlParameter("id");  
  
    jQuery.ajax({  
      method: "GET",  
      beforeSend: function (request) {  
      request.setRequestHeader("X-XSRF-TOKEN", PluginHelper.getCsrfToken());  
      },  
      url: PluginHelper.getPluginRestUrl("scaffolding") + "/info/" + identityName  
    }).done(function(res) {  
      alert(JSON.stringify(res));  
    });  
  });  
});

