function Carrousel() {
    return (
        <div className="">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/243547968_2005964106220107_9097212935541123967_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=L2vjO_Cjl4sAX-k009h&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfBkn56I7VauF8apR2ZxG8ed3C5s9ZCmp_OmbMMRBBN3RQ&oe=64680F12" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/243547968_2005964106220107_9097212935541123967_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=L2vjO_Cjl4sAX-k009h&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfBkn56I7VauF8apR2ZxG8ed3C5s9ZCmp_OmbMMRBBN3RQ&oe=64680F12" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/243547968_2005964106220107_9097212935541123967_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=L2vjO_Cjl4sAX-k009h&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfBkn56I7VauF8apR2ZxG8ed3C5s9ZCmp_OmbMMRBBN3RQ&oe=64680F12" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrousel;