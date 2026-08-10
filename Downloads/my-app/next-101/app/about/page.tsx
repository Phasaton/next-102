import React from 'react'
import Counter from '@/components/Counter'
import Image from 'next/image'

const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await res.json();
    return data;
}


const aboutPage = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    const data = await fetchPost();
    console.log("data", data);

    return (
        <div>
            <p>This is the about page.</p>

            <Counter />

            <ul>

                {data.map((item: { id: number; title: string }) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>



            <Image
                src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                alt="description"
                width={500}
                height={300}
            />

        </div>
    )
}

export default aboutPage