<?
if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
?>
<div class="mfeedback">
<?if(!empty($arResult["ERROR_MESSAGE"]))
{
	foreach($arResult["ERROR_MESSAGE"] as $v)
		ShowError($v);
}
if(strlen($arResult["OK_MESSAGE"]) > 0)
{
	?><div class="mf-ok-text"><?=$arResult["OK_MESSAGE"]?></div><?
}
?>




<form action="<?=POST_FORM_ACTION_URI?>" class="form-content" method="POST">
	<?=bitrix_sessid_post()?>
  <div class="title-site--h4">Обратный звонок</div>
  <div class="form-group">
    <div class="form-group__item">
      <input type="text" name="user_name" placeholder="<?=$arResult["AUTHOR_NAME"]?> <?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("NAME", $arParams["REQUIRED_FIELDS"])):?> *<?endif?>">
    </div>
    <div class="form-group__item">
      <input type="tel" placeholder="+7 <?if(empty($arParams["REQUIRED_FIELDS"]) || in_array("EMAIL", $arParams["REQUIRED_FIELDS"])):?> *<?endif?>"  minlength="18" maxlength="18">
      <span class="form__error">Это поле должно содержать телефон в формате +7 (123) 456-78-90 </span>
    </div>
  </div>

	<?if($arParams["USE_CAPTCHA"] == "Y"):?>
    <div class="mf-captcha">
      <div class="mf-text"><?=GetMessage("MFT_CAPTCHA")?></div>
      <input type="hidden" name="captcha_sid" value="<?=$arResult["capCode"]?>">
      <img src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["capCode"]?>" width="180" height="40" alt="CAPTCHA">
      <div class="mf-text"><?=GetMessage("MFT_CAPTCHA_CODE")?><span class="mf-req">*</span></div>
      <input type="text" name="captcha_word" size="30" maxlength="50" value="">
    </div>
	<?endif;?>

  <div class="form-content__btn group">
    <input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
    <input type="submit" name="submit" class="btn btn--min-width btn--sm btn--second-st" value="<?=GetMessage("MFT_SUBMIT")?>">
    <div class="form-content-txt">С вами свяжутся в течение 20 минут</div>
  </div>
</form>