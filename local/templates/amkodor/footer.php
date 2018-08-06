<!-- inner pages bloks end -->
</div>
</section>
<!-- inner pages bloks end -->


</div><!--end #middle-->

<!-- footer -->
<footer id="footer" class="footer">
	<div class="container">
		<div class="footer-logo">
			<a href="#" class="footer-logo__link"><img src="img/logo-footer.svg" alt=""></a>
		</div>
		<div class="footer-item footer-item--1">
			<div class="footer-item__block">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.include",
					"",
					Array(
						"AREA_FILE_SHOW" => "file",
						"AREA_FILE_SUFFIX" => "inc",
						"EDIT_TEMPLATE" => "",
						"PATH" => "/include/home/footer-phone1.php"
					)
				);?>
      </div>
			<div class="footer-item__block">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.include",
					"",
					Array(
						"AREA_FILE_SHOW" => "file",
						"AREA_FILE_SUFFIX" => "inc",
						"EDIT_TEMPLATE" => "",
						"PATH" => "/include/home/footer-phone2.php"
					)
				);?>

      </div>
		</div>
		<div class="footer-item footer-item--2">
      <div class="footer-item__block">
        <?$APPLICATION->IncludeComponent(
          "bitrix:main.include",
          "",
          Array(
            "AREA_FILE_SHOW" => "file",
            "AREA_FILE_SUFFIX" => "inc",
            "EDIT_TEMPLATE" => "",
            "PATH" => "/include/home/footer-info.php"
          )
        );?>
      </div>
			<div class="footer-item__block copy">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.include",
					"",
					Array(
						"AREA_FILE_SHOW" => "file",
						"AREA_FILE_SUFFIX" => "inc",
						"EDIT_TEMPLATE" => "",
						"PATH" => "/include/home/footer-copyright.php"
					)
				);?></div>
		</div>
	</div>
</footer>
<!-- end footer -->
</div><!-- #wrapper -->


<!--[if !IE]>--> <script>
    // navigation line
    var target = document.querySelector(".target");
    var links = document.querySelectorAll(".header-nav .menu-item__link");

    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("active")) {
            for (i=0; i<links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "1";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";

            var width = this.getBoundingClientRect().width;
            var height = this.getBoundingClientRect().height;
            var left = this.getBoundingClientRect().left + window.pageXOffset;
            var top = this.getBoundingClientRect().top + window.pageYOffset;

            target.style.width = `${width}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.transform = "none";
        }
    }

    for (i=0; i<links.length; i++) {
        // links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        var active = document.querySelector(".header-nav .active");

        if (active) {
            var left = active.getBoundingClientRect().left + window.pageXOffset;
            var top = active.getBoundingClientRect().top + window.pageYOffset;

            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
        }
    }

    window.addEventListener("resize", resizeFunc);


</script><!--<![endif]-->

</body>
</html>