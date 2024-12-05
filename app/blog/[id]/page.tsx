"use client";

import { useParams } from "next/navigation";

export default function BlogPostPage() {
    const params = useParams();
    const id = params.id; // Captura el parámetro dinámico `id`

    return (
        <div>
            <h1>Blog Post</h1>
            <p>This is the blog post with ID: {id}</p>
        </div>
    );
}

