<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Discover Amazing places in Japan</title>
        <meta name="author" content="Rozygeldi Halykov" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
            src="https://kit.fontawesome.com/f64c94fd7b.js"
            crossorigin="anonymous"
        ></script>
        <script src="./js/wow.min.js"></script>
        <script>
            new WOW().init();
        </script>
        <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
        <!-- Header start -->
        <header class="header">
            <div class="wrapper">
                <div class="header__wrapper">
                    <a href="/" class="header__logo-link">
                        <img
                            src="./templates/img/svg/odigo-logo-white.svg"
                            alt="Discover Amazing places in Japan"
                            class="header__logo-pic"
                        />
                    </a>

                    <nav class="header__nav">
                        <ul class="header__list menu" id="menu">
                            <li>
                                <a href="./templates/pages/parallax-effect.php" class="header__link"
                                    ><i class="fa-regular fa-newspaper"></i>
                                    &nbsp Parallax</a
                                >
                            </li>
                            <li>
                                <a href="#locations" class="header__link"
                                    ><i class="fa-solid fa-location-dot"></i>
                                    &nbsp Locations</a
                                >
                            </li>
                            <li>
                                <a href="#videos" class="header__link"
                                    ><i class="fa-solid fa-video"></i> &nbsp
                                    Videos</a
                                >
                            </li>
                            <li>
                                <a
                                    href="./templates/image.html"
                                    class="header__link"
                                >
                                    <i class="fa-solid fa-image"></i> &nbsp
                                    Images</a
                                >
                            </li>
                            <li>
                                <a
                                    href="./templates/pages/sign-in.html"
                                    class="header__link"
                                    ><i
                                        class="fa-solid fa-right-to-bracket"
                                    ></i>
                                    &nbsp Sign in</a
                                >
                            </li>
                        </ul>
                    </nav>
                    <div class="hamburger">
                        <div class="hamburger__field" id="hamburger">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                    <div class="popup" id="popup"></div>
                </div>
            </div>
        </header>
        <!-- Header end -->

        <main class="main">
            <!-- Intro start -->
            <section class="intro" id="sign-in">
                <div class="arrow-1 page__arrow">
                    <a href="#benefits"
                        ><i class="fa-solid fa-arrow-down"></i
                    ></a>
                </div>
                <div class="wrapper intro-wrapper">
                    <h1
                        data-wow-delay=".1s"
                        class="intro__title wow animate__animated animate__swing"
                    >
                        Discover Amazing places in Japan
                    </h1>
                    <p
                        data-wow-delay=".5s"
                        class="intro__subtitle animate__animated animate__wobble"
                    >
                        Jump off balcony, onto stranger's head. Chase ball of
                        string hide when guests come over. Being gorgeous with
                        belly side up i could pee on this if i had the energy
                        but under the bed, for attack the child, open the door,
                    </p>
                    <form class="search-form">
                        <fieldset class="serach-form__wrap">
                            <div class="search-form__info">
                                <div class="search-form__block">
                                    <input
                                        type="text"
                                        name="user-like-to-do"
                                        class="search-form__field"
                                        placeholder="What would you like to do?"
                                    />
                                    <input
                                        type="text"
                                        name="user-like-to-do"
                                        class="search-form__field"
                                        placeholder="Where would you like to go?"
                                    />
                                </div>

                                <a href="#" class="search-form__submit">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    search
                                </a>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
            <!-- Intro end -->

            <!-- Benefits start -->
            <section class="benefits">
                <div class="arrow-2 page__arrow">
                    <a href="#places"><i class="fa-solid fa-arrow-down"></i></a>
                </div>
                <div  class="benefits__wrap wow animate__animated animate__zoomIn">
                    <h2 id="benefits" class="benefits__title">
                        Benefits of Odigo
                    </h2>
                    <div class="benefits__cards">
                        <div class="benefits__card card-1">
                            <div class="card-1__pic">
                                <img
                                    src="./templates/img/svg/church-ico.svg"
                                    alt="Welcome to Odigo!"
                                    class="card-1__thumb"
                                />
                            </div>
                            <h3 class="card-1__title">Welcome to Odigo!</h3>
                            <p class="card-1__desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over.
                            </p>
                            <a
                                href="#!"
                                class="card-1__more card-1__more_arrow"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        <div class="benefits__card card-1">
                            <div class="card-1__pic">
                                <img
                                    src="./templates/img/svg/person-ico.svg"
                                    alt="Your Personal Japan Guide"
                                    class="card-1__thumb"
                                />
                            </div>
                            <h3 class="card-1__title">
                                Your Personal Japan Guide
                            </h3>
                            <p class="card-1__desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over.
                            </p>
                            <a
                                href="#!"
                                class="card-1__more card-1__more_arrow"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        <div class="benefits__card card-1">
                            <div class="card-1__pic">
                                <img
                                    src="./templates/img/svg/building-ico.svg"
                                    alt="Promoting Local Businesses"
                                    class="card-1__thumb"
                                />
                            </div>
                            <h3 class="card-1__title">
                                Promoting Local Businesses
                            </h3>
                            <p class="card-1__desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over.
                            </p>
                            <a
                                href="#!"
                                class="card-1__more card-1__more_arrow"
                            >
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Benefits end -->

            <!-- Places start -->
            <section id="places" class="places">
                <div class="arrow-3 page__arrow">
                    <a href="#tours"><i class="fa-solid fa-arrow-down"></i></a>
                </div>
                <div class="wrapper-full">
                    <div class="places__caption">
                        <h2  class="places__title wow animate__animated animate__zoomInLeft">
                            Get inspired for your next trip
                        </h2>
                        <a href="#!" class="places__view-all card-1__more_arrow wow animate__animated animate__shakeY"
                            >VIEW ALL</a
                        >
                    </div>

                    <div class="places__cards">
                        <div class="places__card places__card_size_lg wow animate__animated animate__fadeInLeft">
                            <img
                                src="./templates/img/place-1-min.jpg"
                                alt="Mount Fuji"
                                class="places__card-pic places__card-pic_size_lg"
                            />
                            <h3 class="places__card-title">Mount Fuji</h3>
                            <a href="#!" class="places__card-link"></a>
                        </div>

                        <div class="places__card places__card_size_lg wow animate__animated animate__fadeInRight">
                            <img
                                src="./templates/img/place-2-min.jpg"
                                alt="Kyoto"
                                class="places__card-pic places__card-pic_size_lg"
                            />
                            <h3 class="places__card-title">Kyoto</h3>
                            <a href="#!" class="places__card-link"></a>
                        </div>

                        <div class="places__card places__card_size_sm wow animate__animated animate__rotateInDownLeft">
                            <img
                                src="./templates/img/place-3-min.jpg"
                                alt="Tokyo"
                                class="places__card-pic places__card-pic_size_sm"
                            />
                            <h3 class="places__card-title">Tokyo</h3>
                            <a href="#!" class="places__card-link"></a>
                        </div>

                        <div class="places__card places__card_size_sm wow animate__animated animate__jackInTheBox">
                            <img
                                src="./templates/img/place-4-min.jpg"
                                alt="Niigata"
                                class="places__card-pic places__card-pic_size_sm"
                            />
                            <h3 class="places__card-title">Niigata</h3>
                            <a href="#!" class="places__card-link"></a>
                        </div>

                        <div class="places__card places__card_size_sm wow animate__animated animate__rotateInDownRight">
                            <img
                                src="./templates/img/place-5-min.jpg"
                                alt="Sapporo"
                                class="places__card-pic places__card-pic_size_sm"
                            />
                            <h3 class="places__card-title">Sapporo</h3>
                            <a href="#!" class="places__card-link"></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Places end -->

            <!-- Tours start -->

            <div id="tours" class="tours">
                <div class="arrow-4 page__arrow">
                    <a href="#top"><i class="fa-solid fa-arrow-down"></i></a>
                </div>
                <div class="wrapper-full">
                    <div class="tours__tour tour">
                        <div
                            class="tour__pic wow animate__animated animate__fadeInLeft"
                        >
                            <img
                                src="./templates/img/tour-1-min.jpg"
                                alt="Prefecture in Focus: Tottori"
                                class="tour__thumb"
                            />
                        </div>
                        <div class="tour__info wow animate__animated animate__bounce">
                            <h3 class="tour__title">
                                Prefecture in Focus: Tottori
                            </h3>
                            <p class="tour__desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this
                                if i had the energy but under the bed, for
                                attack the child, open the door,
                            </p>
                            <a href="#!" class="tour__more card-1__more_arrow"
                                >VIEW PREFECTURE</a
                            >
                        </div>
                    </div>

                    <div class="tours__tour tour2">
                        <div class="tour__pic">
                            <img
                                src="./templates/img/tour-2-min.jpg"
                                alt="Featured Neighborhood: Kyoto’s Arashiyama"
                                class="tour__thumb"
                            />
                        </div>
                        <div class="tour__info  wow animate__animated animate__bounce">
                            <h3 class="tour__title tour__info2">
                                Featured Neighborhood: Kyoto’s Arashiyama
                            </h3>
                            <p class="tour__desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this
                                if i had the energy but under the bed, for
                                attack the child, open the door,
                            </p>
                            <a href="#!" class="tour__more card-1__more_arrow"
                                >VIEW PREFECTURE</a
                            >
                        </div>
                        <div 
                            class="tour__pic wow animate__animated animate__fadeInRight"
                        >
                            <img 
                                src="./templates/img/tour-2-min.jpg"
                                alt="Featured Neighborhood: Kyoto’s Arashiyama"
                                class="tour__thumb"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tours start -->

            <!-- Top start -->
            <section class="top" id="top">
                <div class="arrow-5 page__arrow">
                    <a href="#videos"><i class="fa-solid fa-arrow-down"></i></a>
                </div>
                <div class="wrapper-full">
                    <h2 class="top__title section-title  wow animate__animated animate__heartBeat">
                        Today top places to visit
                    </h2>

                    <div class="top__cards">
                        <div class="top__card">
                            <div class="top__card-pic  wow animate__animated animate__wobble">
                                <img
                                    src="./templates/img/top-pic-1-min.jpg"
                                    alt="NAGOYA"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">NAGOYA</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value top-card__hover"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>

                        <div class="top__card">
                            <div class="top__card-pic wow animate__animated animate__wobble">
                                <img
                                    src="./templates/img/top-pic-2-min.jpg"
                                    alt="NIIGATA"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">NIIGATA</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>

                        <div class="top__card">
                            <div class="top__card-pic wow animate__animated animate__wobble">
                                <img
                                    src="./templates/img/top-pic-3-min.jpg"
                                    alt="OSAKA"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">OSAKA</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>

                        <div class="top__card">
                            <div class="top__card-pic wow animate__animated animate__tada">
                                <img
                                    src="./templates/img/top-pic-4-min.jpg"
                                    alt="SAITAMA"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">SAITAMA</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>

                        <div class="top__card">
                            <div class="top__card-pic wow animate__animated animate__tada">
                                <img
                                    src="./templates/img/top-pic-5-min.jpg"
                                    alt="UENO"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">UENO</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>

                        <div class="top__card">
                            <div class="top__card-pic wow animate__animated animate__tada">
                                <img
                                    src="./templates/img/top-pic-6-min.jpg"
                                    alt="SHIBUYA"
                                    class="top__card-thumb"
                                />
                                <div class="top__card-stats">
                                    <h3 class="top__card-title">SHIBUYA</h3>
                                    <div class="top__card-likes">
                                        <a
                                            href="#"
                                            class="top__card-likes-value"
                                        >
                                            221
                                        </a>
                                    </div>
                                    <div class="top__card-comments">
                                        <a
                                            href="#"
                                            class="top__card-comments-value"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase
                                ball of string hide when guests come over. Being
                                gorgeous with belly side up i could pee on this.
                            </p>
                            <a href="#!" class="top__card-more">SEE MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Top end -->

            <!-- Videos start -->
            <div class="videos" id="videos">
                <div class="arrow-6 page__arrow">
                    <a href="#footer"><i class="fa-solid fa-arrow-down"></i></a>
                </div>
                <div class="videos__wrapper">
                    <div class="video__item"></div>
                    <iframe
                        class="video__element"
                        src="https://www.youtube.com/embed/URDXZSJZ2ME"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <!-- Videos end -->
        </main>

        <footer id="footer" class="footer">
            <div class="arrow-7 page__arrow">
                <a href="#"><i class="fa-solid fa-arrow-up"></i> </a>
            </div>
            <div class="wrapper">
                <div class="footer__item">
                    <a href="/" class="footer__logo">
                        <img
                            src="./templates/img/svg/odigo-logo-footer.svg"
                            alt="Discover Amazing places in Japan"
                            class="footer__logo-pic wow animate__animated  animate__flip"
                        />
                    </a>
                    <nav class="footer__nav">
                        <ul class="footerm__menu wow animate__animated  animate__zoomInDown">
                            <li class="footer__menu-item">
                                <h3 class="footer__menu-title">Company</h3>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">About</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">Team</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">About</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">Team</a>
                            </li>
                        </ul>
                        <ul class="footerm__menu wow animate__animated animate__zoomInDown">
                            <li class="footer__menu-item">
                                <h3 class="footer__menu-title">Locations</h3>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">About</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">Team</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">About</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link">Team</a>
                            </li>
                        </ul>
                        <ul class="footerm__menu  wow animate__animated animate__zoomInDown">
                            <li class="footer__menu-item">
                                <h3 class="footer__menu-title">Social Media</h3>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link"
                                    >Facebook</a
                                >
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link"
                                    >Instagram</a
                                >
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link"
                                    >Twitter</a
                                >
                            </li>
                            <li class="footer__menu-item">
                                <a href="#!" class="footer__menu-link"
                                    >My World</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
        <script src="./js/main.js"></script>
    </body>
</html>
