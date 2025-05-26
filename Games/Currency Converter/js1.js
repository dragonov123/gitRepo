 let input=document.querySelector(".input");
let dropdown=document.querySelectorAll(".dropdown select");
let msg=document.querySelector(".msg");
let api="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1M6p8Rx1jyVdiusTNTFehrSxvROoTBK8UiwVrCTX&currencies=EUR%2CUSD%2CCAD%2CINR";
let fcurr=document.querySelector(".from select");
let tcurr=document.querySelector(".to select");
let btn=document.querySelector("button");

let amt=document.querySelector(".amount");


for(let select of dropdown)
{
    for(currcode in countryList)
    {
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name=="from" && currcode=="USD")
        {
            newoption.selected="selected";
        }else if(select.name=="to" && currcode=="INR")
        {
            newoption.selected= "selected";
        }
        
        select.append(newoption);
    }

    select.addEventListener("change", (evt) => {
        changeflag(evt.target);

    });
    
} 

let changeflag = (element)=> {
        let countryn=countryList[element.value];
        let img=element.parentElement.querySelector("img");
        img.src=`https://flagsapi.com/${countryn}/shiny/64.png`;
    
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    if(input.value=="" || input.value<1)
    {
        input.value = 1;
        amt.value="1";
    }

    freecurrencyapi({
        base_currency: 'USD',
        currencies: 'EUR'
    }).then(response => {
        console.log(response);
    });

})







