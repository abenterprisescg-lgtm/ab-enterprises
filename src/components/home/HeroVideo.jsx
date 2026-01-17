import React, { useState, useRef, useEffect } from 'react';
import './HeroVideo.css';

const HeroVideo = () => {
    const [currentVideo, setCurrentVideo] = useState(1);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const [isVideo1Ready, setIsVideo1Ready] = useState(false);

    // Handle end of Video 1 -> Play Video 2
    const handleVideo1Ended = () => {
        setCurrentVideo(2);
        if (video2Ref.current) {
            video2Ref.current.currentTime = 0;
            video2Ref.current.play().catch(e => console.warn("Video 2 play failed", e));
        }
    };

    // Handle end of Video 2 -> Play Video 1
    const handleVideo2Ended = () => {
        setCurrentVideo(1);
        if (video1Ref.current) {
            video1Ref.current.currentTime = 2; // Loop back to 2s mark
            video1Ref.current.play().catch(e => console.warn("Video 1 play failed", e));
        }
    };

    // Initial load handling for Video 1
    const handleVideo1Loaded = () => {
        if (video1Ref.current && !isVideo1Ready) {
            video1Ref.current.currentTime = 2; // Set start time
            setIsVideo1Ready(true);
            video1Ref.current.play().catch(e => console.warn("Video 1 initial play failed", e));
        }
    };

    // Ensure video is playing on mount if already loaded
    useEffect(() => {
        if (video1Ref.current) {
            // Force mute again just to be sure for autoplay policy
            video1Ref.current.muted = true;
            if (video1Ref.current.readyState >= 3) {
                handleVideo1Loaded();
            }
        }
    }, []);

    return (
        <div className="hero-video-container">
            <div className="video-overlay"></div>

            <video
                ref={video1Ref}
                className={`hero-video ${currentVideo === 1 ? 'active' : 'inactive'}`}
                autoPlay
                muted
                playsInline
                preload="metadata"
                onLoadedMetadata={handleVideo1Loaded}
                onEnded={handleVideo1Ended}
            >
                <source src="/video1.mp4" type="video/mp4" />
            </video>

            <video
                ref={video2Ref}
                className={`hero-video ${currentVideo === 2 ? 'active' : 'inactive'}`}
                muted
                playsInline
                preload="none"
                onEnded={handleVideo2Ended}
            >
                <source src="/video2.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default HeroVideo;
