<?
  use Bitrix\Main\Page\Asset;
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<title><? $APPLICATION->showTitle() ;?></title>
	<? $APPLICATION->showHead() ;?>
	<meta name="keywords" content="">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
	<meta name="format-detection" content="telephone=no">
  <?
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/main.css');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/owl.carousel.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jcf.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jquery.viewportchecker.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jquery.fancybox.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/simplebar.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jquery.zoom.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jquery.mobile.custom.min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/modernizr.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/libsmin/jquery.flexslider-min.js');
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/main.js');
  ?>
</head>

<body>
<? $APPLICATION->showPanel() ;?>
<div id="wrapper">




	<div id="modal1" style="display: none;" class="st-modal st-modal--1">
		<form action="#" class="form-content">
			<div class="title-site--h4">Обратный звонок</div>
			<div class="form-group">
				<div class="form-group__item">
					<input type="text" placeholder="Имя *" required>
				</div>
				<div class="form-group__item">
					<input type="tel" placeholder="+7" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18">
					<span class="form__error">Это поле должно содержать телефон в формате +7 (123) 456-78-90</span>
				</div>
			</div>
			<div class="form-content__btn group">
				<button class="btn btn--min-width btn--sm btn--second-st">Отправить</button>
				<div class="form-content-txt">С вами свяжутся в течение 20 минут</div>
			</div>
		</form>
	</div>


	<div id="modal2" style="display: none;" class="st-modal st-modal--1">
		<form action="#" class="form-content">
			<div class="form-content__center-bl">
				<div class="title-site--h4">Заявка отправлена</div>
				<span>С вами свяжутся в течение 20 минут</span>
			</div>
		</form>
	</div>



	<div id="modal-resume" style="display: none;" class="st-modal st-modal--1">
		<form action="#" class="form-content">
			<div class="title-site--h4">Обратный звонок</div>
			<div class="form-group">
				<div class="form-group__item">
					<input type="text" placeholder="Имя *" required>
				</div>
				<div class="form-group__item">
					<input type="tel" placeholder="+7" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18">
					<span class="form__error">Это поле должно содержать телефон в формате +7 (123) 456-78-90</span>
				</div>
			</div>
			<div class="form-group form-group--file-wrap">
				<div class="form-group__item">
					<input type="text" placeholder="Расскажите о себе" maxlength="160" required>
				</div>
				<div class="form-group__item form-group__item--file">
					<input type="file">
				</div>
			</div>
			<div class="form-content__btn group">
				<button class="btn btn--min-width btn--sm btn--second-st">Отправить</button>
				<div class="form-content-txt">Нажимая кнопку «Отправить» вы даете согласие на обработку персональных данных</div>
			</div>
		</form>
	</div>




	<!-- header -->
	<header id="header" class="header">


		<div class="header__top">
			<div class="container">


				<div class="search">
					<form action="#" class="search__form">
						<input type="text">
						<button class="btn-search"><img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/icon/icon-search.svg" alt=""></button>
					</form>
				</div>

				<a href="#" class="link-basket">
					<span class="link-basket__icon"></span>
					<span class="link-basket__txt">Корзина</span>
				</a>

				<div class="lang-panel">
					<a href="#" class="lang-panel-link">
						<span class="lang-panel-link__img"><img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-flag1.jpg" alt=""></span>
						<span class="lang-panel-link__txt">RU</span>
					</a>
					<span class="lang-panel__icon"></span>
					<ul class="lang-panel__list">
						<li>
							<a href="#" class="lang-panel-link">
								<span class="lang-panel-link__img"><img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-flag1.jpg" alt=""></span>
								<span class="lang-panel-link__txt">RU</span>
							</a>
						</li>
						<li>
							<a href="#" class="lang-panel-link">
								<span class="lang-panel-link__img"><img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-flag1.jpg" alt=""></span>
								<span class="lang-panel-link__txt">ENG</span>
							</a>
						</li>
					</ul>
				</div>


			</div>
		</div>


		<div class="header__content">
			<div class="container">

				<div class="logo">

          <?$APPLICATION->IncludeComponent(
						"bitrix:main.include",
						"",
						Array(
							"AREA_FILE_SHOW" => "file",
							"AREA_FILE_SUFFIX" => "inc",
							"EDIT_TEMPLATE" => "",
							"PATH" => "/include/home/logo.php"
						)
					);?>
        </div>

				<div class="head-menu">
					<?$APPLICATION->IncludeComponent("bitrix:menu", "main_menu", Array(
	"ALLOW_MULTI_SELECT" => "N",	// Разрешить несколько активных пунктов одновременно
		"CHILD_MENU_TYPE" => "sub",	// Тип меню для остальных уровней
		"DELAY" => "N",	// Откладывать выполнение шаблона меню
		"MAX_LEVEL" => "2",	// Уровень вложенности меню
		"MENU_CACHE_GET_VARS" => array(	// Значимые переменные запроса
			0 => "",
		),
		"MENU_CACHE_TIME" => "3600",	// Время кеширования (сек.)
		"MENU_CACHE_TYPE" => "N",	// Тип кеширования
		"MENU_CACHE_USE_GROUPS" => "Y",	// Учитывать права доступа
		"ROOT_MENU_TYPE" => "main",	// Тип меню для первого уровня
		"USE_EXT" => "N",	// Подключать файлы с именами вида .тип_меню.menu_ext.php
	),
	false
);?>

				</div>

			</div>
		</div>

	</header>
	<!-- end header -->


	<!-- #middle-->
	<div id="middle">
    <?if($APPLICATION->GetCurPage() !== '/'):?>
		<!-- inner pages bloks -->
		<section class="main-screen-inner">
			<div class="container">
				<h1><?$APPLICATION->ShowTitle(false);?></h1>
			</div>
		</section>

		<section class="section-st section-st--inner">
			<div class="container">

				<ul class="bread-crumbs">
					<li>О компании</li>
				</ul>
				<!-- inner pages bloks -->
        <?endif;?>