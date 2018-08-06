<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>




<div class="owl-carousel main-screen-slider ">
	<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
  <div class="main-screen-item" style="background-image: url('<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>');" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
    <div class="container">
      <div class="grid">
        <div class="grid__item grid__item--lg5 grid__item--md8">
          <div class="main-screen-item__title">
						<?if($arParams["DISPLAY_NAME"]!="N" && $arItem["NAME"]):?>
              <b><?echo $arItem["NAME"]?></b><br />
						<?endif;?>
          </div>
					<?if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arItem["PREVIEW_TEXT"]):?>
						<?echo $arItem["PREVIEW_TEXT"];?>
					<?endif;?>
          <span data-fancybox data-src="#modal1" class="btn"><?=$arItem['PROPERTIES']['button_title']['VALUE'] ;?></span>
        </div>
        <div class="main-screen-item__txt"><?=$arItem['PROPERTIES']['postscript']['VALUE'] ;?></div>
      </div>
    </div>
    <div class="main-screen-slider-next owl-nav"></div>
  </div>
	<?endforeach;?>
</div>

