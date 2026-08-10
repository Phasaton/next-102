"use client";

import {createBook} from '@/utils/actions'

import React, { useActionState } from 'react'

const Form = () => {

const[message, formAction, pedding] = useActionState(createBook,null );

    return (
        <div>
            {message && <p className="text-green-500">{message}</p>}
            <form action={formAction} className="flex flex-col gap-4">
                <div className="p-3">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="border border-blue-400" name="title" placeholder="Enter book title" defaultValue="Nodejs" />
                </div>

                <div className="p-3">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" className="border border-blue-400" name="price" placeholder="Enter price" defaultValue="200" />
                </div>

                <div className="p-3">
                    <button type="submit" className="bg-blue-400 p-2 mt-2 cursor-pointer" disabled={pedding}>
                        {pedding ? "กำลังส่งข้อมูล..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form
