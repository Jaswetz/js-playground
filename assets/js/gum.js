window.onload = init;

var lastReportTime = 0;

function init() {
    setInterval(handleRefresh, 3000);
}

function handleRefresh() {
    var url = 'http://gumball.wickedlysmart.com/' +
                '?callback=updateSales' +
                '&lastreporttime=' + lastReportTime +
                '&random=' + (new Date()).getTime();

    var newScriptElement = document.createElement('script');
    newScriptElement.setAttribute('src', url);
    newScriptElement.setAttribute('id', 'jsonp');

    var oldScriptElement = document.getElementById('jsonp');
    var head = document.getElementsByTagName('head')[0];
    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    } else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}

function updateSales(sales) {
    var salesDiv = document.getElementById("sales");
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var li = document.createElement('li');
        li.setAttribute('class', 'saleItem');
        li.setAttribute("class", "description");
        li.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(li);
    }
    if (sales.length > 0) {
        lastReportTime = sales[sales.length-1].time;
    }
}