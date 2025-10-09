import React from 'react';
import { motion } from 'framer-motion'; 

interface SkillTagProps {
  skillName: string;
 
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName }) => {
  

  return (
    
    <motion.span
      className="bg-transparent text-gray-300 py-1 px-4 rounded-full md:text-sm text-xs font-medium border border-gray-600"
      whileHover={{ scale: 1.05, borderColor: '#4dd0e1', color: '#4dd0e1' }} // Framer Motion hover animation
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {skillName}
    </motion.span>
  );
};

export default SkillTag;