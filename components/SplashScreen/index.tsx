"use client";
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';


const SplashScreen = ({ children }: { children: React.ReactNode }) => {
    const helloInLanguages = [
        "Hello",          // English
        "नमस्ते",         // Hindi
        "Hola",           // Spanish
        "Bonjour",        // French
        "Hallo",          // German
        "Ciao",           // Italian
        "你好",            // Chinese (Mandarin)
        "こんにちは",      // Japanese       // Arabic
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % helloInLanguages.length);
        }, 500);
        return () => clearInterval(interval);
    }, [helloInLanguages.length]);
    const hello = helloInLanguages[currentIndex];
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="splash"
                    className='absolute inset-0 w-screen h-screen z-1000 bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center justify-center'
                >

                    <AnimatePresence mode="wait">
                        {hello && <motion.p
                            key={hello}
                            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 10 }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 10 }}
                            transition={{ duration: 0.07, ease: 'easeInOut' }}
                            className='text-4xl font-bold text-black dark:text-white'>
                            {hello}
                        </motion.p>} </AnimatePresence>

                </motion.div>
            ) : (
                <>{children}</>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
