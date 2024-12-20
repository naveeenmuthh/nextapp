import Image from "next/image"
import advImage1 from "../Assets/blog1-450x580.jpg.png"
import advImage2 from "../Assets/blog2-450x580.jpg.png"

function BlogComponent() {
  return (
<div className="container">
  <div className="header">
    <h2>OUR BLOG</h2>
    <h1>Latest News</h1>
  </div>
       <div className="news-flex-container">
        <div className="news-flex">
            
            <div className="news-item">
              <Image src={advImage1} alt="News Image"/>
              <div className="overlay">
                <span className="date">20 APR</span>
                <h2>The Covid-19 Epidemic in 2022 Is Back</h2>
              </div>
            </div>
            
            <div className="news-item item2">
              <Image src={advImage2} alt="News Image"/>
              <div className="overlay">
                <span className="date">17 MAR</span>
                <h2>Hac hendrerit mus non semper suspendisse</h2>
              </div>
            </div>
           
             
          </div>
            <div className="news-flex">
                <div className="news-item item2">
                  <Image src={advImage1} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">20 APR</span>
                    <h2>The Covid-19 Epidemic in 2022 Is Back</h2>
                  </div>
                </div>
                
                <div className="news-item">
                  <Image src={advImage2} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">17 MAR</span>
                    <h2>Hac hendrerit mus non semper suspendisse</h2>
                  </div>
                </div>
               
              </div>
              <div className="news-flex">
                <div className="news-item">
                  <Image src={advImage1} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">20 APR</span>
                    <h2>The Covid-19 Epidemic in 2022 Is Back</h2>
                  </div>
                </div>
                
                <div className="news-item item2">
                  <Image src={advImage2} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">17 MAR</span>
                    <h2>Hac hendrerit mus non semper suspendisse</h2>
                  </div>
                </div>
               
              </div>
              <div className="news-flex">
                <div className="news-item item2">
                  <Image src={advImage1} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">20 APR</span>
                    <h2>The Covid-19 Epidemic in 2022 Is Back</h2>
                  </div>
                </div>
                
                <div className="news-item">
                  <Image src={advImage2} alt="News Image"/>
                  <div className="overlay">
                    <span className="date">17 MAR</span>
                    <h2>Hac hendrerit mus non semper suspendisse</h2>
                  </div>
                </div>
               
              </div>
       </div>
</div>
  )
}

export default BlogComponent
