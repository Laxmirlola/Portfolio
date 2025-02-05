import Button from "./Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="red" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold">
            Hey, I&apos;m {""}
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              Laxmirlola Behera!
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m a Full Stack Web Developer
        </h2>
        <p className="max-w-[700px] mx-auto">
          A curious coder and web wizard who loves turning ideas into cool,
          interactive websites. Obsessed with JavaScript, React, and all things
          tech. When I’m not debugging, you’ll find me geeking out over APIs or
          perfecting my Node.js skills. Got a project or just wanna chat about
          code? Hit me up—let’s build something awesome together! 🌸
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
