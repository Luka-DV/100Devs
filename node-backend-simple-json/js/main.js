document.querySelector('#clickMe').addEventListener('click', makeReq)

document.body.addEventListener("keydown", e => { // listener za cel body
  if(e.key === "Enter") { 
    document.querySelector('#clickMe').click();
  }
})

async function makeReq(){
  try {
    const userName = document.querySelector("#userName").value;
    const res = await fetch(`/api?student=${userName}`)
    const data = await res.json()

    console.log(data);
    document.querySelector("#personName").textContent = data.name
    document.querySelector("#personStatus").textContent = data.status
    document.querySelector("#personOccupation").textContent = data.currentOccupation
    document.querySelector("#notFound").textContent = data.message
  } catch (error) {
    console.error(error);
  }
}