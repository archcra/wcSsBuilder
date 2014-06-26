
function fillLengthWidthImage(from, to, y, image, ctx){
	//TODO: this should be rewrited, refer: fill the wc body background
	var quotient = (to - from)/image.width;
	var repeats = (to - from)% image.width == 0 && quotient || (quotient + 1)
	
	var drawFrom=0;
	for (i = 0; i<repeats; i++){
		drawFrom = from + image.width*i < to - image.width &&  from + image.width*i || to - image.width;
		ctx.drawImage(image,drawFrom ,y);
	}
	
}

function exportCanvas(){
	var canvas = document.getElementById('canvas');
    // save canvas image as data url (png format by default)
    var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('canvasImg').src = dataURL;
}

function initCanvas(){
	var canvas = document.getElementById('canvas');
	if (canvas) {
	    canvas.setAttribute('width', scenario.screen.width); //TODO: add if null then default: __screen
	    canvas.setAttribute('height', scenario.screen.height); 
	}
	
	var ctx = canvas.getContext("2d");
	// Fill all the background
	ctx.fillStyle = "#000000";	
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	
	// Draw the phone status bar
	var img=document.getElementById("statusBarLeft");
	var statusBarHeight = img.height;
	ctx.drawImage(img,0,0);
	
	var img=document.getElementById("statusBarRight");
	ctx.drawImage(img,scenario.screen.width - img.width,0);
	
	
	// Draw the wc header
	var img=document.getElementById("wcBarLeft");
	var wcBarLeftWidth = img.width;
	var wcBarHeight = img.height;
	ctx.drawImage(img,0,statusBarHeight+1);

	var img=document.getElementById("wcBarRight");
	var wcBarRightWidth = img.width;
	ctx.drawImage(img,scenario.screen.width - img.width,statusBarHeight);
	
	var img=document.getElementById("wcBarMiddle");
	fillLengthWidthImage(wcBarLeftWidth, scenario.screen.width - wcBarRightWidth, statusBarHeight , img, ctx);
	
	// Draw the group name
	drawGroupName(ctx, statusBarHeight, wcBarHeight);

	
	//draw the wc footer
	var img=document.getElementById("wcFooter");
	var wcFooterHeight = img.height;

	var cbrWidth = dialog.cbrWidth;//Chatting Bar Right part Width
	var cbsFrom = dialog.cbsFrom;//Chatting Bar Saying area from (x)
	var cbbFrom = dialog.cbbFrom ; //Chatting Bar Blank area from (x)
	var cbbWidth = dialog.cbbWidth ; //Chatting Bar Blank area width 
	//Draw the left part
	ctx.drawImage(img,0,0, img.width - cbrWidth, img.height,
		0, scenario.screen.height   - wcFooterHeight,img.width - cbrWidth, img.height  );
	
	// Draw the right part
	ctx.drawImage(img,img.width - cbrWidth,0,  cbrWidth, img.height,
		scenario.screen.width - cbrWidth, scenario.screen.height   - wcFooterHeight, cbrWidth, img.height  );

	// Draw the center part
	ctx.drawImage(img,cbbFrom ,0,  cbbWidth, img.height,
		cbsFrom, scenario.screen.height   - wcFooterHeight, 
		scenario.screen.width - cbrWidth - cbsFrom, img.height  );

	// Fill the wc body background
	var colorStr= getColor("background"); 
	ctx.fillStyle = colorStr;
	ctx.fillRect(0,statusBarHeight + wcBarHeight,canvas.width,
		canvas.height - statusBarHeight - wcBarHeight - wcFooterHeight);
	
	// Draw the dialogs
	drawDialogs(ctx);

	//Draw the saysing
	drawSaying(ctx, scenario.screen.height   -  wcFooterHeight);
	
	//Make canvas can be saved
    //var canvas = document.getElementById('canvas');
    // save canvas image as data url (png format by default)
    var dataURL = canvas.toDataURL();
    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('canvasImg').src = dataURL;
}

