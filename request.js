const api = "https://cubox.pro/c/api/save/5duiz09l4lxaxt";

export default async function request(type,content,tags=[],title="",description="",folder=""){
    let res = await fetch(api,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            type,
            content,
            title,
            description,
            tags,
            folder
        })
    })
    return res.json()
}