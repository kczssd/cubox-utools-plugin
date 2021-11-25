import {handleFiles,handleImg} from './files.js'
import Request from './request.js'
let list = document.querySelector(".upload-list")

//获取用户输入数据
utools.onPluginEnter(({code,type,payload})=>{
    handleInputType(type,payload);
})
function handleInputType(type,payload){
    // if(type==="files"){
    //     handleFiles(payload[0].name,payload[0].path);
    // }else if(type==="img"){
    //     handleImg(payload);
    // }
    if(type==="regex"){
        handleURL(payload);
    }
    if(type==="over"){
        handleMemo(payload);
    }
}
async function handleURL(url){
    let data = await Request("url",url);
    console.log(data)
}
async function handleMemo(content){
    let data = await Request("memo",content,["words"]);
    console.log(data)
}