function drawSaying(context, y){
	context.font =  scenario.screen.SAYING_FONT;

	context.fillText(scenario.common.saying,
		dialog.cbsFrom + dialog.SAYING_X_OFFSET , y + dialog.SAYING_Y_OFFSET);
}

function drawGroupName(context, y0, y1){
	context.font =  scenario.screen.GROUP_NAME_FONT;

    var groupNameWidth = scenario.common.groupName.length * 
        context.measureText("字").width;
    var groupNameX = (scenario.screen.width - groupNameWidth ) /2 ;
    console.log('groupNameWidth', groupNameWidth, groupNameX, 
    	scenario.common.groupName, y0 + y1 /2 + 
        context.measureText("字").width/2 );

    context.fillStyle = "white";
	context.fillText(scenario.common.groupName,
		groupNameX + scenario.screen.GROUP_NAME_X_OFFSET, y0 + y1 /2 + 
        context.measureText("字").width* scenario.screen.FONT_RATIO/2
		);
}

function getColor(name){
	var color= 
	"rgb("+ wcColor[name].r+","+
		wcColor[name].g+ "," +wcColor[name].b +")";
return color;
}

function initImageObjects(){
	//var imageObjects = [];
	var keys = Object.keys(scenario.roles);
	for (i=0;i<keys.length;i++){
		imageObjects.push({id:keys[i], file:"images/profile/"+keys[i]+".png"});
	}


	//TODO prepare SYSTEM_IMAGE objects
	for (i=0;i<scenario.dialogs.length;i++){
		var key = Object.keys(scenario.dialogs[i])[0];
		if(key == "SYSTEM_IMAGE"){
			var imageName = scenario.dialogs[i][key];
			imageObjects.push({id:imageName, file:"images/dialog/"+imageName+".png"});
		}
	}

	return imageObjects;
}

function initImages(){
	var imageObjects = initImageObjects();
	var imagesElement = document.getElementById('images');
	var newImage;
	for (i=0;i<imageObjects.length;i++){
		newImage = document.createElement('img');
		newImage.setAttribute('id', imageObjects[i].id); 
		newImage.setAttribute('alt', imageObjects[i].id); 
   	 	newImage.setAttribute('src', imageObjects[i].file);//'./images/common/phoneHLeft.png'); 
newImage.setAttribute('style', 'display:none'); 
imagesElement.appendChild(newImage);
}
}

function drawDialogs(ctx){
	var yOffset = dialog.TOP;
	
	var dialogHeight = 0;
	for(i =0; i< scenario.dialogs.length; i++){
		yOffset += dialog.ROW_SPACING;
		dialogHeight = drawDialog(scenario.dialogs[i], yOffset,ctx );
		yOffset += dialogHeight;
	}
}

function drawDialog(info, y, ctx){
	var subject = Object.keys(info)[0];
	var infoHeight = 0;
	
	switch(subject){
		case "SYSTEM":
		infoHeight = drawSystemInfo(info[subject],y, ctx);
		break;
		case "SYSTEM_IMAGE":
		infoHeight = drawSystemImage(info[subject],y, ctx);
		break;
		case "theme":
		infoHeight = drawTheme(info[subject],y, ctx);
		break;
	default://Others, the left IDs.
	infoHeight = drawOthers(subject, info[subject],y, ctx);
	break;
	
}
return infoHeight;
}

function drawSystemImage(imageName, y, context,width, height){
	var img=document.getElementById(imageName);
	var drawWidth = width || img.width;
	if (drawWidth > scenario.screen.width)
		drawWidth = scenario.screen.width;
	
	var drawLeft = (scenario.screen.width - drawWidth)/2;
	var drawHeight = height || img.height;
	
	context.drawImage(img,0,0,  img.width, img.height,
		drawLeft, y,  drawWidth , drawHeight);
	return img.height;
	
}

