var screen = {
	
	width : 800,
	height : 3050,
   SYS_INFO_FONT: "16px 宋体",
    PROFILE_ID_FONT: "16px 宋体",
   DIALOG_TEXT_FONT: "20px 宋体",
   SAYING_FONT: "28px 宋体",
   
   FONT_RATIO: 1.2
}

var customImageObjects = [
    //profiles
	{id: "love" , file: "./images/love.png"},
	{id: "waterDrop" , file: "./images/waterDrop.png"},
	{id: "Athena" , file: "./images/Athena.png"},
	{id: "Neo" , file: "./images/Neo.png"},
	{id: "Oracle" , file: "./images/Oracle.png"},
	{id: "Morpheus" , file: "./images/Morpheus.png"},
	{id: "Sati" , file: "./images/Sati.png"},
	{id: "RamaKandra" , file: "./images/RamaKandra.png"},
	
	//system images
	{id: "hlmencken110083_m" , file: "./images/hlmencken110083_m.png"},
	{id: "mahatmagandhi100717_m" , file: "./images/mahatmagandhi100717_m.png"},
	{id: "ogmandino100726_m" , file: "./images/ogmandino100726_m.png"},
	{id: "irismurdoch136179_m" , file: "./images/irismurdoch136179_m.png"},
	{id: "paultillich114351_m" , file: "./images/paultillich114351_m.png"},
	{id: "thomascarlyle142110_m" , file: "./images/thomascarlyle142110_m.png"},
	{id: "oscarwilde121811_m" , file: "./images/oscarwilde121811_m.png"},
	{id: "harryemersonfosdick377865_m" , file: "./images/harryemersonfosdick377865_m.png"},
	{id: "alexandersmith103437_m" , file: "./images/alexandersmith103437_m.png"}
	


 ];

 

var scenario = {
 name: "Scene-101",
  groupName: "Limbo (299792458)" ,
  withHeader: true,
 theme :"waterDrop",
  waterDrop: "水滴",
 Neo : "Neo",
 RamaKandra :"Rama-Kandra",
 Athena: "智子",
 Oracle: "Oracle",
 Sati: "Sati",
 love: "♩♫♬",
 Architect: "Architect",
 saying: "There is no limit to the power of loving",
 dialogs : [

   {SYSTEM: "凌波微布道(Gossip of Limbo) #101(2/3)"},
{Neo:  "I just have never..."},
{RamaKandra :  "...heard a program speak of love?"},
{Neo : "It's a... human emotion."},
{RamaKandra:  "No, it is a word. What matters is the connection the word implies. \n " + 
  "I see that you are in love. Can you tell me what you would give to hold on to\n that connection?"},
{Neo:  "Anything.  "},

{RamaKandra:  "Then perhaps the reason you're here is not so different from the reason I'm here."},
{Athena : "Love in its essence is spiritual fire."},





//;(Athena "Bitterness imprisons life;  love releases it.")
{SYSTEM_IMAGE: "harryemersonfosdick377865_m"  },

{Athena :"The one thing we can never get enough of is love. And the one thing we never\n give enough is love." },

{Athena :"爱别人，也被别人爱，这就是一切，这就是宇宙的法则。为了爱，我们才\n存在。" },

{RamaKandra: "That is our karma." },
{Neo :"You believe in karma?" },
{RamaKandra :"Karma's a word. Like 'love.' A way of saying 'what I am here to do.' I do not\n resent my karma -"+
  " I'm grateful for it. Grateful for my wonderful wife, for my\n beautiful daughter. They are gifts. And so I do what I must do to honour them."},


{Athena :"For small creatures such as we the vastness is bearable only through love." },



//;(Athena "Love is but the discovery of ourselves in others, and the delight in the recognition")
{SYSTEM_IMAGE: "alexandersmith103437_m"  },


{Athena : "Being deeply loved by someone gives you strength, while loving someone deeply\n gives you courage."},
{Athena: "Immature love says: 'I love you because I need you.' Mature love says 'I need\n you because I love you.'"},

{Athena : "Let us always meet each other with smile, for the smile is the beginning of love."},

{Athena: "According to Spinoza, the highest virtue is the intellectual love or knowledge of\n God/Nature/Universe. " },



{Athena:  "A very small degree of hope is sufficient to cause the birth of love."},
{Athena: "Faith, hope, and love-these three. But the greatest of these is love - Ender's Game"},

{Athena:  "You will find as you look back upon your life that the moments when you have\n truly lived are the moments when you have done things in the spirit of love."},
   {Athena : "爱是理解的别名.---（印度）泰戈尔"}
   ]

}



