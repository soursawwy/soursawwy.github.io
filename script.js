 $(document).ready(function(){
 $("#cekAnagram").on("click", function(){
 	let str1=$("#string_1").val();
 	let str2=$("#string_2").val();
 	let sort1= str1.split("").sort().join("");
 	let sort2= str2.split("").sort().join("");
 	if ( sort1 === sort2 ) {
 		$("#string_3").val("berhasil");
 	}
 	else {
 		$("#string_3").val("tidak");
 	}
 })
 })