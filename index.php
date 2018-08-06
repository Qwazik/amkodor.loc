<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("1С-Битрикс: Управление сайтом");
?>
<section class="main-screen">
  <div class="main-screen-slider owl-carousel">
    <div class="main-screen-item" style="background-image: url('<?=SITE_TEMPLATE_PATH;?>/assets/img/main-screen.jpg');">
      <div class="container">
        <div class="grid">
          <div class="grid__item grid__item--lg5 grid__item--md8">
            <div class="main-screen-item__title">Производим и продаем спецтехнику</div>
            <p>Являемся эксклюзивным дилером холдинга "Амкодор" <br> <a href="http://amkodor.by/" alt = "сайт откроется в новой вкладке" rel="external"/>Официальный сайт холдинга «Амкодор»</a></p>
            <span data-fancybox data-src="#modal1" class="btn">Заказать КП</span>
          </div>
          <div class="main-screen-item__txt">Сегодня и всегда!</div>
        </div>
      </div>
      <div class="main-screen-slider-next owl-nav"></div>
    </div>
    <div class="main-screen-item" style="background-image: url('<?=SITE_TEMPLATE_PATH;?>/assets/img/main-screen.jpg');">
      <div class="container">
        <div class="grid">
          <div class="grid__item grid__item--lg5 grid__item--md8">
            <div class="main-screen-item__title">Производим и продаем спецтехнику</div>
            <p>Являемся эксклюзивным дилером холдинга "Амкодор" <br> <a href="http://amkodor.by/" alt = "сайт откроется в новой вкладке" rel="external"/>Официальный сайт холдинга «Амкодор»</a></p>
            <span data-fancybox data-src="#modal2" class="btn">Заказать КП</span>
          </div>
          <div class="main-screen-item__txt">Сегодня и всегда!</div>
        </div>
      </div>
      <div class="main-screen-slider-next owl-nav"></div>
    </div>
  </div>
</section>

<section class="section-st">
  <div class="container">
    <div class="grid">
      <div class="grid__item grid__item--lg6 grid__item--md6">
        <div class="link-content">
            <span class="link-content__img">
              <img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-conditions1.jpg" alt="">
              <a href="#" alt="Перейти в раздел" class="btn btn--sm">Подробнее</a>
            </span>
          <div class="link-content__txt">
            <div>
              <h3>Лизинг</h3>
              <p>Мы сотрудничаем с ведущими банками и готовы предложить самые выгодные условия покупки техники.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid__item grid__item--lg6 grid__item--md6">
        <div class="link-content">
            <span class="link-content__img">
              <img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-conditions2.jpg" alt="">
              <a href="#" alt="Перейти в раздел" class="btn btn--sm">Подробнее</a>
            </span>
          <div class="link-content__txt">
            <div>
              <h3>Моментальная сделка</h3>
              <p>Мы предлагаем скидки, быструю доставку и самые выгодные условия на покупку техники здесь и сейчас. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid__item grid__item--lg6 grid__item--md6">
        <div class="link-content">
            <span class="link-content__img">
              <img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-conditions3.jpg" alt="">
              <a href="#" alt="Перейти в раздел" class="btn btn--sm">Подробнее</a>
            </span>
          <div class="link-content__txt">
            <div>
              <h3>Покупка в кредит</h3>
              <p>Только у нас вы сможете купить технику Амкодор в кредит по самым выгодным ценам. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid__item grid__item--lg6 grid__item--md6">
        <div class="link-content">
            <span class="link-content__img">
              <img src="<?=SITE_TEMPLATE_PATH;?>/assets/img/img-conditions4.jpg" alt="">
              <a href="#" alt="Перейти в раздел" class="btn btn--sm">Подробнее</a>
            </span>
          <div class="link-content__txt">
            <div>
              <h3>Trade-in</h3>
              <p>Вы можете уже сегодня привезти свой старый погрузчик и уехать на новом! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-st section-st--dealers">
  <div class="container">
    <div class="dealers">
      <div class="dealers__block">
        <div class="title-site--h2 color-wt">Дилеры в федеральных округах</div>
        <ul class="dealers-list">
          <li><a href="dealers-page.html">Центральный</a></li>
          <li><a href="dealers-page.html">Северно-Западный</a></li>
          <li><a href="dealers-page.html">Приволжский</a></li>
          <li><a href="dealers-page.html">Северо-Кавказский </a></li>
          <li><a href="dealers-page.html">Уральский</a></li>
          <li><a href="dealers-page.html">Сибирский</a></li>
          <li><a href="dealers-page.html">Дальневосточный</a></li>
        </ul>
        <form action="#" class="form-content">
          <div class="title-site--h4">Обратный звонок</div>
          <div class="form-group">
            <div class="form-group__item">
              <input type="text" placeholder="Имя *">
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
      <div class="dealers-info">
        <div class="dealers-info__title"><span>2000</span> погрузчиков</div>
        <ul class="dealers-info-list">
          <li class="dealers-info-list__item dealers-info-list__item--1"><span>Развитая дилерская сеть и сервисное обеспечение</span></li>
          <li class="dealers-info-list__item dealers-info-list__item--2"><span>29 хозяйствующих субъекта 15 заводов</span></li>
          <li class="dealers-info-list__item dealers-info-list__item--3"><span>Оптимальное соотношение цены и качества</span></li>
          <li class="dealers-info-list__item dealers-info-list__item--4"><span>Индивидуальный подход к каждому клиенту</span></li>
          <li class="dealers-info-list__item dealers-info-list__item--5"><span>Выгодные условия покупки техники</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>