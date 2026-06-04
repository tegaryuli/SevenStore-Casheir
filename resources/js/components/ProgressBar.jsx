import { useEffect } from "react";
import { router } from "@inertiajs/react";

export default function ProgressBar() {
    useEffect(() => {
        let progressTimeout;
        let progressValue = 0;
        let progressBar = null;

        function initProgressBar() {
            if (!progressBar) {
                progressBar = document.createElement('div');
                progressBar.style.position = 'fixed';
                progressBar.style.top = '0';
                progressBar.style.left = '0';
                progressBar.style.height = '3px';
                progressBar.style.backgroundColor = '#3B3B3B';
                progressBar.style.zIndex = '99999';
                progressBar.style.transition = 'width 0.3s ease-out, opacity 0.4s ease';
                progressBar.style.width = '0%';
                progressBar.style.boxShadow = '0 0 10px #3B3B3B, 0 0 5px #3B3B3B';
                document.body.appendChild(progressBar);
            }
            progressBar.style.opacity = '1';
            progressBar.style.width = '0%';
            progressValue = 0;
        }

        function animateProgress() {
            if (progressValue < 85) {
                progressValue += Math.random() * 20 + 15; 
                if (progressValue > 85) progressValue = 85;
            } else if (progressValue < 90) {
                progressValue += Math.random() * 1 + 0.5;
                if (progressValue > 90) progressValue = 90;
            }
            
            if (progressBar) progressBar.style.width = `${progressValue}%`;
            
            if (progressValue < 90) {
                progressTimeout = setTimeout(animateProgress, progressValue < 85 ? 150 : 800);
            }
        }

        const handleStart = () => {
            initProgressBar();
            clearTimeout(progressTimeout);
            setTimeout(animateProgress, 50);
        };

        const handleFinish = () => {
            clearTimeout(progressTimeout);
            progressValue = 100;
            if (progressBar) {
                progressBar.style.width = '100%';
                setTimeout(() => {
                    progressBar.style.opacity = '0';
                    setTimeout(() => {
                        if (progressBar) progressBar.style.width = '0%';
                    }, 400);
                }, 250);
            }
        };

        const removeStart = router.on('start', handleStart);
        const removeFinish = router.on('finish', handleFinish);

        return () => {
            removeStart();
            removeFinish();
            clearTimeout(progressTimeout);
            if (progressBar && progressBar.parentNode) {
                progressBar.parentNode.removeChild(progressBar);
            }
        };
    }, []);

    // Komponen ini tidak merender elemen React, hanya memanipulasi DOM murni
    return null;
}
