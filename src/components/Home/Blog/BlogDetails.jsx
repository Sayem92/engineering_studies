import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div
        className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: "24em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))",
          }}
        ></div>
        <img
          src="https://goinswriter.com/wp-content/uploads/2021/03/barrier.jpg"
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          alt=""
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
          Enemy of productive life
          </h2>
          <div className="flex mt-3">
            <img
              src="https://i.ibb.co/tByHRWw/copy.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt=""
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm"> Mazharul Alam </p>
              <p className="font-semibold text-gray-400 text-xs"> 20 March 2023 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p className="pb-6">
        There are many barriers that can prevent someone from being productive. Some of the common barriers are: Procrastination: This is the tendency to delay or put off tasks until the last minute, which can lead to stress and poor productivity. Lack of motivation: When someone lacks motivation, it can be difficult to focus on tasks and complete them efficiently. Distractions: The presence of distractions, such as social media, notifications, or background noise, can make it challenging to concentrate on the task at hand. Fatigue: Being tired or exhausted can make it difficult to focus on tasks and reduce productivity. Poor time management: Failing to manage time effectively can lead to a lack of structure and difficulty completing tasks efficiently. Lack of clarity or direction: If someone is unsure about what they need to do or how to do it, it can be difficult to start and complete tasks effectively. Fear of failure: Fear of failure can prevent someone from starting tasks or trying new things, which can reduce productivity and limit growth. To overcome these barriers, it's essential to identify the underlying cause and take steps to address it. This may involve setting clear goals, breaking tasks into smaller, manageable steps, minimizing distractions, taking breaks when needed, and practicing good self-care habits such as sleep, exercise, and healthy eating. Additionally, seeking support and feedback from peers or mentors can help increase motivation and provide guidance and direction when needed
        </p>


      </div>
    </div>
  );
};

export default BlogDetails;
