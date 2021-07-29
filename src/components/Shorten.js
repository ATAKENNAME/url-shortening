import React, { useState } from 'react';
import isValidUrl from "./UrlValidator"

function Shorten() {
    let api_url = "https://api.shrtco.de/v2/shorten?url=";
    const [linkInput, setLinkInput] = useState(null);
    const [n, setN] = useState(localStorage.length + 1);
    const [localStorageVariable, setLocalStorageVariable] = useState(localStorage);
    const cardContainerPrefix = "card-container-id-";

    async function handleClick() {
        document.body.style.cursor = "progress";

        if (linkInput){
        await fetchData();
        document.body.style.cursor = "default";
        }else{
            alert("please enter a link");
        }
    }

    async function fetchData() {
        let url = api_url + linkInput;
        
        isValidUrl(url)?
        await fetch(url)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.ok){
                    setN(n =>n + 1)
                    updateToStorage(data)
                    setLinkInput (null)
                    }else{
                        alert(data.error);
                    }    
                },
                (error) => {
                    console.error("error",error);
                }
            ).catch(e=>alert("sorry! looks like something went wrong, please try again later")):
            alert("please enter a valid link");
    }

    async function updateToStorage(data) {

        let dataStorage = {
            input: data.result.original_link,
            res: data.result.full_short_link
        };

        let cardId = cardContainerPrefix + n;

        localStorage.setItem(cardId, JSON.stringify(dataStorage));
        setLocalStorageVariable(localStorage);
    }

    return (
        <div id="shorten-link-box">
            <div id="shorten-func-box">
                <input id="link-input" placeholder="shorten a link here..." onChange={(e) => { setLinkInput(e.target.value) }} value={linkInput||""}></input>
                <button className="shorten-btn" onClick={handleClick}>Shorten It!</button>
            </div>
            <div id="result-cards-container">
                {localStorage.length === 0 ?
                    null
                    : Object.keys(localStorageVariable).sort().map((key) => {
                        const item = JSON.parse(localStorageVariable.getItem(key));
                        const linkShortten = item.input;
                        const resReceived = item.res;
                  
                        return (
                            < div key = {key} id={key} className="card-container" >
                                <div className="result-card">
                                    <div className="card-elemt-container">
                                        <p className="result-card-text card-input">{linkShortten}</p>
                                    </div>
                                    <hr></hr>
                                    <div className="card-elemt-container">
                                        <p className="result-card-text card-res">{resReceived}</p>
                                    </div>
                                    <div className="card-elemt-container">
                                        <button className="shorten-btn copy-btn" onClick={() => { navigator.clipboard.writeText(resReceived) }}> Copy </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default Shorten;
