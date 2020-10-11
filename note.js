const validator=require("validator")
const chalk=require("chalk")
const yargs=require("yargs")
const { describe, string, demandOption } = require("yargs")
const note=require("./utils")



yargs.version("2.2.2")

//create add command 

yargs.command({
    command:'add' ,
    describe:'add a new note',
    builder:{
            title:{
                describe:'note title',
                demandOption:true,
                type:'string'
            },
            Body:{
                describe:'body of note',
                demandOption:true,
                type:'string'

            }
    },
    handler:function(argv){
        note.addNote(argv.title,argv.Body)
    }
}
)

yargs.command({
        command:"remove",
        describe:"remove a note",
        builder:{
            content:{
            demandOption:true,
            type:"string"
        }
        },
        handler:function(argv){
            note.removenote(argv.content)
        }  
})

yargs.command({
    command:"show",
    describes:"show the file",
    //builder:{
     //   show:{
          //  demandOption:true,
          //  type:'string'
        //}
   // },
    handler:function(){
        note.showlist()
    }


})



yargs.parse();

//console.log(yargs.argv)
