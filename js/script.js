'use strict';

/****************** function titleClickHandler ******************/
function titleClickHandler(e){
    e.preventDefault();
    const clickedElement = this;
   
    /* 1 - remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    
    /* 2 - add class 'active' to the clicked link*/
    clickedElement.classList.add('active');
    console.log('clickedElement: ', clickedElement);

    /* 3 - remove class 'active' from all articles */
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
    
    debugger;

}



/****************** function generateTitleLinks ******************/

const optArticleSelector = '.post',
    optListSelector = '.titles',
    optTitleSelector = '.post-title';

const linkList = document.querySelector(optListSelector);

function generateTitleLinks(){

    /* 1 - remove contents of titleList */
    function clearList(){
        linkList.innerHTML = '';
    }
    clearList();

    const articles = document.querySelectorAll(optArticleSelector);
    let html ='';

    /* 2 - for each article...*/
    for (let article of articles) {
        
        /* 3 - get article id*/
        const articleId = article.getAttribute("id");
        console.log('articleId: ' + articleId);

        /* 4 - get title element*/
        const titleElement = article.querySelector(optTitleSelector);

        /* 5 - get title*/
        const title = titleElement.innerHTML;

        /* 6 - create linkHTML*/
        let linkHTML = '<li><a href="#' + articleId + '"><span>' + title + '</span></a></li>';

        /* 7 - inset link into html variable*/
        html = html + linkHTML;

        /*linkList.innerHTML = linkList.innerHTML + linkHTML;*/
    }   
    console.log(html);
    linkList.innerHTML = html;
}
generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log('links:', links);
for (let link of links){
    link.addEventListener('click', titleClickHandler);
}
