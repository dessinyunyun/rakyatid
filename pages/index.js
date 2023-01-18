import axios from "axios";
import React from "react";
export default function Home(props) {
  let news = props.posts.articles[0];
  let articles = props.posts.articles[2];
  let data = props.posts.articles;

  console.log(props.posts.articles[0]);
  return (
    <>
      <header className="header-text">
        <div className="nav-top w-full bg-default-100">
          <div class="row flex-row-reverse justify-content-start">
            <div class="col-sm-6">
              <ul className="flex  text-white justify-content-end ">
                <li>Masuk</li>
                <li>Pendaftaran</li>
                <li>Cari</li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="bg-default-50 px-5">
          <div class="row pt-3 ">
            <div class="col-sm-6 text-yellow-50">
              <h2 className="text-3xl">Jadi Warga Rakyat.id</h2>
              <button className="bg-yellow-50 rounded-full text-default-50 text-sm px-3 py-2 flex items-center ">
                Bergabung <i class="fi fi-rr-arrow-right h-3 ml-3"></i>
              </button>
            </div>
            <div class="col-sm-5 flex justify-content-end">
              <h1 className="text-white text-center text-5xl">
                Rakyat
                <br />
                id
              </h1>
            </div>
          </div>
          <ul className="flex menu-contain text-white mt-3 text-lg">
            <li>Nasional</li>
            <li>Kebudayaan</li>
            <li>Hiburan</li>
            <li>Tokoh</li>
            <li>Peristiwa</li>
            <li>Esai</li>
            <li>Ibu Pintar</li>
            <li>Sajak</li>
            <li>Advertorial</li>
            <li>Ceritamu</li>
          </ul>
        </nav>
        <div className="sub-nav px-5">
          <ul className="flex gap-5">
            <li>
              <a href="#">Kode Etik Jurnalistik</a>
            </li>
            <li>
              <a href="#">Pedoman Media Siber</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Syarat & Ketentuan</a>
            </li>
            <li>
              <a href="#">Kebijakan Pribadi</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
          </ul>
          <div className="lines">
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>
      </header>
      <section className="px-5 flex justify-content-center">
        <div class="row section-contain py-3">
          <div class="col-sm-2">
            {" "}
            <div class="header-section">
              <h2 className="text-xl">Headlines</h2>
              <p className="font-medium text-red-50">10 Januari 2023</p>
            </div>
          </div>
          <div class="col-sm-7 p-0 h-max">
            {" "}
            <div class="main-section border-red bg-netral-100 h-max">
              <div class="row">
                <div class="col-sm-4 ">
                  <div class="pl-3  h-full flex flex-wrap justify-between">
                    <h3 className="text-xl font-medium">
                      {" "}
                      <b className="text-red-50">{news.author} /</b> {news.title}
                    </h3>{" "}
                    <p className="h-max">{news.description}</p>
                  </div>
                </div>
                <div class="col-sm-8 flex justify-end h-max">
                  <div class="image-section h-max">
                    <img src={news.urlToImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="main-section row mt-3">
              <div class="col-sm-8 border-red bg-netral-100 h-maxborder-red bg-netral-100 h-max p-0">
                <div class="img-section max-w-full">
                  <img src={data[3].urlToImage} alt="" className="max-w-full" />
                </div>

                <div class="text p-2">
                  <h3 className="text-xl font-medium mt-1">
                    {" "}
                    <b className="text-red-50">{data[3].author} /</b> {data[3].title}
                  </h3>{" "}
                  <p className="h-max mt-5">{data[3].description}</p>
                </div>
              </div>
              <div class="col-sm-4 flex flex-column gap-2">
                <div class="wrapper border-red bg-netral-100 h-max ">
                  <div class="img-section ">
                    <img src={data[9].urlToImage} alt="" />
                  </div>

                  <div class="text p-1">
                    <h3 className="text-xl font-medium">
                      {" "}
                      <b className="text-red-50">{data[9].author} /</b> {data[9].title}
                    </h3>{" "}
                  </div>
                </div>
                <div class="wrapper border-red bg-netral-100 h-max">
                  <div class="text p-1">
                    <h3 className="text-base font-medium">
                      {" "}
                      <b className="text-red-50">{data[4].author} /</b> {data[4].title}
                    </h3>{" "}
                  </div>
                </div>
                <div class="wrapper border-red bg-netral-100 h-max">
                  <div class="text p-1">
                    <h3 className="text-base font-medium">
                      {" "}
                      <b className="text-red-50">{data[5].author} /</b> {data[5].title}
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 gap-2 flex flex-column">
            <div class="section-aside">
              <div class="image-aside h-max">
                <img src={articles.urlToImage} alt="" />
              </div>
              <div class="title-aside">
                <b className="text-red-50">{articles.author} /</b> {articles.title}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[6].author} /</b> {data[6].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[7].author} /</b> {data[7].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[8].author} /</b> {data[8].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[8].author} /</b> {data[8].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[8].author} /</b> {data[8].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[8].author} /</b> {data[8].title}
                </h3>{" "}
              </div>
            </div>
            <div class="wrapper border-red bg-netral-100 h-max">
              <div class="text p-1">
                <h3 className="text-base font-medium">
                  {" "}
                  <b className="text-red-50">{data[8].author} /</b> {data[8].title}
                </h3>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=42bc83055280456785abf1623b6ef46b");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
