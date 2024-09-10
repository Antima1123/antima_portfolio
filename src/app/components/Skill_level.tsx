// components/SkillBar.tsx
import { easeIn, motion } from 'framer-motion';
import useIntersectionObserver from '../hook/Visible';

interface SkillBarProps {
  name: string;
  level: number;
  color: string
}

const Skill: React.FC<SkillBarProps> = ({ name, level, color }) => {

  const {isVisible,elementRef} = useIntersectionObserver();

  return(
    <div 
      className=""
      ref={elementRef}
    >
      {/* name and percentage */}
      <div className='flex relative w-full pb-2 items-center'>
        <div className='w-14'>{name}</div>
        <motion.div className={`text-[#f75023] text-md`} animate={isVisible?{ x: level*3.5} : {x: 50}} initial={isVisible&&{x: 50}}  transition={{ease: "easeIn", duration: 0.5}}>{level}%</motion.div>
      </div>

      {/* level */}
      <div className='w-[28rem] h-[8px] bg-white rounded-2xl absolute'>
        <motion.div className={`rounded-2xl h-[8px] absolute`} style={{backgroundColor: color}} animate={isVisible?{ width: `${level}%`} : { width: 100}} initial={isVisible&&{width: 100}} transition={{ease: "easeIn", duration: 0.5}}></motion.div>
      </div>

   </div>
  );
};

export default Skill;
