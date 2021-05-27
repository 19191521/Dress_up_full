	var drag_num = 1;




	function display_catalogue (part) {
		var div = document.getElementById('elements');
		div.innerHTML="";
		
		if (part=="hair"){
			div.innerHTML=div.innerHTML+ '<img src="images/icons/hair001.png" id="hair001" onclick="display_hair(\'hair001\',0)"  class="displayed">';
			
			
		}
		
		if (part=="bottom"){
			div.innerHTML=div.innerHTML+ '<img src="images/icons/bottom001.png" id="bottom001" onclick="display_on_body(\'bottom\',\'bottom001\',0)" class="displayed">';
			
		}
		
		if (part=="top"){
			
		}
		
		if (part=="onepiece"){
			
		}
		
		if (part=="socks"){
			
		}
		
		if (part=="shoes"){
			
		}
		
		if (part=="jacket"){
			
		}
		
		if (part=="face"){
			
			div.innerHTML=div.innerHTML+ '<img src="images/icons/face001.png" id="face001" onclick="display_on_body(\'face\',\'face001\',0)" class="displayed">';
			
		}
		
		if (part=="earrings"){
			
		}
		
		if (part=="accessories"){
			//div.innerHTML=div.innerHTML+ '<img src="images/elements/bracelet001.png" id="bracelet001"onclick="display_on_body(\'bracelet1\',\'bracelet001\',0)" class="displayed">';
			//if(document.getElementById('bracelet1')) document.getElementById('bracelet001').className="selec_displayed";
			//div.innerHTML=div.innerHTML+ '<img src="images/elements/hat001.png" id="hat001" onclick="display_on_body(\'hat\',\'hat001\',0)" class="displayed">';
			//show_select("hat");
			
		}

		if(part=="drag"){
			
			//div.innerHTML=div.innerHTML+ '<img src="images/elements/drag001.png" class="displayed" onclick="display_drag(\'drag1\',\'drag001\')" width=20%>';
		}
		
		
		show_select(part);
	}

		function remove_all(){
			
			var imgdiv = document.getElementById("doll");
			imgdiv.innerHTML="<img src='images/elements/face001.png' id='face' name='face001' class='element'> <img src='images/elements/hairw0hat.png' id='nohat' class='element'> <img src='images/elements/bottom001.png' id='bottom' name='bottom001' class='element'> <img  id='hair' src='images/elements/hair001.png' name='hair001' class='element'> <img src='images/elements/base_v2.png' class='base'> ";

		
		}
		function remove(part){
			var outfit = document.getElementById('doll');
			var imgdiv = document.getElementById(part); 
			if(imgdiv){
				imgdiv.remove();}
			if(part=="bottom"){
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/bottom001.png' id='bottom' name='bottom001' class='element'>" ;
				
			}

		
		}
		
		
		function hair_switch(){
			var outfit = document.getElementById('doll');
			var divnohat = document.getElementById("nohat");
			var divwhat = document.getElementById("what");
			if(divnohat){
				divnohat.remove();
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/hairwhat.png' id='what' class='element'>" ;
			}
			if(divwhat){
				divwhat.remove();
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/hairw0hat.png' id='nohat' class='element'>" ;
			}

		
		}
		
		
		
		
				function remove_one_drag(part){
			var imgdiv = document.getElementById(part); 
			if(imgdiv){
				imgdiv.remove();}
			document.getElementById("move_buttons").style.visibility = "hidden";

		
		}
		function remove_drag(){

			document.querySelectorAll('.drag').forEach(e => e.remove());
		}
		

		
		function display_on_body(part,name,dblsup){
				var imgdiv = document.getElementById(part); 
				var outfit = document.getElementById('doll');	
				if(dblsup==1){
					var to_add = '<div id="'+part+'" name="'+name+'"><img class="bg_element" name="'+name+'b" src="images/elements/'+name+'b.png"><img class="element" name="'+name+'a" src="images/elements/'+name+'a.png"></div>'
				} else{
					var to_add = '<img class="element" name="'+name+'" id="'+part+'" src="images/elements/'+name+'.png">';
				}
				document.getElementById("move_buttons").style.visibility = "hidden";

				
				if (imgdiv) {
				
					
					
					
					
					
					var past_part = imgdiv.outerHTML;
					
					
					imgdiv.remove();
					
					if(past_part !== to_add ){
						
						outfit.innerHTML =  outfit.innerHTML+to_add ;
						
						var selecname = imgdiv.getAttribute("name");
						var selecdiv = document.getElementById(selecname); 
						selecdiv.className="displayed";
						document.getElementById(name).className="selec_displayed"; 
						
							
					} else
					{
						if(part=="bottom"){
							outfit.innerHTML = '<img class="element" name="bottom001" id="bottom" src="images/elements/bottom001.png">'+ outfit.innerHTML;
						}
						if(part=="face"){
							outfit.innerHTML = '<img class="element" name="face001" id="face" src="images/elements/face001.png">'+ outfit.innerHTML;
						}
						
						var selecname = imgdiv.getAttribute("name");
						var selecdiv = document.getElementById(selecname);  
						selecdiv.className="displayed";
					}

					
					
					
				} 
				else {
					outfit.innerHTML =outfit.innerHTML + to_add ;
					
					document.getElementById(name).className="selec_displayed"; 
				}
				
				

				imgdiv.destroy();
		
		
		}
		
		
		
		

		/*		function display_multiple(part,name){
		document.getElementById("move_buttons").style.visibility = "hidden";
		
		var num = parseInt(name.replace ( /[^\d.]/g, '' ),10);
		var imgdiv = document.getElementById(part+num); 
		var outfit = document.getElementById('doll');
		
		var to_add = '<img class="'+part+'" name="'+name+'" id="'+part+num+'" src="images/'+name+'.png" width="15%">';
		

		
		if (imgdiv) {
			var past_part = imgdiv.outerHTML;
			
			imgdiv.remove();
			
			if(past_part !== to_add ){
				
				outfit.innerHTML = outfit.innerHTML + to_add;	
			}

			
			
			
		} 
		else {
			outfit.innerHTML = outfit.innerHTML + to_add;
		}

		imgdiv.destroy();

		
		 
		
		}*/
		
				function display_hair(name,dblsup){
		var imgdiv = document.getElementById('hair'); 
		var outfit = document.getElementById('doll');
		if(dblsup==1){
			var to_add = '<div id="hair" name="'+name+'"><img class="hair"  src="images/elements/'+name+'a.png"><img class="element" src="images/elements/'+name+'b.png"></div>'
		} else{
			var to_add = '<img class="hair" name="'+name+'" id="hair" src="images/elements/'+name+'.png">';
		}
		document.getElementById("move_buttons").style.visibility = "hidden";

		
		if (imgdiv) {
			
			
			var past_part = imgdiv.outerHTML;
			
			imgdiv.remove();
			
			if(past_part !== to_add ){
				var selecname = imgdiv.getAttribute("name");
				var selecdiv = document.getElementById(selecname);  
				selecdiv.className="displayed";
				document.getElementById(name).className="selec_displayed"; 
				
				outfit.innerHTML =  outfit.innerHTML+to_add ;	
			}
			else{
				var selecname = imgdiv.getAttribute("name");
				var selecdiv = document.getElementById(selecname);  
				selecdiv.className="displayed";
			}

			
			
			
		} 
		else {
			outfit.innerHTML =outfit.innerHTML + to_add ;
			
			document.getElementById(name).className="selec_displayed"; 
		}

		imgdiv.destroy();
		
		
		}
		
		
		
		
			function display_drag(part,name){

		var outfit = document.getElementById('doll');
		var id_element = part+drag_num;
		
		var to_add = '<img class="'+part+'" name="'+name+'" id="'+id_element+'" src="images/elements/'+name+'.png" onclick="move_element(\''+id_element+'\')">';
		drag_num=drag_num+1;

		outfit.innerHTML = outfit.innerHTML + to_add;
		
		var imgdiv = document.getElementById(id_element);
		imgdiv.style.top = "50%";
		imgdiv.style.left = "25%";
		
		move_element(id_element);
		
		
		
		}
		
			function move_element(id_element){
				var movediv = document.getElementById("move_buttons");
				movediv.style.visibility = "visible";
				
				
				
				movediv.innerHTML = '<img id="movebut" class="removebut" src="images/assets/drag-left.png" onclick="move_on_body(\''+id_element+'\',\'left\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'left\')" onmouseup="stop_move()"> '+
				'<img id="movebut" class="removebut" src="images/assets/drag-down.png" onclick="move_on_body(\''+id_element+'\',\'down\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'down\')" onmouseup="stop_move()"> '+
				'<img id="movebut" class="removebut" src="images/assets/drag-up.png" onclick="move_on_body(\''+id_element+'\',\'up\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'up\')" onmouseup="stop_move()">' +
				'<img id="movebut" class="removebut" src="images/assets/drag-right.png" onclick="move_on_body(\''+id_element+'\',\'right\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'right\')" onmouseup="stop_move()">'+
				'<img id="movebut" class="removebut" src="images/assets/drag-close.png" onclick="remove_one_drag(\''+id_element+'\')" width=100%>';
			
			}
			
			
			function move_on_body (id_elem,direction){
				var imgdiv=document.getElementById(id_elem);
				
				
				if(direction=='left'){
					var num = parseFloat(imgdiv.style.left.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.left = (num-0.2)+"%";
				}
				
				if(direction=='right'){
					var num = parseFloat(imgdiv.style.left.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.left = (num+0.2)+"%";
				}
				if(direction=='up'){
					var num = parseFloat(imgdiv.style.top.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.top = (num-0.2)+"%";
				}
				if(direction=='down'){
					var num = parseFloat(imgdiv.style.top.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.top = (num+0.2)+"%";
				}
				
				
			}
		


		function move_conti(id_element,direction){
				interval_=setInterval( function(){
				move_on_body(id_element,direction);
				}, 50 );
				
			
		}
		function stop_move (){
			clearInterval(interval_);
		}
		
		function display_info(){
			var movediv = document.getElementById("infopop");
				movediv.style.visibility = "visible";
			
		}
		function close_info(){
			var movediv = document.getElementById("infopop");
				movediv.style.visibility = "hidden";
		}
		
		function show_select(part){
			var imgdiv = document.getElementById(part); 
		
			if (imgdiv){
				var selecname = imgdiv.getAttribute("name");
				document.getElementById(selecname).className="selec_displayed";
			}
		}



		