const filterInput = document.querySelector("#filter")

const cards = document.querySelectorAll('.cards li')

filterInput.addEventListener('input', filterCards)

function filterCards() {
if (filterInput.value != ''){
    for(let card of cards){
      let title = card.querySelector('h2')
      title = title.textContent.toLowerCase()
      let filterText = filterInput.value.toLowerCase()
      if(!title.includes(filterText)){
        card.style.display = "none"
      }else{
        card.style.display = "block"
      }

    }
  }else{
    for(card of cards){
      card.style.display = "block"
    }
  }
}