import { useEffect, useState } from "react"
import { FeaturedJobs } from "../../share/Landing"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { getUserApplications } from "../../redux/actions/userActions"

const Profile = () => {
    const [selected, setSelected] = useState("history")
    const selctedClasses = classNames({

    })
    return <>
        <div className="flex">
            <div
                className={` p-10 flex-1 ${selected === "history" && " border-b-slate-500 border-solid border-8 "}`} onClick={e => setSelected("history")}>History</div>
            <div
                className={` p-10 flex-1 ${selected !== "history" && " border-b-orange-500 border-solid border-8 "}`} onClick={e => setSelected("opning")}>openings</div>
        </div>
        {
            selected === "history"
                ? <History />
                : <FeaturedJobs />
        }

    </>
}

const History = () => {
    const { history, auth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserApplications(auth.id))
    }, [])
    return <div className="p-10 mt-10">
        <div className="overflow-x-auto container">
            <table className="table table-lg bg-slate-300  ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Mode</th>
                        <th>Desc</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history && history.map(item => <tr >
                            <td>{item.job.title}</td>
                            <td>{item.job.salary}</td>
                            <td>{item.job.experience}</td>
                            <td>{item.job.location}</td>
                            <td>{item.job.type}</td>
                            <td>{item.job.mode}</td>
                            <td>{item.job.desc}</td>
                            <td>{item.job.skills.map(o => <span className="badge badge-ghost mx-1">{o}</span>)}</td>
                        </tr>)
                    }
                </tbody>


            </table>
        </div>
    </div>
}

export default Profile