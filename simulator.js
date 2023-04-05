const log = console.log;

// set the heading
const title = document.querySelector('#title');
title.textContent = "Simulator";
const subtitle = document.querySelector('#subtitle');
subtitle.textContent = "-";

// define custom theme colors
var customTheme = {
  backgroundColor: "#151924",
  textColor: "#C3C2D5",
  gridColor: "#333333",
  upColor: "#00FF00",
  downColor: "#FF0000",
  buyMarkerColor: "#C3C2D5",
  sellMarkerColor: "#C3C2D5",
};

// setup chart
var chart = LightweightCharts.createChart(document.body, {
	width: 1200,
  height: 800,
	layout: {
    backgroundColor: customTheme.backgroundColor,
    textColor: customTheme.textColor
},
	grid: {
		vertLines: {
			color: customTheme.gridColor,
		},
		horzLines: {
			color: customTheme.gridColor,
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: customTheme.backgroundColor,
	},
	timeScale: {
		borderColor: customTheme.backgroundColor,
    timeVisible: true,
    secondsVisible: true
	},
  candlestick: {
    upColor: customTheme.upColor,
    downColor: customTheme.downColor,
  },
});

const candleSeries = chart.addCandlestickSeries({
  name: "Candles",
  pane: 0
})

const macdSeries = chart.addLineSeries({
  name: "MACD",
  color: '#2196F3', // BLUE
	lineWidth: 1,
  pane: 1
})

const signalSeries = chart.addLineSeries({
  name: "Signal",
	color: '#FC6C02',  // ORANGE
	lineWidth: 1,
  pane: 1
})

/**
 * WebSocket
 */
const socket = new WebSocket("ws://localhost:8081/Simulator");

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened');
});

socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed');
});

socket.onopen = event => {
  log("Socket is open")

  socket.onmessage = event => {

    if(event.data == "heartbeat") {
      socket.send("heartbeat-response");
    
    } else {
      const item = JSON.parse(event.data);
      //log(item);
      candleSeries.update({time: item.timestamp, open: item.candle.open, high: item.candle.high, low: item.candle.low, close: item.candle.close})
      macdSeries.update({time: item.timestamp, value: item.macd})
      signalSeries.update({time: item.timestamp, value: item.signal})
    }
  };
}
