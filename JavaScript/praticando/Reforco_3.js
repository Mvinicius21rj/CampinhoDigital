function educacao(res1){
    var res1
    if(res1 == "Manhã"){
        return console.log("Bom dia")
    }else if(res1 == "Tarde"){
        return console.log("Boa Tarde")
    }else if(res1 == "Noite"){
        return console.log("Boa Noite")
    }
}



educacao("Manhã")




function periodoDia(periodo){
	if(periodo == "manhã"){
	return 'Bom dia!';
} else if(periodo == "tarde"){
  return 'Boa tarde!';
} else if(periodo == "noite"){
  return 'Boa noite!';
} else{
    return "valores invalidos"}
}

console.log(periodoDia("manhã"))
console.log(periodoDia("tarde"))
console.log(periodoDia("noite"))