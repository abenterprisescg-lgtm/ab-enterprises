import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SteelJourney.css';

const SteelJourney = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Opacity transforms for the 3 stages
    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

    // Text transforms (slight parallax)
    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
    const y3 = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

    return (
        <section className="steel-journey-container" ref={containerRef}>
            <div className="sticky-wrapper">

                {/* Stage 1: The Forge */}
                <motion.div className="journey-stage" style={{ opacity: opacity1 }}>
                    <div className="journey-bg" style={{ backgroundImage: "url('/steel_molten.png')" }}></div>
                    <div className="journey-content container">
                        <motion.div style={{ y: y1 }} className="text-block">
                            <span className="chapter">Stage 01</span>
                            <h2>The Forge of Strength</h2>
                            <p>It starts with fire. Raw iron ore is smelted at 1600°C, transforming into pure, molten potential. This is the birth of resilience.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stage 2: Precision Rolling */}
                <motion.div className="journey-stage" style={{ opacity: opacity2 }}>
                    <div className="journey-bg" style={{ backgroundImage: "url('/steel_rolling.png')" }}></div>
                    <div className="journey-content container">
                        <motion.div style={{ y: y2 }} className="text-block">
                            <span className="chapter">Stage 02</span>
                            <h2>Precision in Motion</h2>
                            <p>Through advanced cold rolling, chaotic heat becomes structured perfection. Beams, plates, and coils are shaped with micrometer precision.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stage 3: The Structure */}
                <motion.div className="journey-stage" style={{ opacity: opacity3 }}>
                    <div className="journey-bg" style={{ backgroundImage: "url('/steel_structure.png')" }}></div>
                    <div className="journey-content container">
                        <motion.div style={{ y: y3 }} className="text-block">
                            <span className="chapter">Stage 03</span>
                            <h2>Building the World</h2>
                            <p>The final form. From skyscrapers to bridges, our steel forms the skeleton of modern civilization. We don't just supply metal; we enable progress.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Progress Indicators */}
                <div className="journey-indicators">
                    <div className="indicator-track">
                        <motion.div className="indicator-fill" style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SteelJourney;
