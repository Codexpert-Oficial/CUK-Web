<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria</title>
    <link rel="shortcut icon" href="../imgs/icons/logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/main/start.css">
    <link rel="stylesheet" href="../css/gallery.css">
</head>

<body>

    <div class="modal__container">
        <div class="modal__close__icon__container">
            <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 0 384 512" class="modal__close__icon">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </div>
        <div class="modal__arrow__icon__container modal__arrow__icon-left__container">
            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 320 512" class="modal__arrow__icon modal__arrow__icon-left">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
        </div>
        <img class="modal__img" src="#" alt="modal imagen">
        <div class="modal__arros__icon__container modal__arros__icon-right__container">
            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 320 512" class="modal__arrow__icon modal__arrow__icon-right">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
        </div>
    </div>

    <header>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="header__background">
            <path d="M-3.10,94.25 C132.89,99.19 64.05,41.95 500.27,58.72 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: url(#gradient__header);"></path>
            <defs>
                <linearGradient id="gradient__header">
                    <stop offset="5%" stop-color="#3396FF" />
                    <stop offset="95%" stop-color="#1864FC" />
                </linearGradient>
            </defs>
        </svg>
        <section class="header__container">

            <a href='' class="header__logo">
                <img src="../imgs/logo.png" class="header__logo__img" alt="logo CUK">
            </a>
            <nav class="header__nav">
                <ul class="header__links__container">
                    <li>
                        <a href="../html/index.html" class="header__link">Inicio</a>
                    </li>
                    <li>
                        <a href="../html/institutional.html" class="header__link">Institucional</a>
                    </li>
                    <li>
                        <a href="../html/affiliates.html" class="header__link">Afiliadas</a>
                    </li>
                    <li>
                        <a href="" class="header__link">Galeria</a>
                    </li>
                    <li>
                        <a href="../html/championships.html" class="header__link">Campeonatos</a>
                    </li>
                    <li>
                        <a href="../html/news.html" class="header__link">Noticias</a>
                    </li>
                    <li>
                        <a href="" class="header__link">Contacto</a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>

    <main>
        <article class="start" id="gallery__start">
            <section class="start__content start__content-center">
                <h1 class="start__title">Galeria</h1>
            </section>
        </article>

        <article class="gallery">
            <?php

            $imgs = glob("../imgs/gallery/*");
            echo "<section class='gallery__container'>";
            echo "<div class='imgs__container'>";
            foreach ($imgs as $key => $img) {
                echo "<style> #img" . $key . "{background-image:url('../imgs/gallery/img" . $key + 1 . ".webp');} </style>";
                echo "<div class='gallery__img' id='img" . $key . "'> </div>";
                if (($key + 1) % 48 == 0) {
                    echo "</div>";
                    echo "<div class='load__more__container'>";
                    echo "<input type='button' class='load__more' value='Mostrar mas'>";
                    echo "</div>";
                    echo "</section>";
                    echo "<section class='gallery__container gallery__container__hidden'>";
                    echo "<div class='imgs__container'>";
                }
            }

            ?>


        </article>

    </main>

    <footer>
        <div class="footer__container">
            <p class="copyRight">&copy; COPYRIGHT 2022 - CUK.ORG.UY</p>
            <div class="footer__line"></div>
            <a href="" class="codexpert__link">Desarrollado por Codexpert</a>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="footer__background">
            <path d="M-3.10,94.25 C132.89,99.19 64.05,41.95 500.27,58.72 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: url(#gradient__footer);"></path>
            <defs>
                <linearGradient id="gradient__footer">
                    <stop offset="5%" stop-color="#3396FF" />
                    <stop offset="95%" stop-color="#1864FC" />
                </linearGradient>
            </defs>
        </svg>
    </footer>

    <script src="../js/gallery.js"></script>

</body>

</html>