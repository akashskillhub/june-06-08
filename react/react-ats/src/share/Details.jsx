import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getJobDetail } from '../redux/actions/publicActions'
import { HiArrowLeft } from "react-icons/hi2";
import { applyJob, isApply } from '../redux/actions/userActions';
import { toast } from 'react-toastify';

const Details = () => {
    const { jobId } = useParams()

    const dispatch = useDispatch()
    const { selectedJob } = useSelector(state => state.public)

    useEffect(() => {
        dispatch(getJobDetail(jobId))
        dispatch(isApply({
            userId: auth ? auth.id : 0,
            jobId: selectedJob && selectedJob.id
        }))
    }, [])

    const { auth, applied, isApplied } = useSelector(state => state.user)

    useEffect(() => {
        if (applied) {
            toast.success("Apply Success")
        }
    }, [applied])


    return selectedJob && <>


        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">


                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <Link to="/" className="btn btn-outline  my-5">
                            <HiArrowLeft />
                        </Link>
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">Jobs Details</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4 uppercase">{selectedJob.title}</h1>
                        <div class="flex mb-4">
                            <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                            <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                        </div>
                        <p class="leading-relaxed mb-4">
                            {selectedJob.desc}
                        </p>
                        <div class="flex  border-t border-gray-300 py-2">
                            <span class="text-gray-500">Location</span>
                            <span class="ml-auto text-gray-900">{selectedJob.location}</span>
                        </div>
                        <div class="flex border-t border-gray-300 py-2">
                            <span class="text-gray-500">Mode</span>
                            <span class="ml-auto text-gray-900">{selectedJob.mode}</span>
                        </div>
                        <div class="flex border-t border-b border-gray-300 py-2">
                            <span class="text-gray-500">Type</span>
                            <span class="ml-auto text-gray-900">{selectedJob.type}</span>
                        </div>
                        <div class="flex border-t  mb-6 border-gray-300 py-2">
                            <span class="text-gray-500">Experince</span>
                            <span class="ml-auto text-gray-900">{selectedJob.experince}</span>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">$ {selectedJob.salary}</span>
                            {
                                isApplied
                                    ? "Already Applied"
                                    : auth
                                        ? <button
                                            onClick={e => dispatch(applyJob({
                                                userId: auth.id,
                                                jobId: selectedJob.id
                                            }))}
                                            class="flex ml-auto text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-slate-800 rounded">Apply Now</button>
                                        : <Link to="/login" class="flex ml-auto text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-slate-800 rounded">Login</Link>
                            }

                        </div>
                    </div>
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                </div>
            </div>
        </section>
    </>
}

export default Details