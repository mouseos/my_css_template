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