function drawOthers(subject, infoContent,y , context){
	drawOthersProfile(subject, y, context);
	var dialogSize = getDialogSize(context, infoContent);
	drawLeftDialog(y, dialogSize.width, dialogSize.height, context);
	
  //draw the dialog content.
  fillTextMultiLine(context, infoContent, 
  	dialog.LEFT_PROFILE_X + dialog.PROFILE_PHOTO_WIDTH + dialog.LEFT_BRACKET_MARGIN + dialog.TRIANGLE_WIDTH + dialog.FRAME_X_MARGIN,
  	y + dialog.PROFILE_PHOTO_HEIGHT/2 );
  return dialogSize.height + dialog.PROFILE_PHOTO_HEIGHT/2;

}

function drawOthersProfile(subject, y, context){
	var img=document.getElementById(subject);

	
	var drawLeft = dialog.LEFT_PROFILE_X;
	//draw the profile image
	context.drawImage(img,0,0,  img.width, img.height,
		drawLeft, y,  dialog.PROFILE_PHOTO_WIDTH , dialog.PROFILE_PHOTO_HEIGHT);
	
	
	context.font =  scenario.screen.PROFILE_ID_FONT;
	
	context.fillStyle = getColor("profileNameColor");
	
	
		//draw the profile name
		context.fillText(scenario.roles[subject], 
			dialog.LEFT_PROFILE_X + dialog.PROFILE_PHOTO_WIDTH + dialog.LEFT_BRACKET_MARGIN + dialog.TRIANGLE_WIDTH, 
			y + dialog.CHAT_ID_TEXT_HEIGHT);
	}



	function drawLeftDialog(y, dialogWidth, dialogHeight, context){
		context.lineWidth = 1;
		var frameTop = y + dialog.PROFILE_PHOTO_HEIGHT/2;
		
		context.beginPath();
		var startX = dialog.LEFT_PROFILE_X + dialog.PROFILE_PHOTO_WIDTH + dialog.LEFT_BRACKET_MARGIN;
		var startY = y + dialog.PROFILE_PHOTO_HEIGHT;
		context.moveTo(startX, startY);
		 context.lineTo(startX + dialog.TRIANGLE_WIDTH, startY - dialog.TRIANGLE_HALF_HEIGHT); //triangle line
		 context.lineTo(startX + dialog.TRIANGLE_WIDTH, frameTop + dialog.RADIUS); //verticle line
		 context.quadraticCurveTo(startX + dialog.TRIANGLE_WIDTH, frameTop, 
			 startX + dialog.TRIANGLE_WIDTH + dialog.RADIUS, frameTop); // Angle A
		 context.lineTo(startX + dialog.TRIANGLE_WIDTH + dialogWidth - dialog.RADIUS,
			  frameTop); //horizontal line
		 context.quadraticCurveTo(startX + dialog.TRIANGLE_WIDTH + dialogWidth, frameTop,
		     startX + dialog.TRIANGLE_WIDTH + dialogWidth,frameTop + dialog.RADIUS); //Angle B
		 context.lineTo(startX + dialog.TRIANGLE_WIDTH + dialogWidth, frameTop + dialogHeight  - dialog.RADIUS ); //verticle line
		 context.quadraticCurveTo(startX + dialog.TRIANGLE_WIDTH + dialogWidth, 
		 	frameTop + dialogHeight ,
		 	startX + dialog.TRIANGLE_WIDTH + dialogWidth - dialog.RADIUS,
			 frameTop + dialogHeight);//Angle C
		 context.lineTo(startX + dialog.TRIANGLE_WIDTH + dialog.RADIUS, 
			 frameTop + dialogHeight); //Horizontal line
		 context.quadraticCurveTo(startX + dialog.TRIANGLE_WIDTH,
		 	frameTop + dialogHeight,
		 	startX + dialog.TRIANGLE_WIDTH,
			 frameTop + dialogHeight - dialog.RADIUS);//Angle D
		 context.lineTo( startX + dialog.TRIANGLE_WIDTH,
		 	startY +  dialog.TRIANGLE_HALF_HEIGHT);		 
		 

         // complete custom shape
         context.closePath();
         context.fillStyle = getColor("leftDialogBackgroundColor");
         
         context.fill();
         context.strokeStyle = 'grey';
         context.stroke();
         
     }


     function drawTheme(infoContent,y , context){
     	drawThemeProfile(y, context);
     	var dialogSize = getDialogSize(context, infoContent);
     	var leftX = drawRightDialog(y, dialogSize.width, dialogSize.height, context);
     	fillTextMultiLine(context, infoContent, leftX , y);
     	return dialogSize.height;

     }

     function drawThemeProfile(y, context){
     	var img=document.getElementById("theme");     	
     	var drawLeft = scenario.screen.width +dialog.RIGHT_PROFILE_X_OFFSET - dialog.PROFILE_PHOTO_WIDTH;

     	context.drawImage(img,0,0,  img.width, img.height,
     		drawLeft, y,  dialog.PROFILE_PHOTO_WIDTH , dialog.PROFILE_PHOTO_HEIGHT);
     	
     }

     function drawRightDialog(y, dialogWidth, dialogHeight, context){
     	context.lineWidth = 1;
     	
     	context.beginPath();
     	var startX = scenario.screen.width - dialog.PROFILE_PHOTO_WIDTH - 2 * dialog.DEFAULT_MARGIN;
     	var startY = y + dialog.PROFILE_PHOTO_HEIGHT /2;
     	context.moveTo(startX, startY);
		 context.lineTo(startX - dialog.TRIANGLE_WIDTH, startY - dialog.TRIANGLE_HALF_HEIGHT); //triangle line
		 context.lineTo(startX - dialog.TRIANGLE_WIDTH, startY - dialog.PROFILE_PHOTO_HEIGHT/2 + dialog.RADIUS); //verticle line
		 context.quadraticCurveTo(startX - dialog.TRIANGLE_WIDTH, startY - dialog.PROFILE_PHOTO_HEIGHT/2, 
			 startX - dialog.TRIANGLE_WIDTH - dialog.RADIUS, startY - dialog.PROFILE_PHOTO_HEIGHT/2); // Angle B
		 context.lineTo(startX - dialog.TRIANGLE_WIDTH - dialogWidth + dialog.RADIUS,
			  startY - dialog.PROFILE_PHOTO_HEIGHT/2); //horizontal line
		 context.quadraticCurveTo(startX - dialog.TRIANGLE_WIDTH - dialogWidth, startY - dialog.PROFILE_PHOTO_HEIGHT/2,
		     startX - dialog.TRIANGLE_WIDTH - dialogWidth,startY - dialog.PROFILE_PHOTO_HEIGHT/2 + dialog.RADIUS); //Angle A
		 context.lineTo(startX - dialog.TRIANGLE_WIDTH - dialogWidth, startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2 - dialog.RADIUS ); //verticle line
		 context.quadraticCurveTo(startX - dialog.TRIANGLE_WIDTH - dialogWidth, 
		 	startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2,
		 	startX - dialog.TRIANGLE_WIDTH - dialogWidth + dialog.RADIUS,
			 startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2);//Angle D
		 context.lineTo(startX - dialog.TRIANGLE_WIDTH - dialog.RADIUS, 
			 startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2); //Horizontal line
		 context.quadraticCurveTo(startX - dialog.TRIANGLE_WIDTH,
		 	startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2,
		 	startX - dialog.TRIANGLE_WIDTH,
			 startY + dialogHeight - dialog.PROFILE_PHOTO_HEIGHT/2 - dialog.RADIUS);//Angle C
		 context.lineTo( startX - dialog.TRIANGLE_WIDTH,
		 	startY +  dialog.TRIANGLE_HALF_HEIGHT);		 
		 

         // complete custom shape
         context.closePath();
         context.fillStyle = '#FFFFFF';
         context.fill();
         context.strokeStyle = 'grey';
         context.stroke();
         
		 return startX - dialog.TRIANGLE_WIDTH - dialogWidth; //the dialog left x.
		 
		}

		function fillTextMultiLine(ctx, text, x, y) {
			ctx.font =  scenario.screen.DIALOG_TEXT_FONT;
			var lineHeight = ctx.measureText("字").width * scenario.screen.FONT_RATIO;
			var lines = text.split("\n");

			ctx.fillStyle = "black";
			y += lineHeight+ dialog.FRAME_Y_MARGIN;
			x += dialog.FRAME_X_MARGIN;
			for (var i = 0; i < lines.length; ++i) {
				ctx.fillText(lines[i], x, y );
				y += lineHeight;
			}
		}

		function getDialogSize(ctx, text) {
			ctx.font = scenario.screen.DIALOG_TEXT_FONT;
			var rowHeight = ctx.measureText("字").width * scenario.screen.FONT_RATIO;
			var lines = text.split("\n");
			
			var lineWidth = -1;
			if (lines.length > 1){
				lineWidth =  scenario.screen.width - dialog.DEFAULT_MARGIN -   dialog.PROFILE_PHOTO_WIDTH - dialog.TRIANGLE_WIDTH  - dialog.OPPOSITE_MARGIN ;
			}else{
				lineWidth =ctx.measureText(lines[0]).width + dialog.FRAME_X_MARGIN * 2+ dialog.FRAME_BOTTOM_OFFSET;
			}

			var dialogHeight = rowHeight * lines.length  + dialog.FRAME_Y_MARGIN * 2 + dialog.FRAME_BOTTOM_OFFSET;
			return {width:lineWidth, height: dialogHeight};
		}


		function drawSystemInfo(infoContent, y, context){
        //sib - System Information background
  //TODO: magic number 
  context.font = scenario.screen.SYS_INFO_FONT;
  var textLength = context.measureText(infoContent).width;
var textHeight = 16; //context.measureText(infoContent).height;
context.fillStyle = getColor("sysInfoBackground");
var sibLeft = (scenario.screen.width - dialog.SYS_INFO_LEFT_SPACING - textLength)/2;
var rectHeight = textHeight + 2 * dialog.SYS_INFO_TEXT_HEIGHT_MARGIN
roundRect (context, sibLeft- dialog.SYS_INFO_TEXT_WIDTH_MARGIN, y, 
	textLength + 2 * dialog.SYS_INFO_TEXT_WIDTH_MARGIN,
	rectHeight, 10, true);

context.fillStyle = "white";
context.fillText(infoContent, sibLeft, y + textHeight + dialog.SYS_INFO_TEXT_HEIGHT_MARGIN -2);

return rectHeight;

}

/**
 * Draws a rounded rectangle using the current state of the canvas. 
 * If you omit the last three params, it will draw a rectangle 
 * outline with a 5 pixel border radius 
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate 
 * @param {Number} width The width of the rectangle 
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
 function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
 	if (typeof stroke == "undefined" ) {
 		stroke = true;
 	}
 	if (typeof radius === "undefined") {
 		radius = 5;
 	}
 	ctx.beginPath();
 	ctx.moveTo(x + radius, y);
 	ctx.lineTo(x + width - radius, y);
 	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
 	ctx.lineTo(x + width, y + height - radius);
 	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
 	ctx.lineTo(x + radius, y + height);
 	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
 	ctx.lineTo(x, y + radius);
 	ctx.quadraticCurveTo(x, y, x + radius, y);
 	ctx.closePath();
 	if (stroke) {
 		ctx.stroke();
 	}
 	if (fill) {
 		ctx.fill();
 	}        
 }

