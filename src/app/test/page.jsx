'use client'
import React from 'react'

const deletePostUseOwnAPI = async (slug) => {
    try {
        const response = await fetch(`http://localhost:3000/api/blog/${slug}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        const result = await response.json();
        console.log(result); //  “Post deleted successfully”
    } catch (error) {
        console.error('Error deleting post:', error);
    }
};

const TestPage = () => {
    return (
        <div>
            <button onClick={() => deletePostUseOwnAPI('slug0827-5')}>
                use Delete API and slug: Delete Post
            </button>
        </div>
    )
}

export default TestPage