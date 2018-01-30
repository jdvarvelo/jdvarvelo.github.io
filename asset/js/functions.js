var lang="en";
import lang_obj from '../lang/lang.js';
$(document).ready(function(){
	setLanguage(lang);
});

function setLanguage(lang){
	$("translate").each(function(index){
		let text=$(this).data("text");
		$(this).html(objLang[text][lang]);
	});
}