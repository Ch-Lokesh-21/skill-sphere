import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function EnrollCourseCard({ course, enrollCourse }) {
    const courseJson = course?.courseJson?.course;

    const CalculatePerProgress = () => {
        // console.log(enrollCourse?.completedChapters?.length / course?.courseContent?.length * 100)
        return enrollCourse?.completedChapters?.length ? (enrollCourse?.completedChapters?.length / course?.courseContent?.length) * 100 : 0
    }
    return (
        <div className='shadow rounded-xl'>
            <Image src={course?.bannerImageUrl} alt={course?.name}
                width={400}
                height={300}
                className='w-full aspect-video rounded-t-xl object-cover'
            />
            <div className='p-3 flex flex-col gap-3'>
                <h2 className='font-bold text-lg'>{courseJson?.name}</h2>
                <p className='line-clamp-3 text-gray-400 text-sm'>{courseJson?.description}</p>
                <div className=''>
                    <h2 className='flex justify-between text-sm text-primary'>Progress <span>{CalculatePerProgress().toFixed(0)}%</span></h2>
                    <Progress value={CalculatePerProgress()} />

                    <Link href={'/workspace/view-course/' + course?.cid}>
                        <Button className={'w-full mt-3'}> <PlayCircle /> Continue Learning </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EnrollCourseCard