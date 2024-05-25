import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

import { Button } from 'primereact/button';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import Article from './components/article';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import './css/maps.css';

export default function Maps() {
  let params = useParams();

  const [visible, setVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const [inputContent, setContent] = useState('');
  const [inputTitle, setTitle] = useState('');
  const [first, setFirst] = useState(0);
  const [rows] = useState(5);

 
  // 獲取文章
  const fetchArticles = async () => {
    const articlesDB = collection(db, 'articles');
    const q = query(articlesDB, where("city_id", "==", params.city_id));
    const querySnapshot = await getDocs(q);
    const articlesList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setArticles(articlesList);
  };

  useEffect(() => {
    fetchArticles();
  }, [params.city_id]);

  // 添加文章
  const addArticle = async () => {
    if (inputTitle.trim() !== '' && inputContent.trim() !== '') {
      const articlesDB = collection(db, 'articles');
      await addDoc(articlesDB, {
        city_id: params.city_id,
        title: inputTitle,
        text: inputContent
      });
      setTitle('');
      setContent('');
      setVisible(false);
      fetchArticles(); // 重新獲取文章以更新列表
    }
  };

  // 分頁改變處理
  const onPageChange = (event) => {
    setFirst(event.first);
  };

  // 計算顯示的文章
  const currentArticles = articles.slice(first, first + rows);

  return (
    <div className="min-h-screen flex flex-col">

<header className="bg-cover bg-top h-[4rem]  bg-sky-600" >
  <div className="flex justify-between items-center px-8 h-full">
    <div className="text-white">
      <h1 className="text-4xl font-bold">{params.city_id}</h1>
    </div>
  </div>
</header>

 
      <div className="flex-grow bg-zinc-100 mx-auto p-8  w-full">
        <div className="bg-white p-3 rounded-lg shadow-lg mb-6 min-h-[30rem]  ">
          {currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <Article key={index} title={article.title} text={article.text} />
            ))
          ) : (
          <div className="text-center w-full">
            <p className="text-gray-500  text-2xl">目前沒有文章</p>
          </div>
          )}
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button icon="pi pi-angle-double-left">Back</Button>
        </Link>
      
        <div className="card flex justify-content-center ">
          <Button label="新增文章" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="新增文章"  visible={visible} onHide={() => setVisible(false)}>
              <div className="card flex justify-content-center">
                <InputText value={inputTitle} placeholder="文章標題" className="m-3"  onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="card flex justify-content-center">
                <InputTextarea value={inputContent} placeholder="文章內容" onChange={(e) => setContent(e.target.value)} rows={10} cols={60} />
              </div>
              <div className="card flex justify-content-center">
              <Button label="提交" className="m-3" onClick={addArticle} />
            </div>
          </Dialog>
        </div>

        <div className="card flex justify-content-center py-5">
          <Paginator first={first} rows={rows} totalRecords={articles.length} onPageChange={onPageChange} />
        </div>
      </div>
    </div>
  );
}
