// import {handleFiles,handleImg} from './files.js'
import Request from './request.js'

let title="",description="",folder="",tags=[],type,payload;
const titleNode = document.querySelector(".title");
const descriptionNode = document.querySelector(".description");
const folderNode = document.querySelector(".folder");
const tagsNode = document.querySelector(".tags");
const publish = document.querySelector(".publish")
titleNode.addEventListener("input",function(){
    title = this.value;
})
descriptionNode.addEventListener("input",function(){
    description = this.value;
})
folderNode.addEventListener("input",function(){
    folder = this.value;
})
tagsNode.addEventListener("input",function(e){
    tags[0]=this.value;
})
tagsNode.addEventListener("blur",function(e){
    this.style.width = 18+"vw"
    let width = this.scrollWidth
    this.style.width = `calc(${width}px - 3vw)`;
})
publish.addEventListener("click",function(){
    handleInputType(type)
    console.log(type)
})
//获取用户输入数据
utools.onPluginEnter(({code,type:t,payload:p})=>{
    type=t;
    payload=p
})
function handleInputType(type){
    // if(type==="files"){
    //     handleFiles(payload[0].name,payload[0].path);
    // }else if(type==="img"){
    //     handleImg(payload);
    // }
    if(type==="regex"){
        handleURL();
    }
    if(type==="over"){
        handleMemo();
    }
}
async function handleURL(){
    let {code} = await Request("url",payload,tags,title,description,folder);
    if(code===200){
        publish.innerHTML = "成功"
    }
}
async function handleMemo(){
    let {code} = await Request("memo",payload,[...tags],title,description,folder);
    if(code===200){
        publish.innerHTML = "成功"
    }
}