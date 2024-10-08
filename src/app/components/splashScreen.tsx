"use client"
import {motion} from "framer-motion"

const SplashScreen: React.FC= () => {
  
  return (
    <motion.div className='w-screen h-screen flex bg-transparent absolute z-[90] justify-center overflow-hidden '>
        {/* screen left side slider */}
        <motion.div className='w-1/2 flex items-center justify-center bg-white z-[92]' animate={{x: -1500}} transition={{ ease: "easeOut", duration: 1, delay: 1 }}>
          
        </motion.div>

        {/*vertical  line */}
        <motion.div className=" absolute bg-black h-screen w-[2px] z-[95]" animate={{opacity: 0}} transition={{ ease: "easeOut", duration: 1}}>
        </motion.div>

        {/* the grow covers */}
        <motion.div className="w-[4px] h-1/2 bg-white absolute z-[100]" animate={{y: [0,-200,-600]}} transition={{ ease: "easeOut", duration: 1 }}></motion.div>
        <motion.div className="w-[4px] h-1/2 bg-white absolute bottom-0 z-[100]" animate={{y: [0,200,600]}} transition={{ ease: "easeOut", duration: 1 }}></motion.div>


        {/* screen right side slider */}
        <motion.div className='w-1/2 flex items-center justify-center bg-white z-[92]' animate={{x: 1500}} transition={{ ease: "easeOut", duration: 1, delay: 1 }}>
          
        </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
