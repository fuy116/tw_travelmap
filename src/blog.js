
import React from 'react';
import './blog.css'
const buttonClass = 'bg-white text-zinc-800 py-2 px-4 rounded';

const Blog = () => {
    return (
        <div className="bg-zinc-100">
            <div className="bg-cover bg-center h-64" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')"}}>
                <div className="flex justify-between items-center h-full px-8">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold">FuY's Blog</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-8 ">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6 h-[32rem]">
                    <h3 className="text-xl font-semibold mb-2">資料結構與作業 Sorting</h3>
                    <p className="text-zinc-700 mb-4">記錄我今天進度的實作和遇到的問題。主要進行 Insertion Sort練習；將遍歷過的元素一一排序。</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

