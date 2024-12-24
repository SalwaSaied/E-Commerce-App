import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'

function Home() {
  return (
    <>
    <Meta title={"E Commerce App"}/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <section className='home-warapper-1 py-5'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-1 '>
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>Buy Now</Link>
                </div>
                </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt='small banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $999.00 or<br/> $64.62/mo.</p>
                </div>
                </div>
                <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt='small banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599 or<br/> $49.12/mo.</p>
                </div>
                </div>
                <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt='small banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smart Watch 7</h5>
                  <p>Shop the latest band<br/> styles and colors.</p>
                </div>
                </div>
                <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt='small banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>Air Pods Max</h5>
                  <p>High-fidelity playback &<br/> ultra -low distortion.</p>
                </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      
</section>
     
     
     

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div  className='d-flex align-items-center gap-15'>
                <img src="images/service.png" alt='services'/>
              <div>
              <h6>Free Shipping</h6>
              <p className='mb-0'>From all oreders over $5</p>
              </div></div>
              
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-02.png" alt='services'/>
              <div>
              <h6>Daily Surprise Offers</h6>
              <p className='mb-0'>Save Up 25%</p>
              </div> </div>

              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-03.png" alt='services'/>
              <div>
              <h6>Support 24/7</h6>
              <p className='mb-0'>Shop with an expert</p>
              </div></div>

              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-04.png" alt='services'/>
              <div>
              <h6>Affordable Prices</h6>
              <p className='mb-0'>Get Factor Default Price</p>
              </div></div>

              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-05.png" alt="services"/>
              <div>
              <h6>Secure Payments</h6>
              <p className='mb-0'>100% Protected Payment</p>
              </div></div>
            </div>
          </div>
        </div>
      </div>

    </section>
     


    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'/>
                </div>


                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt='camera'></img>
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'></img>
                </div>
            </div>
           </div>
         </div>
      </div>

    </section>

<section className='featured-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        

          
        </div>
      </div>
    </section>

<section className='famous-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/famous-1.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                <h5  className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/famous-2.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                <h5  className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p>27-incSK Rotina Display</p>
                </div>
              
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/famous-speaker.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                <h5  className="text-dark">Home Speaker</h5>
                <h6 className="text-dark">Room- filling sound</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/lap12.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                <h5  className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Gaming - SD card</h6>
                <p>From $399 or $16.62/,o. for 24 mo.*</p>
                </div>
              
              </div>
            </div>
        </div>
      </div>
    </section>

<section className='speacial-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
  <div className='row'>
  <div className='col-12'>
        <h3 className='section-heading'>Spaecial Products</h3>
          </div>
  </div>
  <div className='row'>
    <SpecialProduct />
    <SpecialProduct />
    <SpecialProduct />
  </div>

</div>
</section>

<section className='popular-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          </div>
          <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>
        

          
      </div>
    </section>

    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
            <div className='mx-4 w-25'> <img src="images/brand-01.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-02.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-03.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-04.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-05.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-06.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-07.png" alt="brand"/></div>
            <div className='mx-4 w-25'> <img src="images/brand-08.png" alt="brand"/></div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard />
           </div>
           <div className='col-3'>
            <BlogCard />
           </div>
           <div className='col-3'>
            <BlogCard />
           </div>
           <div className='col-3'>
            <BlogCard />
           </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home
