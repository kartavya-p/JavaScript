let cards=[
    {
        Image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        value:1,
        status:"closed"
    },
    {
        Image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        value:1,
        status:"closed"
    },
    {
        Image:"https://i.pinimg.com/originals/75/47/d7/7547d70ae8714e715dd4e3b118898438.jpg",
        value:2,
        status:"closed"
    },
    {
        Image:"https://i.pinimg.com/originals/75/47/d7/7547d70ae8714e715dd4e3b118898438.jpg",
        value:2,
        status:"closed"
    },
    {
        Image:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg",
        value:3,
        status:"closed"
    },
    {
        Image:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg",
        value:3,
        status:"closed"
    },
    {
        Image:"https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg",
        value:4,
        status:"closed"
    },
    {
        Image:"https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg",
        value:4,
        status:"closed"
    },
    {
        Image:"https://www.indiewire.com/wp-content/uploads/2018/03/jeremy-renner-hawkeye.jpeg?w=780",
        value:5,
        status:"closed"
    },
    {
        Image:"https://www.indiewire.com/wp-content/uploads/2018/03/jeremy-renner-hawkeye.jpeg?w=780",
        value:5,
        status:"closed"
    }
]
let temp;
for(let i=cards.length-1;i>=0;i--)
{
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.Image}')">
            <div class="overlay ${card.status}" onclick="openCard(${index})">
            </div>
        </div>
    `;
});

    document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);

let cardcount=1;
let val1=null,val2=null;
let score=0;
function openCard(index)
{
    console.log(cards);
    cards[index].status="opened";
    if(cardcount===1)
    {
        val1=cards[index].value;
        cardcount++;
    }
    else if(cardcount===2)
    {
        val2=cards[index].value;
        if(val1===val2)
        {
            score++;
            document.getElementById('score').innerText=score;
            //reset
            val1=null;
            val2=null;
            cardcount=1;
        }
        else
        {
            alert("GAME OVER!!..")
            location.reload();
        }
        
    }
    displayCards(cards);
}