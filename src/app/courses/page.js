'use client';
import { searchParams } from 'next/navigation';
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

}


const Courses = async () => {




  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66a01503c9msh5c4aee9c7764879p14f69cjsndf9093bcbb07',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  /*
  const url = 'https://udemy-course-scrapper-api.p.rapidapi.com/course-names/course-instructor/course-url';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66a01503c9msh5c4aee9c7764879p14f69cjsndf9093bcbb07',
      'X-RapidAPI-Host': 'udemy-course-scrapper-api.p.rapidapi.com'
    }
  };*/
  //console.log('url', url);
  //pagination code start
  const totalData = 177;
  const dataPerPage = 9;
  const totalPages = Math.ceil(totalData / dataPerPage);
  //pagination code end
  let currentPage = 1;
  console.log('searchParams', searchParams);
  //if (Number(searchParams.page) >= 1) {
  //currentPage = Number(searchParams.page);
  //}
  let offset = 0;//(currentPage - 1) * dataPerPage;
  let data = [];
  //const data = await getData();

  //alert('sdfsd');

  try {
    const response = await fetch(`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20&lang=en`, options);
    const result = await response.json();
    data = result.titles;
    console.log('data', result);
    return false;
  } catch (error) {
    console.error(error);
  }


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
                data.map((item, i) => {

                  return (
                    < CourseStyle1 data={item} />
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