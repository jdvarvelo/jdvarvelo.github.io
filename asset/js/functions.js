var lang="en";
import lang_obj from '../lang/lang.js';
$(document).ready(function(){
	setLanguage(lang);

	$(document).on("click","a#changeLanguage",function(e){
		e.preventDefault();
		lang=lang=="en"?"es":"en";
		setLanguage(lang);
	});
});

function setLanguage(lang){
	$("translate").each(function(index){
		let text=$(this).data("lng");
		$(this).html(lang_obj[text][lang]);
	});
}