





val1=$("#cb1").prop('checked');
val2=$("#cb2").prop('checked');
val3=$("#cb3").prop('checked')




function create(){
	$('#create').on("click",function(){
		if (val1&&val2&&val3) {

			$("div").append("<ul></ul>");
			$("ul").append("<li>Black</li>");

		}

		if (val1&&val2) {

			$("div").append("<ul></ul>");
			$("ul").append("<li>green = blue + yellow</li>");

		}

		if (val1&&val2) {

			$("div").append("<ul></ul>");
			$("ul").append("<li>purple = blue + red</li>");

		}

	})
}