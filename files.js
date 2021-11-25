const isImg = /.+\.(jpg|jpeg|gif|bmp|png)$/;
export function handleFiles(type,path){
    if(isImg.test(type)){
        uploadFilesImg(path)
    }else if(isVedio.test(type)){
        uploadFilesVedio(path)
    }
}
function uploadFilesImg(path){
    
}
export function handleImg(data){

}