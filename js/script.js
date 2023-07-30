'use strict';

function titleClickHandler(e){
    e.preventDefault();
    const clickedElement = this;
   
    /* 1 - remove class 'active' from all article links [DONE]  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    
    /* 2 - add class 'active' to the clicked link [DONE]*/
    clickedElement.classList.add('active');
    console.log('clickedElement: ', clickedElement);

    /* 3 - remove class 'active' from all articles [DONE] */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* 4 - get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute("href");
    console.log('articleSelector: ', articleSelector);

    /* 5 - find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* 6 - add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('targetArticle: ', targetArticle);


    //console.log(e);
    console.log('Link was clicked!');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    function clearTitleList(){
        titleList.innerHTML = '';
    }
    clearTitleList();
    
    /* for each article */
    
    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
    
}

generateTitleLinks();
    