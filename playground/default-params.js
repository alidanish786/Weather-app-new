const greet=(name="mawra")=>{
    console.log('Hello '+name);
}

// greet();

const prod={
    name:'danish',
    age:20
}

const prodObj=(detail,{name,age=0}={})=>{
    console.log(detail)
    console.log('name ' +name+ ' age '+age);
}

prodObj('NAME',prod);