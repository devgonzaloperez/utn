const printPartners = async () =>{

    fetch('https://utngonzaloperez.herokuapp.com/api/partners')
        .then(res => res.json())
        .then(resJSON => {

            const partnersNode = document.querySelector(".partners");
            const partnersFoldNode = document.querySelector(".partners__fold");

            for(let i = 0; i < resJSON.partners.length; i++){                
                
                partnersNode.innerHTML += 
                `<div class="partners__item ${resJSON.partners[i].last_name.replace(" ", "").replace("ñ", "n").toLowerCase()}">
                    <div class="partners__item-imagecontainer">
                        <img class="partners__item-imagecontainer-image" src="${resJSON.partners[i].image}" alt="Partner">
                        <div class="partners__item-info partners__item-info-${resJSON.partners[i].last_name.replace(" ", "").replace("ñ", "n").toLowerCase()}">
                            <p class="lawyer-name">${resJSON.partners[i].first_name} ${resJSON.partners[i].last_name}</p>
                            <p class="rol">${resJSON.partners[i].position}</p>
                        </div>
                    </div>
                </div>`

                partnersFoldNode.innerHTML += 
                `<p>${resJSON.partners[i].first_name} ${resJSON.partners[i].last_name}</p>`

            };
            console.log(resJSON.partners);
        });

};

printPartners();