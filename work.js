    $(document).ready(function() {
        // portfolio page add cards and snap pages
        var header;
        var text;
        var image1;
        var image2;
        var modalTitle;
        var cardNum;
        var urls = ['cards1.json', 'cards2.json', 'cards3.json', 'cards4.json']

        for (let i = 0; i < urls.length; i++) {
            var url = urls[i];
            $.ajax({
                url: url,
                dataType: 'json',
                success: function(data) {
                    var cardData = data;
                    // var uniqueId = 0;
                    for (var item in cardData) {
                        header = cardData[item].header;
                        text = cardData[item].text;
                        image1 = cardData[item].image1;
                        image2 = cardData[item].image2;
                        modalTitle = cardData[item].modalTitle;
                        cardNum = cardData[item].cardNum;
                        // uniqueId += 1;
                        uniqueId = cardData[item].uniqueId;
                        // let card = `<div class="col-md-6 col-lg-4 column cardCol"><div class="card pointer"><div class="card-img-overlay cardTxt"><div class="txt"><h1 id="cardHeader">${header}</h1><p>${text}</p> </div></div><div class="ico-card" id="${uniqueId}"><img class="active cardImg card-img" src=" ${image2} "></div></div></div> <div class="modal fade textDark ${uniqueId}" tabindex="-1" aria-labelledby="card${uniqueId}Label" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">${modalTitle}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img class="modalImage img-responsive" src="${image2}" alt="gif"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>`;
                        let card = `<div class="col-md-6 col-lg-4 column cardCol"><div class="card pointer"><div class="card-img-overlay cardTxt"><div class="txt"><h1 id="cardHeader">${header}</h1><p>${text}</p> </div></div><div class="ico-card" id="${uniqueId}"><img class="active cardImg card-img" src=" ${image2} "></div></div></div> <div class="modal fade textDark ${uniqueId}" tabindex="-1" aria-labelledby="card${uniqueId}Label" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><img class="modalImage img-responsive modal-content" src="${image2}" alt="gif"></div></div>`;

                        // let card = `<div class="col-md-6 col-lg-4 column cardCol"><div class="card pointer"><div class="card-img-overlay cardTxt"><div class="txt"><h1 id="cardHeader">${header}</h1><p>${text}</p> </div></div><div class="ico-card" id="${uniqueId}"><img class="active cardImg card-img" src=" ${image2} "></div></div></div>`;
                        // let modal = `<div class="modal fade textDark ${uniqueId}" tabindex="-1" aria-labelledby="card${uniqueId}Label" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">${modalTitle}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img src="${image2}" alt="gif"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>`
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
                        }
                        $("#cardRow1, #cardRow2, #cardRow3, #cardRow4").on('mouseover', '.card', function() {

                            var $this = $(this);
                            $this.find(".ico-card").css({ "background-color": "black", "opacity": "0.1" });
                            var modalClass = $this.find(".ico-card").attr('id')
                            $this.click(function() {
                                $("." + modalClass).modal('show');
                            })

                        });
                        $("#cardRow1, #cardRow2, #cardRow3, #cardRow4").on('mouseout', '.card', function() {
                            var $this = $(this);
                            $this.find(".ico-card").css({ "background-color": "transparent", "opacity": "1" });
                        });

                    }
                },
                error: function() { // if any error come then 
                    console.log('There was a problem with the server.  Try again soon!');
                }
            });

        }

        const portfolioController = new ScrollMagic.Controller()
        // $(".animate").each(function() {
        //         new ScrollMagic.Scene({
        //                 triggerElement: this,
        //                 triggerHook: "onCenter", // show, when scrolled 10% into view
        //                 // duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
        //                 // offset: 50 // move trigger to center of element
        //             })
        //             .setClassToggle(".animate__animated", "animate__slideInLeft") // add class to reveal
        //             .addIndicators() // add indicators (requires plugin)
        //             .addTo(portfolioController);
        //           })
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



$('#workLink').html('<li class="nav-item text-center dropdown"><a class="nav-link dropdown-toggle active" href="#" id="portfolioDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">work</a><ul class="dropdown-menu" aria-labelledby="portfolioDropDown"><li><a class="dropdown-item" href="#panelOne">Web Development & Design</a></li><li><a class="dropdown-item" href="#panelTwo">Mockups & Design</a></li> <li><a class="dropdown-item" href="#panelThree">Logos & Branding</a></li><li><a class="dropdown-item" href="#panelFour">Digital Art</a></li></ul></li>')
// $('#workLink').html('<li class="nav-item text-center dropdown"><a class="nav-link dropdown-toggle active" href="#" id="portfolioDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">work</a><ul class="dropdown-menu" aria-labelledby="portfolioDropDown"><li><a class="dropdown-item" href="#panelOne">Web Development & Design</a></li><li><a class="dropdown-item" href="#panelTwo">Mockups & Design</a></li> <li><a class="dropdown-item" href="#panelThree">Logos & Branding</a></li><li><a class="dropdown-item" href="#panelFour">Digital Art</a></li></ul></li>')
    




    });