const { RSA_PKCS1_OAEP_PADDING } = require("constants");
const fs=require("fs")

///Files conatins imp uitiities for task
const getNotes=function(){
return "Your Note...";
}

const addNote=async function(title,Body){

    const answerarray=loadnote();
    var answer={title:title,
        Body:Body} 
    //const jsondata=JSON.stringify(answer)
    answerarray.push(answer);
    const finaldata=JSON.stringify(answerarray)
    fs.writeFileSync("new.txt",finaldata);
}


const remove=function(title){
    const arr=loadnote();
    const notetokeep=arr.filter(x=>{
        return x.title!==title
    })
    const finaldata=JSON.stringify(notetokeep)
    fs.writeFileSync("new.txt",finaldata);
}

const showlist=()=>{
console.log(fs.readFileSync("new.txt").toString())
}

const loadnote=function(){
    try
    {
    const databuffer=fs.readFileSync("new.txt")
    const datajson=databuffer.toString()
    return JSON.parse(datajson);
}
catch(e){
    return []
}


}

module.exports={getNote:getNotes,
                addNote:addNote,
                removenote:remove,
                showlist:showlist}