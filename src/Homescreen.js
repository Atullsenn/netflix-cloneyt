import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav';

function Homescreen() {
    return (
        
        <div className='homescreen'>
        <Nav />
        <Banner />
        <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl = {requests.fetchNetFlixOriginals}
        isLargeRow = {true}
        />
        <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
        <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
       
        </div>
    )
}

export default Homescreen
