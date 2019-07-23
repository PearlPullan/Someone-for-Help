'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

//SADNESS GO GO
//anxious,upset,okay,hopeless
app.intent('sad emotion', (conv, {sademotion}) => {
  
    const n = sademotion.length;
    
    if(n<7)
   { conv.close('Jesus answered them, “Truly I tell you, if you have faith and do not doubt, not only will you do what has been done to the fig tree, but even if you say to this mountain, ‘Be lifted up and thrown into the sea,’ it will be done. Whatever you ask for in prayer with faith, you will receive. Mathew 21: 21 and 22');}
else
{
  conv.close(' I will go before you and level the mountains, I will break in pieces the doors of bronze and cut through the bars of iron, I will give you the treasures of darkness and riches hidden in secret places, so that you may know that it is I, the Lord, the God of Israel, who call you by your name. Isaiah 45:2 and 3');
}
});

//POSITIVITY
// great,blissful,happy
app.intent ('positive emotion',(conv, {positive}) => {
    const n = positive.length;
    
    if(n<6)
   { conv.close('This hope does not disappoint us, because God’s love has been poured into our hearts through the Holy Spirit that has been given to us. Romans 5:5');}
else
{
	conv.close('See, I am the Lord, the God of all flesh; is anything too hard for me? Jeremiah 32:27');
}
});


// DEMOLISH NEGATIVITY
////angry,dejected
app.intent('negative', (conv, {negative}) => {
   const n = negative.length;
   
  conv.close('No weapon that is fashioned against you shall prosper, and you shall confute every tongue that rises against you in judgment. This is the heritage of the servants of the Lord and their vindication from me, says the Lord. Isaiah 54:17');

});

//DISPEL ILLNESS
//ill,powerless,panicked
app.intent('illness', (conv, {ill}) => {
    const n = ill.length;
    
    if(n<4)
   { conv.close('For neither herb nor poultice cured them,but it was your word, O Lord, that heals all people. Wisdom 16:12');}
else
{
	conv.close(' The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you. Romans 16:20 ');
}
});

// REMOVE stress
//stress
app.intent('demotivated', (conv, {demot}) => {
   const n = demot.length;
   
  conv.close('I can do all things through him who strengthens me. Philippians 4:13 \n The Holy Spirit will come upon you, and the power of the Most High will overshadow you. Luke 1:35');

});
 

 //RELEASE guilt
 //ashamed, regret,guilty
app.intent('guilt', (conv, {guilt}) => {
   const n = guilt.length;
   
  conv.close('If we confess our sins, he who is faithful and just will forgive us our sins and cleanse us from all unrighteousness. 1 John 1:9');

});
// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);