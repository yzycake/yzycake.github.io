$(function  () {
	initHomeImgWall();
	function initHomeImgWall () {
		var i=1;
		setInterval(function  () {
			i=i++<3?i:1;
			$("#homeImgWall").css("background","url(/magic/img/home_img_wall/img_wall_"+i+".jpg) 0px -120px no-repeat");
			$("#homeImgWall").css("background-size","cover");
		},3000)
	}
	
	
})