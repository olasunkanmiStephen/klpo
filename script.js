let openbtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('quotes');
let person = document.getElementById('person')
let quote = document.querySelector('.quote')

const quotes = [{
    quote: '"I Am that I Am"',
    person: "Exodus 3:14"
},    {
    quote: '"The righteous cry out, and the Lord hears them; he deliver them from all their troubles"',
    person: 'Psalms 34:17'
}, {
    quote: '"If I had cherished sin in my heart, the Lord would not have lisstened;"',
    person: 'Psalm 66:18'
}, {
    quote: "'Many are the woes of the wicked, but the lord's unfailing love surrounds the one who trusts in him.'",
    person: 'Psalms 32:19'
}, {
    quote: '"All your enemies open their mouths wide against you; they scoff and gnash their teeth and say,"we have swallowed her up. This is the day we have waited for; we have lived to see it""',
    person: 'Lamentations 2:16'
}, {
    quote: '"All who pass your way clap their hans at you; they scoff and shake their heads at Daughter Jerusalem:"Is this the city that was called the perfection of beauty, the joy of the whole earth?"',
    person: 'Lamentations 2:15'
}, {
    quote: '"The fire must be kept burning on the altar continuously; it must not go out."',
    person: 'Leviticus 6:13'
}, {
    quote: '"Honor the Lord with your wealth, with the firstfruits of all your crops;"',
    person: 'Proverbs 3:9'
}, {
    quote: '"Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?"',
    person: 'Matthew 6:25'
}, {
    quote: '"The eyes of the Lord are on the righteous, and his ears are attentive to their cry;"',
    person: 'Psalms 34:15'
}, {
    quote: '"Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',
    person: 'Matthew 6:34'
}, {
    quote: '"For the pagans run after all these things, and your heavenly Father knows that you need them."',
    person: 'Matthew 6:32'
}, {
    quote: '"But seek first his kingdom and his righteousness, and all these things will be given to you as well."',
    person: 'Matthew 6:33'
}, {
    quote: '"However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me-the task of testifying to the good news of God"s Grace."',
    person: 'Acts 20:24'
}, {
    quote: '"The Lord is close to the brokenhearted and saves those who are crushed in spirit."',
    person: 'Psalms 34:18'
}, {
    quote: '"From heaven the Lord looks down and sees all mankind;"',
    person: 'Psalms 33:13'
}, {
    quote: '"And as he taught them, he said, Is it not written: My house will be called a house of prayer for all nations? But you have made it a den of robbers"',
    person: 'Mark 11:17'
 }, {
    quote: '"In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."',
    person: 'Matthew 5:16'
 }
]

openbtn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

//event listener

openbtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})



