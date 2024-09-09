"use client"
import {motion} from "framer-motion"

const SplashScreen: React.FC= () => {
  
  return (
    <motion.div className='w-screen h-screen flex bg-transparent absolute z-[100] justify-center'>
        {/* screen left side slider */}
        <motion.div className='w-1/2 flex items-center justify-center bg-white' animate={{x: -1500}} transition={{ ease: "easeOut", duration: 1, delay: 1 }}>
          
        </motion.div>

        {/*vertical  line */}
        <motion.div className=" absolute bg-black h-screen w-[1px]" animate={{opacity: 0}} transition={{ ease: "easeOut", duration: 1}}>
        </motion.div>

        {/* the grow covers */}
        <motion.div className="w-[1px] h-1/2 bg-white absolute" animate={{y: [0,-200,-600]}} transition={{ ease: "easeOut", duration: 1 }}></motion.div>
        <motion.div className="w-[1px] h-1/2 bg-white absolute bottom-0" animate={{y: [0,200,600]}} transition={{ ease: "easeOut", duration: 1 }}></motion.div>


        {/* screen right side slider */}
        <motion.div className='w-1/2 flex items-center justify-center bg-white' animate={{x: 1500}} transition={{ ease: "easeOut", duration: 1, delay: 1 }}>
          
        </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
