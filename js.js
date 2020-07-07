var info = document.querySelector('#inf');
var theInfo = document.querySelector('#pp');
var info2 = document.querySelector('#inf2')
var theinfo2 = document.querySelector ('#pp2')


info.addEventListener('mouseover', function(){
    // var msg = 'this is a card information'
    theInfo.innerHTML = 'Door het volhouden van de 1,5 meter afstand en de basisregels is het nu mogelijk om weer te sporten, uit eten te gaan en kunnen er zelfs weer evenementen plaatsvinden. Belangrijk is daarbij wel te realiseren dat het nog steeds niet is zoals ‘vroeger’. Op veel plaatsen gelden beperkingen om de 1,5 meter afstand mogelijk te maken en om ervoor te zorgen dat bron- en contactonderzoek mogelijk is.De regels worden nu algemeen zodat ze breed toepasbaar zijn. Het onderscheid is vooral tussen activiteiten ‘binnen’ en ‘buiten’. Dat geeft duidelijkheid voor iedereen. Het geeft lucht aan ondernemers en het maakt ook de handhaving door sectoren en handhavers makkelijker. De sectoren werken in veel gevallen zelf uit hoe zij kunnen voldoen aan de algemene regels.'
})
 
info.addEventListener('mouseleave', function(){
    // var msg = 'this is a card information'
    theInfo.innerHTML = ''
})

info2.addEventListener('mouseover', function(){

    theinfo2.innerHTML = 'Via Opleiding vind je wél de opleiding die je zoekt. Met onze opleidingswijzer zoek je binnen het aanbod van alle grote deeltijdopleiders voor werkenden in Nederland. Jij geeft aan waarnaar je op zoek bent en wij vinden voor jou de opleiding die daarbij past. Of het nu gaat om een volledige erkende MBO-, HBO- of Masteropleiding, of om een kortdurende module of training: wij helpen je op een snelle en overzichtelijke manier bij het vinden van precies de juiste opleiding. En heb je jouw opleiding gevonden? Dan kun je je meteen inschrijven. Zo zet je gelijk de eerste stap in je ontwikkeling.'
    
})


info2.addEventListener('mouseleave', function(){

    theinfo2.innerHTML = ''
})



// info2.addEventListener('mouseover', function(){
//     heinfo2.innerHTML = ''
// })

// info2.addEventListener('mouseleave', function(){
//     heinfo2.innerHTML = ''
// })

// info2.addEventListener('mouseover', function(){
//     heinfo2.innerHTML = ''
// })

// info2.addEventListener('mouseleave', function(){
//     heinfo2.innerHTML = ''
// })