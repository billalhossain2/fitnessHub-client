import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-3 mt-20 p-3 md:gap-10 gap-16 bg-[#000000] text-white py-10">
      <aside className="space-y-3">
      <header className="text-white font-bold pb-5">ABOUT US</header>
        <img src="https://i.ibb.co/rkb9Wb3/fitness-transparent-logo.png" alt="Logo" />
        <p>
          <span className="text-3xl font-bold">FitnessHub</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, excepturi dignissimos! Nemo facere corrupti ea inventore, voluptas obcaecati. Neque placeat nobis voluptatibus facere perferendis nihil nam. Asperiores aliquam ex corrupti quo est explicabo
        </p>
      </aside>
      <nav>
        <header className="text-white font-bold pb-5">RECENT POSTS</header>
        <div className="flex flex-col gap-2">
          <div className="flex md:flex-row flex-col md:items-center gap-2">
            <img className="w-32" src="https://i.ibb.co/JndpMjL/yoga-instructor.jpg" alt="blog img" />
            <div>
            <h3>Young Women Doing Abdominal</h3>
            <p>Posted By: ram</p>
            <p>icon:1</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center gap-2">
            <img className="w-32" src="https://i.ibb.co/JndpMjL/yoga-instructor.jpg" alt="blog img" />
            <div>
            <h3>How to Eat for bulking you up?</h3>
            <p>Posted By: ram</p>
            <p>icon:1</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center gap-2">
            <img className="w-32" src="https://i.ibb.co/JndpMjL/yoga-instructor.jpg" alt="blog img" />
            <div>
            <h3>How to make your body shape?</h3>
            <p>Posted By: ram</p>
            <p>icon:1</p>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <header className="text-white font-bold pb-5">USEFUL LINKS</header>
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Fitness Tips</p>
        <br />
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Faq's</p>
        <br />
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Workout Programs</p>
        <br />
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Fitness Camps</p>
        <br />
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Blogs</p>
        <br />
        <p className="link link-hover border-b-[1px] pb-1 border-gray-400">Fitness Updates</p>
      </nav>
      <nav>
        <header className="text-white font-bold pb-5">UPCOMING EVENTS</header>
        <div className="flex flex-col gap-5">
          <div className="flex md:items-center md:flex-row flex-col gap-2 border-[1px] border-gray-500 p-3 rounded-sm">
          <img className="w-32" src="https://i.ibb.co/JndpMjL/yoga-instructor.jpg" alt="blog img" />
          <div>
            <h3>Avalence Trip</h3>
            <p>Start time: 2023-11-28 08:00:00</p>
            <p>End time: 2023-11-28 08:00:00</p>
          </div>
          </div>

          <div className="flex md:items-center md:flex-row flex-col gap-2 border-[1px] border-gray-500 p-3 rounded-sm">
          <img className="w-32" src="https://i.ibb.co/JndpMjL/yoga-instructor.jpg" alt="blog img" />
          <div>
            <h3>Avalence Trip</h3>
            <p>Start time: 2023-11-28 08:00:00</p>
            <p>End time: 2023-11-28 08:00:00</p>
          </div>
          </div>
        </div>
      </nav>
    </footer>
    <footer className="footer items-center p-4 bg-[#0f0f0f] text-neutral-content">
  <aside className="items-center grid-flow-col">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>Face</a>
    <a>Twitter</a>
  </nav>
    </footer>
    </>
  );
};

export default Footer;
