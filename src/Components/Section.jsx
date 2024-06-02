import { useInView } from 'react-intersection-observer';

const Section = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust as needed
  });
  return (
    <div
      ref={ref}
      className={`${inView? "animate-fadeInLeft": "opacity-0"}`}
    >
      {children}
    </div>
  );
};
export default Section;