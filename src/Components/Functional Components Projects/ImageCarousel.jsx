import React, { Component } from 'react'
import VincenzoOne from '../../Image/Vincenzo 1.png'
import VincenzoTwo from '../../Image/Vincenzo 2.png'
import VincenzoThree from '../../Image/Vincenzo 3.png'
import VincenzoFour from '../../Image/Vincenzo 4.png'
import VincenzoFive from '../../Image/Vincenzo 5.png'
import VincenzoSix from '../../Image/Vincenzo 6.png'

class ImageCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
        this.Images = [
            VincenzoOne, VincenzoTwo, VincenzoThree, VincenzoFour, VincenzoFive, VincenzoSix
        ]
    }

    nextSlide = () => {
        this.setState({
            current: this.state.current === this.Images.length - 1 ? 0 : this.state.current + 1
        })
    }

    prevSlide = () => {
        this.setState({
            current: this.state.current === 0 ? this.Images.length - 1 : this.state.current - 1
        })
    }

    render() {
        return (
            <>
                <div className="slider text-center">
                    <h4>Image Carousel.jsx File</h4><br />
                    <div onClick={this.prevSlide} className="m-3 position-absolute top-50 end-0 translate-middle-y">
                        <h3 style={{ cursor: 'pointer', marginRight: '1cm' }}>Next Image</h3>
                    </div>
                    <div onClick={this.nextSlide} className="m-3 position-absolute top-50 start-0 translate-middle-y">
                        <h3 style={{ cursor: 'pointer', marginLeft: '1cm' }}>Previous Image</h3>
                    </div>
                    {this.Images.map(
                        (Image, index) =>
                            this.state.current === index && (
                                <div key={Image} className="slide d-flex justify-content-center">
                                    <img style={{ width: '60%', border: '2px solid white' }} src={Image} alt="images" />
                                </div>
                            )
                    )}
                </div>
            </>
        )
    }
}

export default ImageCarousel
