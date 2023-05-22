import react from "react"
import Filters from "../components/courses/filters"
import Sorting from "../components/courses/sorting"
import CourseStyle2 from "../components/courses/course-style2"
import CourseStyle1 from "../components/courses/course-style1"
import Pagination from "../components/courses/pagination"


async function getData() {

  /*const url = _env.process.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      NEW_Get: 'Install_Header',
      'X-RapidAPI-Key': '66a01503c9msh5c4aee9c7764879p14f69cjsndf9093bcbb07',
      'X-RapidAPI-Host': 'learn-online.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
*/
  return 'hello';

}


const Courses = async () => {
  console.log('sdfsdf');



  const data = await getData();
  console.log(data);

  const names = ["course1", "course2", "course3", 'course4', "course5", "course6", "course7", 'course8'];
  /*
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66a01503c9msh5c4aee9c7764879p14f69cjsndf9093bcbb07',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };


  
  const items = [];
  //const data = await getData();
  
  //alert('sdfsd');

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }*/


  return (
    <div className="edu-course-area course-area-1 section-gap-equal">


      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <Filters />
          </div>
          <div className="col-lg-9 col-pl--35">
            <div className="row g-5">
              <Sorting />





              {
                names.map((item, i) => {
                  return (

                    < CourseStyle1 slug={item} />
                  )
                })
              }


            </div>

          </div>
        </div>
        <Pagination />
      </div>
    </div>
  )
}
export default Courses;