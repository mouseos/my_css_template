//css 変数を取得する
function get_css_var(name){
	return(getComputedStyle(document.documentElement).getPropertyValue(name));
}

//menu表示非表示
function show_hide_menu(){
	const menu = document.querySelector(".slide-menu-contents");//.slide-menu-contentsを取得
	const menu_icon = document.querySelector(".nav-menu-button>.material-icons");//.slide-menu-contentsを取得
	if(menu.style.display==""||menu.style.display=="none"){
		menu.style.display = 'block'
		menu_icon.innerText='close'//閉じるアイコンにする
	}else{
		menu.style.display = 'none'
		menu_icon.innerText='menu'//menu iconに戻す
	}
}



//スライドショー用のjson(サーバー立てて同一ドメインからアクセスしないとCORS policyに引っかかるため、今回は変数に入れておく)実運用時はfetchで取得するように書き換える
var programs_json = [
{
"image_url": "https://source.unsplash.com/random",
"title": "Image 1",
"details": "This is a beautiful image of a sunset over the ocean."
},
{
"image_url": "https://source.unsplash.com/random",
"title": "Image 2",
"details": "This is a stunning photograph of a mountain landscape."
}
];
function run_slider(){
	let html="";
	for (const program of programs_json) {
		html+='<li><img src="'+program.image_url+'"><div class="slider-details"><h1>'+program.title+'</h1><p>'+program.details+'</p></div></li>'
	}
	document.querySelector('.slider').innerHTML=html;

	let slider = document.querySelector('.slider');
	let slides = slider.querySelectorAll('li');
	let currentSlide = 0;
	slides[0].style.display = 'block';
	document.querySelector('.slider').style.backgroundImage = 'url("' + programs_json[0].image_url + '")';
	setInterval(() => {
		slides[currentSlide].style.display = 'none';
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].style.display = 'block';
		document.querySelector('.slider').style.backgroundImage = 'url("' + programs_json[currentSlide].image_url + '")';
	}, 6000);
}

run_slider();