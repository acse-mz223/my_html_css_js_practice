import { videos, largeVideos } from "../data/videos.js";
import { toWan, timeTrans } from "./utensil.js";

//获取large图
function getBodyLargeImage(){
    let html='';
    largeVideos.forEach((img) =>{
        html +=`
        <img src=${img.img} class="item-large-image">
        `;
    });
    return html;
}

// large图 点
function getBodyLargeDot(){
    let html='';
    for (let i=0;i<largeVideos.length;i++)
        if (i === 0) html += `<div class="item-large-footer-line2-dot-after js-item-large-footer-line2-dot-${i}"></div>`;
        else html += `<div class="item-large-footer-line2-dot-before js-item-large-footer-line2-dot-${i}"></div>`;
    return html;
}

// item-large html
function getBodyLargeHtml(){
    let bodyHtml = `
        <div class="item-large">
            <div class="item-large-images js-item-large-images">
            ${getBodyLargeImage()}
            </div>
            <div class="item-large-footer">
                <div class="item-large-footer-line1">
                    <p class="js-item-large-footer-line1-title">${largeVideos[0].title}</p>
                    <div class="item-large-footer-line1-buttons">
                        <button class="item-large-footer-line1-button js-item-large-footer-line1-button-left">&lt;</button>
                        <button class="item-large-footer-line1-button js-item-large-footer-line1-button-right">&gt;</button>
                    </div>
                </div>
                <div class="item-large-footer-line2">
                    ${getBodyLargeDot()}
                </div>  
            </div>
        </div>
    `;
    return bodyHtml;
}

// body html
function getBodyHtml(){
    let bodyHtml = getBodyLargeHtml();
    videos.forEach((video) =>{
        bodyHtml +=`
            <div class="item">
                <div class="item-video">
                    <img src=${video.img} class="item-img">
                    <div class="item-video-info-left">
                        <div class="item-play">${toWan(video.play)}</div>
                        <div class="item-comments">${video.comments}</div>
                    </div>
                    <div class="item-playtime">${timeTrans(video.playtime)}</div>
                </div>
                <p class="item-title">${video.title}</p>
                <div>
                    <div class="item-states">${video.states}</div>
                    <div class="item-username">${video.username}</div>
                    <div class="item-createtime">${video.createtime}</div>
                </div>
            </div>
        `;
    }) 
    return bodyHtml;

}

document.querySelector('.body').innerHTML = getBodyHtml();

// large video button setup
let largeVideosNumber = largeVideos.length;
let largeVideosIndex = 0;
document.querySelector('.js-item-large-footer-line1-button-left').addEventListener(
    'click',() =>{
        // dot change
        let largeVideoDot = document.querySelector(`.js-item-large-footer-line2-dot-${largeVideosIndex}`);
        largeVideoDot.classList.remove('item-large-footer-line2-dot-after');
        largeVideoDot.classList.add('item-large-footer-line2-dot-before');
        // roll
        largeVideosIndex --;
        largeVideosIndex = (largeVideosIndex + largeVideosNumber) % largeVideosNumber ;
        // image
        let largeVideosDiv = document.querySelector('.js-item-large-images');
        largeVideosDiv.style.transform = `translateX(-${largeVideosIndex * 100}%)`;
        // dot change
        largeVideoDot = document.querySelector(`.js-item-large-footer-line2-dot-${largeVideosIndex}`);
        largeVideoDot.classList.remove('item-large-footer-line2-dot-before');
        largeVideoDot.classList.add('item-large-footer-line2-dot-after');
        // title
        let title = document.querySelector('.js-item-large-footer-line1-title');
        title.innerHTML = largeVideos[largeVideosIndex].title;
        // bg
        let infoDiv = document.querySelector('.item-large-footer');
        infoDiv.style.backgroundColor = largeVideos[largeVideosIndex].color;

    }
);
document.querySelector('.js-item-large-footer-line1-button-right').addEventListener(
    'click',() =>{
        // dot change
        let largeVideoDot = document.querySelector(`.js-item-large-footer-line2-dot-${largeVideosIndex}`);
        largeVideoDot.classList.remove('item-large-footer-line2-dot-after');
        largeVideoDot.classList.add('item-large-footer-line2-dot-before');
        // roll
        largeVideosIndex ++;
        largeVideosIndex = largeVideosIndex % largeVideosNumber;
        // image
        let largeVideosDiv = document.querySelector('.js-item-large-images');
        largeVideosDiv.style.transform = `translateX(-${largeVideosIndex * 100}%)`;
        // dot change
        largeVideoDot = document.querySelector(`.js-item-large-footer-line2-dot-${largeVideosIndex}`);
        largeVideoDot.classList.remove('item-large-footer-line2-dot-before');
        largeVideoDot.classList.add('item-large-footer-line2-dot-after');
        // title
        let title = document.querySelector('.js-item-large-footer-line1-title');
        title.innerHTML = largeVideos[largeVideosIndex].title;
        // bg
        let infoDiv = document.querySelector('.item-large-footer');
        infoDiv.style.backgroundColor = largeVideos[largeVideosIndex].color;
    }
);
