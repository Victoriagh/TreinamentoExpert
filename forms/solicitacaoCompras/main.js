console.log("estou usando js")

function calcula(id){
	var pos= id.split("___");
	var index=pos[1];
	var calc= $("#quantidade_prod___"+index).val()* $("#valUnit_prod___"+index).val()
	$("#valTotal_prod___"+index).val(calc)		
}