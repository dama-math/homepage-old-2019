function makeTable(tableId){
	var txt = new XMLHttpRequest();
	var result = [];
	txt.open('get', "js/todo.csv", false); //https://dama-math.github.io/js/todo.csv
	txt.send();
	var arr = txt.responseText.split('\n');
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == '') break;
		result[i] = arr[i].split(',');
	}
	var rows=[];
	var table = document.createElement("table");

	for(i = 0; i < result.length; i++){
		rows.push(table.insertRow(-1));
		for(j = 0; j < result[0].length; j++){
			cell=rows[i].insertCell(-1);
			if(result[i][j] == "o"){
				var fa = document.createElement("i");
				fa.classList.add("fas");
				fa.classList.add("fa-check");
				fa.classList.add("done");
				cell.appendChild(fa);
			}else if(result[i][j] == "x"){
				var fa = document.createElement("i");
				fa.classList.add("fas");
				fa.classList.add("fa-times");
				fa.classList.add("yet");
				cell.appendChild(fa);
			}else if(result[i][j] == "d"){
				var fa = document.createElement("i");
				fa.classList.add("fas");
				fa.classList.add("fa-ellipsis-h");
				fa.classList.add("doing");
				cell.appendChild(fa);
			}else{
				cell.appendChild(document.createTextNode(result[i][j]));
			}

			if(i==0){
				cell.style.backgroundColor = "#090";
				cell.style.color = "#fff";
				cell.style.fontWeight = "Bold";
			}
		}
	}
	document.getElementById(tableId).appendChild(table);
}

window.onload = function(){
	makeTable("table");
};
