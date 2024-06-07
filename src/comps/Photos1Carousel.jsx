import { useEffect } from "react";
import $ from 'jquery';

const Photos1Carousel = ({ photos }) => {
    useEffect(() => {
        // Initialize slidebox after component mounts
        $('.slide-box').slideBox();
    }, []);

    return (
        <div className="slide-box box-carousel" data-loop="true" data-interval="2500">
            {photos.map((photo, index) => (
                <img key={index} src={photo.url} alt={photo.image} />
            ))}
            <div className="pager pager-inline">
                <a href="#" className="pg-item 1 pg-item-active" title="1">1</a>
                <a href="#" className="pg-item 2" title="2">2</a>
                <a href="#" className="pg-item 3" title="3">3</a>
            </div>
        </div>
    );
}

export default Photos1Carousel;