document.addEventListener("DOMContentLoaded", function(){
	var s = document.createElement("div");
	s.className = "switch";
	var o = document.createElement("div");
	o.className = "switch-option";
	s.appendChild(o);
	
	var onchangeevent = new Event("switch.onchange");
	
	function onchange(){
		this.dispatchEvent(onchangeevent);
		if(this.classList.contains("on")){
			this.classList.remove("on");
			this.classList.add("off");
		} else {
			this.classList.remove("off");
			this.classList.add("on");
		}
	}
	
	function turn(){
		var where = this.parentNode;
		var obj = s.cloneNode(true);
		if(this.getAttribute("value") && this.value.toLowerCase()=="on"){
			obj.classList.add("on");
		} else {
			obj.classList.add("off");
		}
		if(this.id){
			obj.id = this.id;
		}
		obj.addEventListener("click", onchange);
		where.insertBefore(obj, this);
		where.removeChild(this);
	}
	
	var d = document.querySelectorAll("input[data-type=switch]");
	for(var i = 0, item; item = d[i]; i++){
		turn.call(item);
	}
});