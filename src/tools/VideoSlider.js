import { useState } from "react";

const VideoSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        width: "100%",
        position: "relative"
    };

    const handleVideoEnd = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div style={sliderStyles}>
            <video 
                src={slides[currentIndex]} 
                autoPlay 
                style={{ width: "100%", height: "100%", position:"absolute", objectFit:"cover"}} 
                muted 
                loop={false} 
                onEnded={handleVideoEnd} 
                disablePictureInPicture="true"
            />
        </div>
    )
}

export default VideoSlider