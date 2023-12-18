<template>
    <!-- Our services -->
    <div id="services" >
        <div class="container-fluid py-5">
            <div class="row text-center">
                <div class="col-lg-12 mx-auto">
                    <div class="justify-content-center">
                        <span class=" h1 display-4 text-uppercase fw-bold">
                          our services.
                        </span>
                    </div>
                </div>
            </div>
        </div>
      
    </div><!-- End Portfolio Section -->
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Software Development</li>
              <li data-filter=".filter-card">Photography</li>
              <li data-filter=".filter-web">Design</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web Development</h4>
              <p>We make websites</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <RouterView to="/ServiceDetails" class="details-link" title="More Details">
                <i class="bi bi-plus-lg"></i>
              </RouterView>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../assets/images/ourservices/Photography/2.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>3D Design</h4>
              <p>3D Modeling</p>
              <a href="../assets/images/ourservices/3d/handcream.png" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>System Applications</h4>
              <p>We make stock Managing systems togather with pharmacy systems</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Photography</h4>
              <p>Wedding Potraits</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Graphics</h4>
              <p>We desing an intuitive UI/UX desing</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Mobile Applications</h4>
              <p>We also make mobile Apps for android and iOS</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Videography and filmin</h4>
              <p>This also includes animation</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Photography servoices</h4>
              <p>we alson teach Photography lessons</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../assets/images/ourservices/Photography/1.JPG" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Design </h4>
              <p>create logos too</p>
              <a href="../assets/images/ourservices/Photography/1.JPG" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

</template>

<script>
import '../helpers/services.js';
export default {
    data(){
        return{
        }
    },
    
}
</script>
