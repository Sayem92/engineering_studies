import React from 'react';
import SemesterButton from '../SemesterButton/SemesterButton';

const PL = () => {
    const moduleSemester = [
        {
          title: "pl",
          route: "C",
          name: "C",
        },
        {
          title: "pl",
          route: "C++",
          name: "C++",
        },
        {
          title: "pl",
          route: "JAVA",
          name: "JAVA",
        },
        {
          title: "pl",
          route: "Python",
          name: "Python",
        },
        {
          title: "pl",
          route: "JavaScript",
          name: "JavaScript",
        },
        {
          title: "pl",
          route: "HTML",
          name: "HTML",
        },
        {
          title: "pl",
          route: "CSS",
          name: "CSS",
        },
    
      ];
      return (
        <div className="my-40 mx-10 md:mr-20 lg:mr-72">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {moduleSemester?.map((data, i) => (
              <SemesterButton key={i} data={data}></SemesterButton>
            ))}
          </div>
        </div>
      );
};

export default PL;