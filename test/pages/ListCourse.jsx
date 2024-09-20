import React from 'react'
import { Link } from 'react-router-dom'

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

export default function ListCourse() {
  return (
    <div>
        <h3>List Course</h3>
        
            <div style={{display:"flex", gap:20}}>
                {courses.map(cource => (
                                <div key={cource.id}>
                                    <p> Id: {cource.id}</p>
                                    <p> Name: {cource.name}</p>
                                    <button>
                                        <Link to={`/course-detail/${cource.id}`}>
                                            Xem chi tiết
                                        </Link>
                                        
                                    </button>
                                </div>
                            ))
                }
            </div>
            
        
    </div>
  )
}
