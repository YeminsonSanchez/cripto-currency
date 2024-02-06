let data = [];
let descriptionHTML = document.querySelector('.description-text');

const addDataToHTML = () => {
    fetch('/cripto-currency/dataDetail.json')
        .then((response) => response.json())
        .then((data) => {
            detail = data;
            console.log(detail);
            let desc = document.createElement('div');

            desc.innerHTML = `
                    <p
                        >
        ${detail.description}
                        </p>
                    
                </div>`;
            descriptionHTML.appendChild(desc);
        });
};
addDataToHTML();
