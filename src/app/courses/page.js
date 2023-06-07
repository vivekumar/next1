"use client"
import React, { useEffect, useState } from 'react';
import { searchParams } from 'next/navigation';

import Filters from "../components/courses/filters";
import Sorting from "../components/courses/sorting";
import CourseStyle2 from "../components/courses/course-style2";
import CourseStyle1 from "../components/courses/course-style1";
import Pagination from "../components/courses/pagination";
import Breadcrumb from "../components/breadcrumb"
import { resolve } from 'styled-jsx/css';
async function getData() {

  await new Promise(resolve => setTimeout(resolve, 10000))


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

const Courses = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const course = await getData();
      // Set the fetched course data to the state variable
      setData(course.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination code start
  const totalData = 177;
  const dataPerPage = 9;
  const totalPages = Math.ceil(totalData / dataPerPage);
  // Pagination code end

  let currentPage = 1;
  // console.log('searchParams', searchParams);
  // if (Number(searchParams.page) >= 1) {
  //   currentPage = Number(searchParams.page);
  // }
  let offset = 0; //(currentPage - 1) * dataPerPage;

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
              {data.map((item, i) => (
                <CourseStyle1 data={item} key={i} />
              ))}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Courses;