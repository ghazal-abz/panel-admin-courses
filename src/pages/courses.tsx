import CourseList from "../features/courses/components/course-list";
import { httpInterceptedService } from "@services/http-service";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const Courses = () => {
  const data = useLoaderData();

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h3 className="mb-0">همه دوره ها</h3>
          <a href="#" className="btn btn-primary fw-bolder  mt-n1">
            <i className="fas fa-plus ms-2"></i>افزودن دوره جدید
          </a>
        </div>
        <Suspense
          fallback={<p className="text-info">در حال دریافت اطلاعات ...</p>}
        >
          <Await resolve={data.courses}>
            {(loadedCourses) => <CourseList courses={loadedCourses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

interface Course {
  id: number;
  createdAt: string;
  title: string;
  duration: number;
  courseCategory: string;
  courseLevel: string;
  description: string;
  coverImageUrl: string;
  numOfChapters: number;
  numOfLectures: number;
  averageReviewRating: number;
  numOfReviews: number;
  basePrice: number;
}
const loadCourses = async (): Promise<Course> => {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data as Course;
};

export async function coursesLoader() {
  return defer({
    courses: loadCourses(),
  });
}

export default Courses;
