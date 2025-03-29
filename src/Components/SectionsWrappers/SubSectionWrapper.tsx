import { ReactNode, useState } from "react";
import SubSectionTitle from "./SubSectionTitle.tsx";
import { motion, AnimatePresence } from "motion/react";

export default function SubSectionWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isShowing, setIsShowing] = useState(false);

  function onClickTitle() {
    setIsShowing((prev) => !prev);
  }

  return (
    <div className="flex-1 basis-[45%]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`mt-[10rem] px-[0rem] ${isShowing && "bg-gray-300 rounded-2xl bg-opacity-20"} pt-2 pb-10 mx-8`}
      >
        <SubSectionTitle
          onClickHandler={onClickTitle}
          isShowing={isShowing}
          title={title}
        />
        <AnimatePresence>
          {isShowing && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
