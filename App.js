const API_KEY="PUT YOUR API KEY HERE" --/make_sure_its_valid
const Sub = document.querySelector(".S_Arrow")
const input_E = document.querySelector("input")
const iS = document.querySelector('.img_sec')


const getImg = async () =>{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: input_E.value,
            n: 2,
            size: "1024x1024"
        })
    }
    try{
        const answer = await fetch("https://api.openai.com/v1/images/generations", options)
        const D = await answer.json()
        console.log(D)
        D?.data.forEach(imageObject => {
            const imgsec = document.createElement("div")
            imgsec.classList.add("imgec")
            const imageElement = document.createElement("img")
            imageElement.setAttribute("src",imageObject.url)
            imgsec.append(imageElement)
            iS.append(imgsec)
        });
    }catch (error){
        console.error(error)
    }
}
Sub.addEventListener('click', getImg)