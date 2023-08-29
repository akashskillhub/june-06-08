import React from 'react'
import useDynamicForm from '../../hooks/useDynamicForm'
import { useDispatch } from 'react-redux'
import { createJobPost } from '../../redux/actions/employerActions'

const Account = () => {

    /*
        title
        desc
        location
        type : 
        salary
        experincce
        skills

    */
    const dispatch = useDispatch()
    const handleSubmit = e => {
        dispatch(createJobPost(state))
    }

    const config = [
        { fieldName: "title", type: "text", value: "" },
        { fieldName: "desc", type: "text", value: "" },
        { fieldName: "location", type: "text", value: "" },
        {
            fieldName: "mode",
            type: "select",
            value: "",
            options: ["onsite", "remote", "hybrid"]
        },
        {
            fieldName: "type",
            type: "select",
            value: "",
            options: ["intern", "full-time", "part-time"]
        },
        { fieldName: "salary", type: "text", value: "" },
        { fieldName: "experince", type: "text", value: "" },
        {
            fieldName: "skills",
            type: "checkbox",
            value: "",
            options: ["javaScript", "react", "angular", "node", "python", "react-native"]
        },
        {
            fieldName: "submit",
            type: "submit",
            value: "Post Job",
            click: handleSubmit
        },
    ]

    const [state, customForm] = useDynamicForm(config)


    return <>
        <div className="container">
            <div className='text-end'>
                <button data-bs-toggle="modal" data-bs-target="#createPost" type="button" class="btn btn-primary">Create Post</button>
            </div>
        </div>


        <div class="modal fade" id="createPost" >
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {customForm}
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Account