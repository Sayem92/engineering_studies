import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 bg-gray-800 text-gray-5pm0">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-white">ABOUT THE SITE</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400 pr-16">
            <p>
              Sed suscipit mauris nec mauris vulputate, a posuere libero congue.
              Nam laoreet elit eu erat pulvinar, et efficitur nibh euismod.
              Proin venenatis orci sit amet nisl finibus vehicula
            </p>
            <p>
              Nam metus lorem, hendrerit quis ante eget, lobortis elementum
              neque. Aliquam in ullamcorper quam. Integer euismod ligula in
              mauris vehicula imperdiet. Cras in convallis ipsum. Phasellus
              tortor turpis.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-white">QUICK LINKS</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Home
            </a>
            <a rel="noopener noreferrer" href="#">
              Studies
            </a>
            <a rel="noopener noreferrer" href="#">
              Blog
            </a>
            <a rel="noopener noreferrer" href="#">
              About Us
            </a>
            <a rel="noopener noreferrer" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-white">WORKING HOURS</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-12">
              <p>Saturday</p>
              <p>5 pm to 7pm</p>
            </div>
            <div className="flex items-center gap-14">
              <p>Sunday</p>
              <p>5 pm to 7pm</p>
            </div>
            <div className="flex items-center gap-[52px]">
              <p>Monday</p>
              <p>5 pm to 7pm</p>
            </div>
            <div className="flex items-center gap-8">
              <p> Wednesday</p>
              <p>5 pm to 7pm</p>
            </div>
            <div className="flex items-center gap-12">
              <p> Thursday</p>
              <p>5 pm to 7pm</p>
            </div>
            <div className="flex items-center gap-[66px]">
              <p>Friday</p>
              <p>3 pm to 6pm</p>
            </div>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-400">
          © Copyright 2020. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
