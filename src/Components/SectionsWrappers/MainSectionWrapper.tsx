import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MainSectionTitle from "./MainSectionTitle.tsx";

export default function MainSectionWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isShowing, setIsShowing] = useState(true);

  function onClickTitle() {
    setIsShowing((prev) => !prev);
  }

  return (
    <motion.div
      className="flex container-width sm:mx-auto -ml-[4rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`mt-[10rem] px-[0rem] ${isShowing && "bg-gray-300 rounded-2xl bg-opacity-30"} pt-2 pb-10 mx-auto`}
      >
        <MainSectionTitle
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
    </motion.div>
  );
}
