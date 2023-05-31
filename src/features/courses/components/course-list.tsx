import Course from "./course";

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
interface CourseProps {
  courses: Course[];
}

const CourseList = ({ courses }: CourseProps) => {
  return (
    <>
      <div className="row">
        {courses.map((course) => (
          <div className="col-12 col-md-6 col-lg-3" key={course.id}>
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
};
export default CourseList;
