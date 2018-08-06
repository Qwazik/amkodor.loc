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
			<div class="footer-item__block">Приемная<br>Тел.:<button class="btn-copy color-wt" alt"скопировать телефон" data-clipboard-text="+375 (17) 280-87-01">+375 (17) 280-87-01</button></div>
			<div class="footer-item__block">Канцелярия<br>Тел./факс:<button class="btn-copy color-wt" alt"скопировать телефон" data-clipboard-text="+375 (17) 284-91-56">+375 (17) 284-91-56</button><br>Тел.: <button class="btn-copy color-wt" alt"скопировать телефон" data-clipboard-text="+375 (17) 385-68-06">+375 (17) 385-68-06</button></div>
		</div>
		<div class="footer-item footer-item--2">
			<div class="footer-item__block"><button class="btn-copy color-wt" alt"скопировать адрес" data-clipboard-text="220013, Республика Беларусь г. Минск, ул. П. Бровки, 8">220013, Республика Беларусь<br> г. Минск, ул. П. Бровки, 8</button><br><a href="mailto:kanz@amkodor.by" >kanz@amkodor.by</a></div>
			<div class="footer-item__block copy">© 2018, ОАО «АМКОДОР»</div>
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
        links[i].addEventListener("click", (e) => e.preventDefault());
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