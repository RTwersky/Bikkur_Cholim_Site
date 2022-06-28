import React from 'react'
import './Resources.css'

function Resources() {
    return (
        <div className='resources'>
            <div className='resources__body'>
                <h1>Resources</h1>
                <hr></hr>
                <h3>Kosher Food</h3>
                <p>Kosher takeout: <a href='https://www.ahavacatering.com/' target='_blank' rel="noopener noreferrer">Ahava Catering</a></p>
                <p>For details about where to buy kosher food in Rhode Island see <a href='https://www.rikosher.org/kosher-in-rhode-island.html' target='_blank' rel="noopener noreferrer">Rhode Island Kosher</a></p>
                <h3>Shuls</h3>
                
                <p><a href='https://www.shaareitefillaprov.org/' target='_blank' rel="noopener noreferrer">Sha'arei Tefilla</a></p>
                <p>Mishkon Tfiloh</p>
                <p><a href='https://www.yeshivaofprovidence.org/' target='_blank' rel="noopener noreferrer">Yeshiva Gedola of Providence</a></p>
                <p><a href='http://kollelcjs.weebly.com/' target='_blank' rel="noopener noreferrer">Providence Community Kollel</a></p>
                <p>Find a minyan in Providence on <a href='https://www.godaven.com/search?mode=location&address=Providence,%20RI%2002906,%20USA&lat=41.8396817&lng=-71.38837509999999' target='_blank' rel="noopener noreferrer">GoDaven</a></p>

            </div>
        </div>
    )
}

export default Resources