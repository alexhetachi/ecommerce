import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function Slider(props) {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <div className="slider">
            <AliceCarousel dotsDisabled={false} buttonsDisabled={true} autoPlayInterval={2000} autoPlay={true} mouseTrackingEnabled={true}>
              <div>
                <img src="./test1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%', height:'300px'}} alt="hii"/>
              </div>
              <div>
                <img src="./test4.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%', height:'300px'}} alt="hii"/>
              </div>
              <div>
                <img src="./test3.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%', height:'300px'}} alt="hii"/>
              </div>
            </AliceCarousel>
        </div>
      )

}

export default Slider;