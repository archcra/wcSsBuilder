var screen = {
	
	width : 800,
	height : 3170,
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
	{id: "friedrichnietzsche103522_m" , file: "./images/friedrichnietzsche103522_m.png"},
	{id: "evagabor106545_m" , file: "./images/evagabor106545_m.png"},
	{id: "johngalsworthy380209_m" , file: "./images/johngalsworthy380209_m.png"}



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
 saying: "The best proof of love is trust",
 dialogs : [

   {SYSTEM: "凌波微布道(Gossip of Limbo) #101(3/3)"},
   
   
  

   {Athena :"爱,可以创造奇迹。---（英）莎士比亚"},
   {Athena :"Love conquers all.\nFortune and love favor the brave.\n" + 
     "He who loves, flies, runs, and rejoices; he is free and nothing holds him back.\n" + 
	 "If it is your time, love will track you down like a cruise missile."},

   {Athena: "【八味心境如浓茶一杯】第一味爱心：凡事包容，诸事忍让； ——林语堂"},
   
   //;(Athena "The first duty of love is to listen.")
   {SYSTEM_IMAGE:  "paultillich114351_m" },
   
   {Athena :"The degree of loving is measured by the degree of giving.\nTo love abundantly is to live abundantly, and to love forever is to live forever."},

   {Athena :"there is a love of justice and reason which must continue to work for the good\n"+
     "of all nations now and in the future. -The world as I see it"},
   {Athena: "The only way to do great work is to love what you do.-Steve Jobs"},

  
   {Oracle : "That's it. That's the secret.  You've got to use your hands."},
   {Sati : "Why?"},
   {Oracle:  "Cookies need love like everything does."},
   //;(Athena "Do all things with love.")
   {SYSTEM_IMAGE : "ogmandino100726_m" },
   {SYSTEM_IMAGE:  "irismurdoch136179_m" },


   {Athena: "Cooking is at once child's play and adult joy. And cooking done with care is an\n"+
      "act of love. -- Craig Claiborne (1920-2000), Food Editor, New York Times "},




   {Athena :"If we do not want to allow the world to sink into chaos, we must release the love\n"+
     " which is trapped in the heart of all humans - the island"},

   {Athena :"Love is a force more formidable than any other. It is invisible - it cannot be seen\n "+
     " or measured, yet it is powerful enough to transform you in a moment, and offer\n you more joy than any material possession could."},

   {Athena: "how rich she had been in the things which really mattered- love, peace, \n"
       +"good health - Little Women"},
   {Athena: "I learnt that to love and to be patient are the most important things in the world.\n"+ 
     " - Let's begin at the beginning …"},


   {SYSTEM_IMAGE: "friedrichnietzsche103522_m" },

   {SYSTEM_IMAGE: "evagabor106545_m" },

   {SYSTEM_IMAGE: "johngalsworthy380209_m"}




   ]
   

}



