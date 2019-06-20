$(document).ready(function() {
  var isMobile = $(window).width() < 600;

  var books = {
    "Travel India": {
      author: "Jeyamohan",
      amazonLink: "https://www.amazon.in/dp/B01N7W3IQN/",
      goodreadsLink: "https://www.goodreads.com/book/show/34095194-india-payanam",
      index: 0
    },
    "Kardhungla: Road trip from Chennai to Ladhak": {
      author: "Kokila Babu",
      amazonLink: "https://www.amazon.in/gp/product/B07KMB9NNB/",
      goodreadsLink: "https://www.goodreads.com/book/show/43182701-kardhungla",
      index: 1
    },
    "Jupiter's Travels": {
      author: "Ted Simon",
      amazonLink: "https://www.amazon.in/gp/product/B002RI92RU/",
      goodreadsLink: "https://www.goodreads.com/book/show/19013591-jupiter-s-travels",
      index: 2
    }
  };

  var mapStyles = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#7aa37b"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          weight: "0.40"
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          lightness: "28"
        },
        {
          weight: "0.20"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#6b8663"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          visibility: "on"
        },
        {
          lightness: "44"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.icon",
      stylers: [
        {
          lightness: "48"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          lightness: "64"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          color: "#84afa3"
        },
        {
          lightness: 52
        }
      ]
    }
  ];

  var colors = [
    "rgb(234,172, 206)",
    "rgb(190, 185, 219)",
    "rgb(163, 119, 198)",
    "rgb(81, 86, 142)",
    "rgb(102, 166, 204)",
    "rgb(63, 195, 209)",
    "rgb(86, 158, 149)",
    "rgb(122, 183, 105)",
    "rgb(221, 192, 23)",
    "rgb(255, 181, 90)",
    "rgb(253, 127, 111)",
    "rgb(204, 68, 68)"
  ];
  var ds;
  var map;
  var clickInfoWindow = null,
    mouseoverInfoWindow = null;
  var features = [];

  function drawLegend() {
    var $legendBooks = $("#legendBooks");
    var frag = "";
    _.each(books, function(book, title) {
      frag += '<div class="legendBook" data-index="' + book.index + '">';
      frag += '<div class="legendBookColor" style="background-color: ' + colors[book.index] + '"></div>';
      frag += '<div class="legendBookTitle">' + title + "</div>";
      frag += "</div>";
    });
    $legendBooks.html(frag);
  }

  function drawMobileLegend() {
    var $legendBooks = $("#legendBooksMobile");
    var frag = "";
    frag += '<option value="all">Select a title</option>';
    _.each(books, function(book, title) {
      frag += '<option value="' + book.index + '">' + title + " &mdash; <em>" + books[title].author + "</em></option>";
    });
    $legendBooks.find("select").html(frag);
  }

  function getInfoWindowContent(row) {
    var place = row.place;
    var spot = row.spot;
    var combinedPlace = spot === place || spot === "" ? place : spot + ", " + place;
    combinedPlace = combinedPlace + ", " + row.state;
    var content = '<div class="infoWindowContent"><div class="bookPlace">' + combinedPlace + "</div>";
    content += '<div class="bookTitle">' + row.book + "</div>";
    content += '<div class="bookAuthor">by ' + books[row.book].author + "</div>";
    if (!!row.sentence) {
      content += '<div class="bookQuote">"' + row.sentence + '"</div>';
    }
    content +=
      '<div class="bookLink">Read reviews on <a target="_blank" href="' +
      books[row.book].goodreadsLink +
      '">Goodreads</a></div></div>';
    content +=
      '<div class="bookLink">Buy on <a target="_blank" href="' +
      books[row.book].amazonLink +
      '">Amazon</a></div></div>';
    return content;
  }

  function markerMouseoverHandler(e) {
    var marker = this;
    var row = this.row;
    if (mouseoverInfoWindow) {
      mouseoverInfoWindow.close();
    }
    mouseoverInfoWindow = new google.maps.InfoWindow({
      content: getInfoWindowContent(row),
      maxWidth: 300
    });
    mouseoverInfoWindow.open(marker.map, marker);
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }

  function markerClickHandler(e) {
    var marker = this;
    var row = this.row;
    if (clickInfoWindow) {
      clickInfoWindow.close();
    }
    clickInfoWindow = new google.maps.InfoWindow({
      content: getInfoWindowContent(row)
    });
    clickInfoWindow.open(marker.map, marker);
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }

  function drawMap(data) {
    var mapOptions = {
      styles: mapStyles,
      center: new google.maps.LatLng(23, 78),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: isMobile ? false : true,
      streetViewControl: isMobile ? false : true,
      mapTypeControl: isMobile ? false : true,
      zoom: isMobile ? 5 : 5
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var icons = {};
    var iconSize = new google.maps.Size(8, 8);
    var lastBook = null;
    var lastPoint = null;

    ds.each(function(row) {
      if (!+row.lat) {
        return;
      }
      var pos = new google.maps.LatLng(+row.lat, +row.lon);

      var marker = new google.maps.Marker({
        //circleSymbol,
        icon: {
          scaledSize: iconSize,
          url: "icons/" + row.bookIndex + ".svg"
        },
        map: map,
        position: pos
      });
      features.push(marker);
      if (lastBook == row.bookIndex) {
        var line = new google.maps.Polyline({
          path: [lastPoint, pos],
          strokeColor: colors[row.bookIndex],
          map: map
        });
        line.row = row;
        features.push(line);
      }
      lastPoint = pos;
      lastBook = row.bookIndex;

      marker.row = row;
      google.maps.event.addListener(marker, "click", markerClickHandler);
      google.maps.event.addListener(map, "click", function() {
        if (!clickInfoWindow) {
          return;
        }
        clickInfoWindow.close();
        clickInfoWindow = null;
      });
      // google.maps.event.addListener(marker, 'mouseover', markerMouseoverHandler);
      google.maps.event.addListener(marker, "mouseout", function() {
        if (!mouseoverInfoWindow) {
          return;
        }
        mouseoverInfoWindow.close();
        mouseoverInfoWindow = null;
      });
    });
  }
  ds = new Miso.Dataset({
    url: "./data/places.csv",
    delimiter: ",",
    columns: [{ name: "lat", type: "string" }, { name: "lon", type: "string" }]
  });
  ds.fetch({
    success: drawMap
  });
  drawLegend();

  drawMobileLegend();

  $("body").on("click", ".legendBook", function() {
    var $this = $(this);
    var index = $this.data("index");
    $(".legendBook").removeClass("selected");
    $this.addClass("selected");
    var bounds = new google.maps.LatLngBounds();
    _.each(features, function(feature) {
      if (feature.row.bookIndex == index) {
        feature.setMap(map);
        if (feature.anchorPoint !== undefined) {
          bounds.extend(feature.getPosition());
        }
      } else {
        feature.setMap(null);
      }
    });
    map.fitBounds(bounds);
  });

  $("#legendShowAll").click(function() {
    $(".legendBook").removeClass("selected");
    var bounds = new google.maps.LatLngBounds();
    _.each(features, function(feature) {
      feature.setMap(map);
      if (feature.anchorPoint !== undefined) {
        bounds.extend(feature.getPosition());
      }
    });
    map.fitBounds(bounds);
  });

  $("#legendBooksMobile select").on("change", function() {
    var index = this.value;
    var bounds = new google.maps.LatLngBounds();
    if (index == "all") {
      _.each(features, function(feature) {
        feature.setMap(map);

        // hack to recognize a marker
        if (feature.anchorPoint !== undefined) {
          bounds.extend(feature.getPosition());
        }
      });
    } else {
      _.each(features, function(feature) {
        if (feature.row.bookIndex == index) {
          feature.setMap(map);

          // hack to recognize a marker
          if (feature.anchorPoint !== undefined) {
            bounds.extend(feature.getPosition());
          }
        } else {
          feature.setMap(null);
        }
      });
    }
    map.fitBounds(bounds);
  });

  // select first book after mobile map is loaded fully
  // if ($('#legendBooksMobile').is(':visible')) {
  //   console.info('map is visible');
  //   google.maps.event.addListenerOnce(map, 'idle', function(){

  //     console.info('map is ready');
  //     $('#legendBooksMobile select').val(0).trigger('change');
  //   });
  // }
});
