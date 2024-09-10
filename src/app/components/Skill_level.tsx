"use client"
import {motion} from "framer-motion"
import React from 'react';
import useIntersectionObserver from '@/app/hook/Visible';

const Skill: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <motion.div>
        
    </motion.div>
  );
};

export default Skill;
