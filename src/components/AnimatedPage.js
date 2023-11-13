import { motion } from "framer-motion"

const pageVariants = {
    initial: { opacity: 0, height: '0' },
    in: { opacity: 1, height: '100%' },
    out: { opacity: 0, height: "0" },
};

export default function AnimatedPage({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}