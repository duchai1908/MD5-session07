import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const courses = [
    {
        id: 1,
        name: "HTML"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "PHP"
    }
]
export default function CourseDetail() {
    const {id} = useParams();
    const [courseDetail, setCourseDetail] = useState(null)
    const [isNotFound, setIsNotFound] = useState(false)
    useEffect(() => {
        const findCourse = courses.find((course) => course.id === +id)
        if(findCourse){
            setCourseDetail(findCourse)
        }else{
            setIsNotFound(true)
        }
    },[])

    // ?. Gọi là optional chain ( Nếu như object khác null hoặc undefind thì nó sẽ truy cập vào)
  return (
    <div>
        <h3>CourseDetail</h3>
        {isNotFound ? (
            <h3> Không tìm thấy kết quả</h3>
        ) : (
            <div>
                <p>Id: {courseDetail?.id}</p>
                <p>Name: {courseDetail?.name}</p>
            </div>
        )}
    </div>
  )
}
