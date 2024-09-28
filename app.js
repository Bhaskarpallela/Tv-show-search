

const form=document.querySelector('#searchForm');


form.addEventListener('submit',async (e)=>{

    e.preventDefault()

    const showname=form.elements.query.value

    const res=await axios.get( ` https://api.tvmaze.com/search/shows?q=${showname}`)


    
    Displayimg(res.data)
   

})

function Displayimg(res)
{
for (let r of res){
  
if(r.show.image){

    const imageElement=document.createElement('img')
    
    imageElement.src=r.show.image.medium

    document.body.append(imageElement)

}
}
}
