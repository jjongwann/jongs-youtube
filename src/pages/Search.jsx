import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
       setVideos([]);
       fetchVideos(searchId);
       setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
       .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((preVideos) => [...preVideos, ...data.items]); //CONCAT과 같은 역할(이전 데이터 + 다음 데이터)
        setLoading(false);
    })
    .catch((error)=>{
        console.log('Error fetching data', error);
    })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            <section id='searchPage' className={searchPageClass}>
                <h2>🤠 <em>{searchId}</em>검색 결과입니다.</h2>
                <div className='video__inner search'>
                    <VideoSearch videos={videos}/>
                </div>
                <div className='video__more'>
                    {nextPageToken && (<button onClick={handleLoadMore}>더 보기</button>)} 
                </div>
            </section>
        </Main>
    )
}

export default Search