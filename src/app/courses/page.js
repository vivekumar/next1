'use client';

import React, { useEffect } from 'react';
import { searchParams } from 'next/navigation';

import Filters from "../components/courses/filters"
import Sorting from "../components/courses/sorting"
import CourseStyle2 from "../components/courses/course-style2"
import CourseStyle1 from "../components/courses/course-style1"
import Pagination from "../components/courses/pagination"



async function getData() {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    };
    const res = await fetch('http://localhost:3034/api/course', options);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.log(err);

  }
}



const Courses = async () => {


  useEffect(() => {
    const fetchData = async () => {
      const course = await getData();
      console.log('course', course);
    };

    fetchData();
  }, []);



  //const url = process.env.RAPID_KEY;
  /*
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66a01503c9msh5c4aee9c7764879p14f69cjsndf9093bcbb07',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
   const response = await fetch(`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=10&limit_suggestions=20&lang=en`, options);
    const result = await response.json();
  */
  //console.log('url', url);
  //pagination code start
  const totalData = 177;
  const dataPerPage = 9;
  const totalPages = Math.ceil(totalData / dataPerPage);
  //pagination code end
  let currentPage = 1;
  //console.log('searchParams', searchParams);
  //if (Number(searchParams.page) >= 1) {
  //currentPage = Number(searchParams.page);
  //}
  let offset = 0;//(currentPage - 1) * dataPerPage;

  let data = ['1', '2', '3']

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