class PageHeader extends HTMLElement {
    constructor() {
        super();

        const template = `
        <link href="styles/bootstrap.min.css" rel="stylesheet" />
        <link href="styles/style.css" rel="stylesheet" />
        <link href="styles/font-awesome.min.css" rel="stylesheet">
        <link href="styles/skin/green.css" rel="stylesheet">
        <link href="styles/skin/green.css" rel="stylesheet">
        <script src="assets/js/main_script.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <div class="top-bar">
            <div class="container">
                <div class="tsocial">
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                    <a href=""><i class="fa fa-youtube"></i></a>
                    <a href=""><i class="fa fa-skype"></i></a>
                </div>
            </div>
        </div>

    <div class="menu-holder clearfix">
        <div class="menu-area">
            <div class="container">
                <div class="row">

                    <!-- Navigation starts -->
                    <div class="col-md-12">
                        <div class="mainmenu">
                            <div class="navbar navbar-nobg">
                            
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt=""></a>
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse">
                                    <nav>
                                        <ul class="nav navbar-nav navbar-right">
                                        
                                        <li class="active"><a class="smooth_scroll" href="#slider">Home</a></li>
                                        <li class="dropdown">
                                          <a href="#" class="smooth_scroll dropdown-toggle" data-toggle="dropdown">Chi siamo<b class="caret"></b></a>
                                          <ul class="dropdown-menu">
                                             <li><a href="#">Le nostre persone</a></li>
                                             <li><a href="#">La nostra azienda</a></li>
                                          </ul>
                                        </li>
                                        <li><a class="smooth_scroll" href="#">Mercati</a></li>
                                        <li><a class="smooth_scroll" href="#">Referenze</a></li>
                                        <li class="dropdown">
                                          <a href="#" class="smooth_scroll dropdown-toggle" data-toggle="dropdown">Progetti<b class="caret"></b></a>
                                          <ul class="dropdown-menu">
                                             <li><a href="#">Opere di urbanizzazione</a></li>
                                             <li><a href="#">Opere fluviali</a></li>
                                             <li><a href="#">Opere fognarie</a></li>
                                             <li><a href="#">Opere idriche</a></li>
                                             <li><a href="#">Opere impiantistiche</a></li>
                                             <li><a href="#">Studi idraulici</a></li>
                                          </ul>
                                        </li>
                                        <li class="dropdown">
                                          <a href="#" class="smooth_scroll dropdown-toggle" data-toggle="dropdown">Media<b class="caret"></b></a>
                                          <ul class="dropdown-menu">
                                             <li><a href="#">News</a></li>
                                             <li><a href="#">Downloads</a></li>
                                          </ul>
                                        </li>
                                        <li><a class="smooth_scroll" href="#work">Contatti/Unisciti a noi </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        `;

        let shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.innerHTML = template
    }

    connectedCallback() {
        this.classList.add('page-header');
        this.shadowRoot.querySelector('.logo-img').src = `${this.getAttribute('assetsUrl')}/img/logo.png`;
    }
}

customElements.define('page-header', PageHeader);