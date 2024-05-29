import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Gaurav Kumar, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Hi! My name is GAURAV KUMAR NAYAK. I am a passionate developer having
              experience in Frontend & Backend. 
              I'm currently working as React Developer at XYZ Company.
              I am much interested in developing
              new things which excite me a lot. :) I love exploring new
              technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more
              readable, accessible, and modular. My problem-solving mindset and
              active GitHub profile showcase my commitment to innovative and
              collaborative coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
