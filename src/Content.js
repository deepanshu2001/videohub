import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getViewCount from './Components/getViewCount';
import getDuration from './Components/getDuration';
import Item from './Components/Item';
import { formatDistanceToNow } from 'date-fns';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Components/Spinner';

function Content({ searchItem }) {
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchPopularURL = async (pageToken = '') => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&pageToken=${pageToken}&key=${API_KEY}`
      );
      const items = response.data.items;
      // console.log(items);
      const videoData = items.map(item => ({
        videoId:item.id,
        image: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        channelName: item.snippet.channelTitle,
        time: formatDistanceToNow(new Date(item.snippet.publishedAt), { addSuffix: true }),
        views: getViewCount(item.statistics.viewCount),
        duration: getDuration(item.contentDetails.duration),
      }));
      // console.log(videoData)
      setData(prevData => [...prevData, ...videoData]);
      setNextPageToken(response.data.nextPageToken);
      setHasMore(!!response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSearchUrl = async (pageToken = '') => {
    try {
      const responseVideo = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?&q=${searchItem}&key=${API_KEY}&part=snippet&type=video&maxResults=50&pageToken=${pageToken}`
      );
      const videoIds = responseVideo.data.items.map(item => item.id.videoId).join(',');
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${API_KEY}`
      );
      const items = response.data.items;
      
      const videoData = items.map(item => ({
        videoId:item.id,
        image: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        channelName: item.snippet.channelTitle,
        time: formatDistanceToNow(new Date(item.snippet.publishedAt), { addSuffix: true }),
        views: getViewCount(item.statistics.viewCount),
        duration: getDuration(item.contentDetails.duration),
      }));
      setData(prevData => [...prevData, ...videoData]);
      setNextPageToken(responseVideo.data.nextPageToken);
      setHasMore(!!responseVideo.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setData([]);
    setNextPageToken(null);
    setHasMore(true);
    if (searchItem) {
      fetchSearchUrl();
    } else {
      fetchPopularURL();
    }
  }, [searchItem]);

  const loadMore = () => {
    if (searchItem) {
      fetchSearchUrl(nextPageToken);
    } else {
      fetchPopularURL(nextPageToken);
    }
  };

  return (
    <div className="h-full overflow-hidden">
      <InfiniteScroll
        dataLength={data.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<Spinner />}
        height="calc(100vh - 64px)" 
        className="overflow-y-auto"
      >
        <div className="grid gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Content;
