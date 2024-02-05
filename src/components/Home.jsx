import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-200%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Vikarnt Pathania
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              cursor: "",
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <motion.div {...animation.button}>
            <a href="mailto:vikrantpathania59@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </motion.div>
          <aside>
            <article>
              <p>
                +

                  <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>

              </p>
              <span>Clients Worldwide</span>
            </article>
            <article>
              <p>
                +

                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  ></motion.span>

              </p>
              <span>Projects Delivered</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Vikrant" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
