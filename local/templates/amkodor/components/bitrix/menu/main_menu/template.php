<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<div class="burger-menu">
  <div class="burger-menu-box">
    <div class="burger-menu-inner"></div>
  </div>
</div>

<div class="menu-wrapper-fixed">
  <div class="menu-open-wrapper">
    <nav class="header-nav">
<ul class="menu" id="horizontal-multilevel-menu">

<?
$previousLevel = 0;
foreach($arResult as $arItem):?>

	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
		<?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
	<?endif?>

	<?if ($arItem["IS_PARENT"]):?>

		<?if ($arItem["DEPTH_LEVEL"] == 1):?>
			<li class="menu-item <?if ($arItem["SELECTED"]):?>active<?endif;?>">
        <span class="menu-item__link menu-item__link--dd-open">
        <a href="<?=$arItem["LINK"]?>">
          <?=$arItem["TEXT"]?>
        </a>
        </span>
				<ul class="menu-dd">
		<?else:?>
			<li class="menu-item <?if ($arItem["SELECTED"]):?>active<?endif?>">
        <a href="<?=$arItem["LINK"]?>" class="parent"><?=$arItem["TEXT"]?></a>
				<ul>
		<?endif?>

	<?else:?>

		<?if ($arItem["PERMISSION"] > "D"):?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<li class="menu-item <?if ($arItem["SELECTED"]):?>active<?endif?>">
          <span class="menu-item__link menu-item__link--dd-open">
          <a href="<?=$arItem["LINK"]?>" >
            <?=$arItem["TEXT"]?>
          </a>
          </span>
        </li>
			<?else:?>
				<li class="menu-dd-item <?if ($arItem["SELECTED"]):?><?endif?>">
          <a href="<?=$arItem["LINK"]?>" class="menu-dd-item__link">
            <?=$arItem["TEXT"]?>
          </a>
        </li>
			<?endif?>

		<?else:?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
        <li class="menu-item <?if ($arItem["SELECTED"]):?>active<?endif?>">
          <span class="menu-item__link menu-item__link--dd-open">
          <a href="<?=$arItem["LINK"]?>" >
            <?=$arItem["TEXT"]?>
          </a>
          </span>
        </li>
			<?else:?>
				<li><a href="" class="denied" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
			<?endif?>

		<?endif?>

	<?endif?>

	<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

<?endforeach?>

<?if ($previousLevel > 1)://close last item tags?>
	<?=str_repeat("</ul></li>", ($previousLevel-1) );?>
<?endif?>

</ul>
    </nav>
    <span class="target"></span>
  </div>
</div>

<?endif?>





<!--              <ul class="menu">-->
<!--                <li class="menu-item">-->
<!--                  <span class="menu-item__link menu-item__link--dd-open"><a href="about.html">О компании</a></span>-->
<!--                  <ul class="menu-dd">-->
<!--                    <li class="menu-dd-item">-->
<!--                      <a href="#" class="menu-dd-item__link">Амкодор-Беларусь</a>-->
<!--                    </li>-->
<!--                    <li class="menu-dd-item">-->
<!--                      <a href="#" class="menu-dd-item__link">Амкодор-Брянск</a>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="catalog.html" class="menu-item__link">Каталог</a>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="#" class="menu-item__link">Сервис</a>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="#" class="menu-item__link">Новости</a>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="contacts.html" class="menu-item__link">Контакты </a>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="dealers-page.html" class="menu-item__link">Дилерская сеть</a>-->
<!--                </li>-->
<!--                <li class="menu-item">-->
<!--                  <a href="#" class="menu-item__link">Инструменты финансирования</a>-->
<!--                </li>-->
