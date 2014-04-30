var __screen = {
	width : 540,
	height : 960
}

var imageObjects = [
	{id: "statusBarLeft" , file: "./images/common/phoneHLeft.png"},
	{id: "statusBarRight", file:"./images/common/phoneHRight.png"},
	{id: "wcBarLeft" , file: "./images/common/wcBarLeft.png"},
	{id: "wcBarMiddle" , file: "./images/common/wcBarMiddle.png"},
	{id: "wcBarRight" , file: "./images/common/wcBarRight.png"},
	{id: "wcFooter" , file: "./images/common/wcFooter.png"}
	
 ];
 
 var wcColor = {
	 background : {r:"239", g:"238", b:"210"},
         sysInfoBackground: {r:"193", g:"192", b:"173"}   ,
		 //(define DIALOG_BACKGROUND_COLOR (make-color 174 220 67))
		 leftDialogBackgroundColor:{r:"174", g:"220", b:"67"} ,
		 profileNameColor:{r:"157", g:"174", b:"173"} 
		 
 }
 
 var dialog = {
	 TOP: 115,
	 ROW_SPACING: 10,
	 DEFAULT_MARGIN: 10,
	 RADIUS: 10,
	 TRIANGLE_WIDTH: 12,
	 TRIANGLE_HALF_HEIGHT: 4,
	 LEFT_PROFILE_X : 10, 
	 RIGHT_PROFILE_X_OFFSET: -10,
	 PROFILE_PHOTO_WIDTH: 70,
	 PROFILE_PHOTO_HEIGHT: 70,
       SYS_INFO_LEFT_SPACING : 20,
       SYS_INFO_TEXT_WIDTH_MARGIN: 5,
       SYS_INFO_TEXT_HEIGHT_MARGIN: 3,
	   OPPOSITE_MARGIN: 20,
	   FRAME_Y_MARGIN:12 ,  //the text and the rectangle top & botton margin
       FRAME_X_MARGIN:10,
	   FRAME_BOTTOM_OFFSET:10, //Now, there is a offset that unknown.
	   LEFT_PROFILE_X:10,
	   LEFT_BRACKET_MARGIN:10,
	   CHAT_ID_TEXT_HEIGHT: 15,
   	   cbrWidth:100, //Chatting Bar Right part Width
   	 cbsFrom: 130,//Chatting Bar Saying area from (x)
   	 cbbFrom:240 , //Chatting Bar Blank area from (x)
   	 cbbWidth : 30 , //Chatting Bar Blank area width 
	 SAYING_Y_OFFSET:46,
	 SAYING_X_OFFSET:10
	
 }
 
 /*
(define fontDialog (make-object font% 19 "宋体"
                     'default))
(define fontId (make-object font% 15 "宋体"
                 'default))

(define fontColor "black")
 */
 
