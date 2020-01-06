// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

/* global ZeroClipboard */

!function ($) {
  'use strict';

  $(function () {

    /*
    $.getJSON("./papers.json", function(json) {
      console.log(json); // this will show the info it in firebug console
      json.each( function() {
        console.log($this);
      });
    });
    */

    $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});



    // Scrollspy
    var $window = $(window)
    var $body   = $(document.body)

    // Config ZeroClipboard
    ZeroClipboard.config({
      moviePath: '../js/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () { 
      var buttonDiv=document.createElement('div'),
        buttonSpan=document.createElement('span');
      $(buttonDiv).addClass('zero-clipboard');
      $(buttonSpan).addClass('btn-clipboard').text('Copy');
      // $(buttonSpan).data('placement', 'right')
      //   .data('toggle', 'tooltip')
      //   .attr('title', 'Copy to clipboard')
      //   .tooltip();
      $(buttonDiv).append(buttonSpan);
      //zcClient.clip(buttonSpan);
      //var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(buttonDiv)
    })


    var zcClient = new ZeroClipboard($(".btn-clipboard"));
//    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))

    var htmlBridge = $('#global-zeroclipboard-html-bridge')
    htmlBridge
        .data('placement', 'right')
        .data('toggle', 'tooltip')
        .attr('title', 'Copy to clipboard')
        .tooltip();

    // Handlers for ZeroClipboard
    // zcClient.on('load', function () {
    //   htmlBridge
    //     .data('placement', 'right')
    //     .data('toggle', 'tooltip')
    //     .attr('title', 'Copy to clipboard')
    //     .tooltip()
    // })

    // // Copy to clipboard
    zcClient.on( 'ready', function(ev) {
      console.log("Dio cantante"); 
      zcClient.on( 'copy', function (event) {
        var clipboard = event.clipboardData;
        console.log("PORCO DIO");
        event.clipboardData.setData("text/plain", "PORCO DIO");
        // clipboard.setData( "text/plain", "Copy me!" );
        // clipboard.setData( "text/html", "<b>Copy me!</b>" );
        // clipboard.setData( "application/rtf", "{\\rtf1\\ansi\n{\\b Copy me!}}" );
      });
    });

    // zcClient.on('copy', function (client) {
    //   var highlight = $(this).parent().nextAll('.highlight').first()
    //   client.setText(highlight.text())
    // })

    // Notify copy success and reset tooltip title
    // zeroClipboard.on('complete', function () {
    //   htmlBridge
    //     .attr('title', 'Copied!')
    //     .tooltip('fixTitle')
    //     .tooltip('show')
    //     .attr('title', 'Copy to clipboard')
    //     .tooltip('fixTitle')
    // })

    // // Notify copy failure
    // zeroClipboard.on('noflash wrongflash', function () {
    //   htmlBridge
    //     .attr('title', 'Flash required')
    //     .tooltip('fixTitle')
    //     .tooltip('show')
    // })

  })

}(jQuery)