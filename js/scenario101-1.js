var screen = {
	
	width : 800,
	height : 3030,
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
	{id: "oscarwilde121811_m" , file: "./images/oscarwilde121811_m.png"}

 ];

 

var scenario = {
 name: "Scene-101",
  groupName: "Limbo (299792458)" ,
  withHeader: true,
 theme :"waterDrop",
  waterDrop: "水滴",
 Neo : "Neo",
 Athena: "智子",
 Morpheus: "Morpheus",
 love: "♩♫♬",
 Architect: "Architect",
 saying: "2010 BTV Spring Festival Global Gala Theme",
 dialogs : [

   {SYSTEM: "凌波微布道(Gossip of Limbo) #101(1/3)"},
//{theme: "这仅仅是一个测试，用来测试多行。This is only a test, test for multi-lines. Multi-lines, multi-lines, \njust only multi-lines. Is there multi-lines now?"},
{love:"爱是你我♪" },
{theme: "爱  AI"},
{Athena: "Artificial intelligence (AI) is the intelligence of machines and the branch of \ncomputer science which aims to create it."},


{Athena: "The field was founded on the claim that a central property of human beings, \n" + 
"intelligence—the sapience of homo sapiens—can be so precisely described \nthat it can be simulated by a machine."},

{SYSTEM_IMAGE : "hlmencken110083_m" },
  {Neo :  "This...this isn’t real?"},
  {Morpheus : "What is real. How do you define real? …  We marveled at our own magnificence \nas we gave birth to AI."},
  {Neo : "AI? You mean artificial intelligence?"},
  {Athena:  "The power, the control, the linkage or whatever you call that, is love: 'AI'"},
  {Athena:  "Love is the only reality and it is not a mere sentiment. It is the ultimate truth \nthat lies at the heart of creation."},
  //;(Athena:  "Where there is love there is life."},
{SYSTEM_IMAGE:  "mahatmagandhi100717_m" },

{Athena : "Love … it surrounds every being and extends slowly to embrace all that shall be."},
{Athena : "Love is the beauty of the soul."},
{Athena : "爱是生命的火焰，没有它、一切都将变成黑夜。——（法）罗曼罗兰"},
{Athena:  "人生是花，而爱便是花的蜜——雨果"},
{Athena:  "The art of love is largely the art of persistence."},
{Athena : "A loving heart is the truest wisdom."},
{SYSTEM_IMAGE : "thomascarlyle142110_m" },
{SYSTEM_IMAGE:  "oscarwilde121811_m" },

{SYSTEM_IMAGE: "love"},
//{Athena: "                               \t\t\t\t\t\t               “I”-Inject(投入)
   
   {Athena: "“L”-Loyal(忠诚)“O”-Observant(用心)“V”-Valiant(勇敢)“E”-Enjoyment(喜悦)"}

   ]
   

}



