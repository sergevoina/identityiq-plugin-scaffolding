jQuery(document).ready(function(){   
  var url = SailPoint.CONTEXT_PATH + '/plugins/pluginPage.jsf?pn=@PluginName@';  
  
  jQuery("#debugMenu").parent().children("ul.dropdown-menu").append(  
    '<li role="presentation">' +  
      '<a href="'+url+'" role="menuitem" class="menuitem" tabindex="0">' +  
        'Scaffolding Plugin' +  
      '</a>' +  
    '</li>'  
  );  
}); 

