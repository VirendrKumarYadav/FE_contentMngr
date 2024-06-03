import React, { useEffect, useState } from 'react'
import Header from "../header/Header"
import FetchAPi from '../../API/FetchAPI';
import Card from "../card/card"

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const response = await FetchAPi("/products");

                setData(response);
            } catch (err) {
             console.log(err);
            } 
           
        };
        fetchData();
    }, []);

    return (
        <div className='dashboard-container'>
            <Header />

            <div class="row">

                <div class="col-2 menu">
                    <label><b>Categeroies</b></label>
                    <ul>
                        <li>
                            <input type='checkbox' />
                            <span>Conytent Distribution</span>
                        </li>
                        <li>
                            <input type='checkbox' />
                            <span>Ads</span>
                        </li><li>
                            <input type='checkbox' />
                            <span>Twitter Influencers</span>
                        </li>
                        <li>
                            <input type='checkbox' />
                            <span>Teligram Influencers</span>
                        </li>
                        <li>
                            <input type='checkbox' />
                            <span>Youtube Influencers</span>
                        </li>
                        <li>
                            <input type='checkbox' />
                            <span>Ico Listing Distribution</span>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-s-9">
                    <div>
                        <h1>Koinpr Marketplace</h1>
                        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
                    </div>
                    <div className='filter'>
                        <span><b>Showing Results</b>:<span>{1}</span></span>
                    </div>
                    <div className=''>
                        <select className='select-filter'>
                            <option value="">Filter by Name</option>
                            <option value="">Todayq1</option>
                            <option value="">Todayq2</option>
                            <option value="">Todayq3</option>
                        </select>
                        <select className='select-filter'>
                            <option value="">Filter by Location</option>
                            <option value="">USA</option>
                            <option value="">India</option>
                            <option value="">Dubai</option>
                        </select>
                        <select className='select-filter'>
                            <option value="">Filter by amount</option>
                            <option value="">1000</option>
                            <option value="">2000</option>
                            <option value="">3000</option>
                        </select>
                    </div>
                    <div className='card_list'>
                        {
                            data?.map((card, idx) => {
                                
                                return   <Card key={idx} title={card?.title} metric={card?.matric} KPR_Matric={card?.KPR_Matric} visitors={card?.visitors} location={card?.location} Price={card?.Price}/>
                            })
                        }
                       

                    </div>
                </div>

                <div class="col-3 col-s-12">
                    <div class="aside">
                        <h2>What?</h2>
                        <p>Chania is a city on the island of Crete.</p>
                        <h2>Where?</h2>
                        <p>Crete is a Greek island in the Mediterranean Sea.</p>
                        <h2>How?</h2>
                        <p>You can reach Chania airport from all over Europe.</p>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>


        </div>
    )
}

export default Dashboard