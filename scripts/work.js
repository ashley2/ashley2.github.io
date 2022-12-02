    $(document).ready(function() {

        // portfolio page add cards and snap pages
        var header;
        var text;
        var image1;
        var image2;
        var modalTitle;
        var cardNum;
        var urls = ['./../cards1.json', './../cards2.json', './../cards3.json', './../cards4.json', './../cards5.json']

        for (let i = 0; i < urls.length; i++) {
            var url = urls[i];
            $.ajax({
                url: url,
                dataType: 'json',
                success: function(data) {
                    var cardData = data;
                    for (var item in cardData) {
                        header = cardData[item].header;
                        text = cardData[item].text;
                        image1 = cardData[item].image1;
                        image2 = cardData[item].image2;
                        modalTitle = cardData[item].modalTitle;
                        cardNum = cardData[item].cardNum;
                        caseSolution = cardData[item].caseSolution;
                        caseChallenge = cardData[item].caseChallenge;
                        uniqueId = cardData[item].uniqueId;
                        // let card = `<div class="col-md-6 col-lg-4 column cardCol"><div class="card pointer"><div class="card-img-overlay cardTxt"><div class="txt"><h1 id="cardHeader">${header}</h1><p>${text}</p></div></div><div class="ico-card" id="${uniqueId}"><img class="active cardImg card-img img-fluid" src="${image2}"></div></div></div><div class="modal fade workFade textDark ${uniqueId}" tabindex="-1" aria-labelledby="card${uniqueId}Label" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="workModal modal-content"><h5 class="modal-title">${modalTitle}</h5><div>${text}</div><img class="modalImage img-responsive modal-content" src="${image2}" alt="gif"></div></div></div>`;
                        let card = `<div class="col">
<div class="card workCard pointer" style="width: 35rem;">
     <div class="ico-card" tabindex="0" id="${uniqueId}"><img class="cardImg card-img img-fluid" src="${image2}"></div>
  <div class="card-body">
   
  </div>
</div>
<div class="modal fade workFade textDark ${uniqueId}" aria-labelledby="card${uniqueId}Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="workModal modal-content"><button type="button" class="btn-close visually-hidden-focusable float-end" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 class="modal-title">${modalTitle}</h5>

            <div>${text}</div>

<ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link tabLink active" id="home-tab" data-bs-toggle="tab" data-bs-target="#tab${uniqueId}" type="button" role="tab" aria-controls="tab${uniqueId}" aria-selected="true">Product</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link tabLink" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile${uniqueId}" type="button" role="tab" aria-controls="profile${uniqueId}" aria-selected="false">Case Study</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="tab${uniqueId}" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <img class="modalImage img-responsive modal-content" src="${image2}" alt="gif">
  </div>
  <div class="tab-pane fade" id="profile${uniqueId}" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
 <div class="row">
   <h4>Goal</h4>
  <p>${caseChallenge}</p>
  </div>
    <div class="row">
   <h4>Solution</h4>
   <p>${caseSolution}</p>
   </div>
  </div>
</div>
   
        </div>

    </div></div> `; 





//     let card = `<div class="col">
// <div class="card workCard pointer" style="width: 35rem;">
//      <div class="ico-card" tabindex="0" id="${uniqueId}"><img class="cardImg card-img img-fluid" src="${image2}"></div>
//   <div class="card-body">
   
//   </div>
// </div>
// <div class="modal fade workFade textDark ${uniqueId}" aria-labelledby="card${uniqueId}Label" aria-hidden="true">
//     <div class="modal-dialog modal-dialog-centered modal-lg">
//         <div class="workModal modal-content">
//             <h5 class="modal-title">${modalTitle}</h5>
//             <div>${text}</div><img class="modalImage img-responsive modal-content" src="${image2}" alt="gif">
// <p>
//   <button type="button" class="btn text-light caseStudyBtn float-end mt-2" data-bs-toggle="collapse" data-bs-target="#caseStudyCard">Case Study</button>
// </p>
//   <div id="caseStudyCard" class="collapse">
//   <div class="row">
//   <h4>Goal</h4>
//   <p>${caseChallenge}</p>
//   </div>
//    <div class="row">
//    <h4>Solution</h4>
//    <p>${caseSolution}</p>
//    </div>

// </div>
   
//         </div>

//     </div></div> `;


                        switch (cardNum) {
                            case 'cards1':
                                $("#cardRow1").append(card);

                                break;
                            case 'cards2':

                                $("#cardRow2").append(card)
                                break;
                            case 'cards3':

                                $("#cardRow3").append(card)
                                break;
                            case 'cards4':

                                $("#cardRow4").append(card)
                                break;
                            case 'cards5':

                                $("#cardRow5").append(card)
                                break;
                        };
                        $(".ico-card").on('keypress', function() {
                            var modalClass = $(this).attr('id')
                            $("." + modalClass).modal('show');
                        })
                        $("#cardRow1, #cardRow2, #cardRow3, #cardRow4, #cardRow5").on('mouseover', '.card', function() {

                            var $this = $(this);
                            var modalClass = $this.find(".ico-card").attr('id')
                            $this.click(function() {
                                $("." + modalClass).modal('show');
                            });
                        });

                        $('.ico-card').each(function(i, obj) {
                            var cardId = $(this).attr('id');
                            const cardChar = (cardId).charAt(cardId.length - 1)
                            if ((cardChar === 'a') || (cardChar === 'c') || (cardChar === 'e') || (cardChar === 'g')) {
                                $(this).parent().addClass('float-lg-end');
                            }

                        });

                    }
                },
                error: function() { // if any error come then 
                    console.log('There was a problem with the server.  Try again soon!');
                }
            });

        };

        const portfolioController = new ScrollMagic.Controller()

        new ScrollMagic.Scene({
                triggerElement: "#animateOne",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateOne", "animate__slideInLeft")
            .addTo(portfolioController);

        new ScrollMagic.Scene({
                triggerElement: "#animateTwo",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateTwo", "animate__slideInLeft")
            .addTo(portfolioController);
        new ScrollMagic.Scene({
                triggerElement: "#animateThree",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateThree", "animate__slideInLeft")
            .addTo(portfolioController);
        new ScrollMagic.Scene({
                triggerElement: "#animateFour",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateFour", "animate__slideInLeft")
            .addTo(portfolioController);
        new ScrollMagic.Scene({
                triggerElement: "#animateFive",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateFive", "animate__slideInLeft")
            .addTo(portfolioController);
        new ScrollMagic.Scene({
                triggerElement: "#animateSix",
                triggerHook: "onEnter",
            })
            .setClassToggle("#animateSix", "animate__slideInLeft")
            .addTo(portfolioController);


        // Position to show data
        const blogPos = $("#blogRow");
        const username = "ashleysmith2";
        const api = "https://dev.to/api/articles?";
        const finalURL = buildURL(username);
        fetch(finalURL)
            .then((response) => response.json())
            .then(posts => {
                posts.length = 5;
                posts.forEach((post) => {
                    let blogCard = `<div class="col"><div class="container"><a href="${post.url}" class="blogLink" target="_blank"><div class="card blogCard workCard px-0" style="width: 35rem;"><img src="${post.cover_image}" class="card-img-top" alt="Blog Post Image"><div class="card-body"><div class="row"><h4> ${post.title} </h4></div><div class="row"><p class="card-text"> ${post.description} </p><div class="row"><div><i class="fa-solid fa-heart"></i> ${post.public_reactions_count}   <i class="fa fa-comment ms-2" aria-hidden="true"></i> ${post.comments_count}</div></div></div></div></div></a></div></div>`;
                    $(blogPos).append(blogCard);
                });
            });
        // build url
        function buildURL(userName) {
            return `${api}username=${userName}`;
        };



    });