const log = console.log;

// set the heading
const title = document.querySelector('#title');
title.textContent = "Simulator";
const subtitle = document.querySelector('#subtitle');
subtitle.textContent = "-";

// Define custom theme colors
var customTheme = {
  backgroundColor: "#151924",
  textColor: "#C3C2D5",
  gridColor: "#333333",
  upColor: "#00FF00",
  downColor: "#FF0000",
  buyMarkerColor: "#C3C2D5",
  sellMarkerColor: "#C3C2D5",
};

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

candleSeries.setData([
	{ time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
	{ time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
	{ time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
	{ time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
	{ time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
	{ time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
	{ time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
	{ time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
	{ time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
	{ time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
	{ time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
	{ time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
	{ time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
	{ time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
	{ time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
	{ time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
	{ time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
	{ time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
	{ time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
	{ time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
	{ time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
	{ time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 },
	{ time: '2018-11-20', open: 169.25, high: 172.00, low: 167.00, close: 169.05 },
	{ time: '2018-11-21', open: 170.00, high: 170.93, low: 169.15, close: 169.30 },
	{ time: '2018-11-23', open: 169.39, high: 170.33, low: 168.47, close: 168.85 },
	{ time: '2018-11-26', open: 170.20, high: 172.39, low: 168.87, close: 169.82 },
	{ time: '2018-11-27', open: 169.11, high: 173.38, low: 168.82, close: 173.22 },
	{ time: '2018-11-28', open: 172.91, high: 177.65, low: 170.62, close: 177.43 },
	{ time: '2018-11-29', open: 176.80, high: 177.27, low: 174.92, close: 175.66 },
	{ time: '2018-11-30', open: 175.75, high: 180.37, low: 175.11, close: 180.32 },
	{ time: '2018-12-03', open: 183.29, high: 183.50, low: 179.35, close: 181.74 },
	{ time: '2018-12-04', open: 181.06, high: 182.23, low: 174.55, close: 175.30 },
	{ time: '2018-12-06', open: 173.50, high: 176.04, low: 170.46, close: 175.96 },
	{ time: '2018-12-07', open: 175.35, high: 178.36, low: 172.24, close: 172.79 },
	{ time: '2018-12-10', open: 173.39, high: 173.99, low: 167.73, close: 171.69 },
	{ time: '2018-12-11', open: 174.30, high: 175.60, low: 171.24, close: 172.21 },
	{ time: '2018-12-12', open: 173.75, high: 176.87, low: 172.81, close: 174.21 },
	{ time: '2018-12-13', open: 174.31, high: 174.91, low: 172.07, close: 173.87 },
	{ time: '2018-12-14', open: 172.98, high: 175.14, low: 171.95, close: 172.29 },
	{ time: '2018-12-17', open: 171.51, high: 171.99, low: 166.93, close: 167.97 },
	{ time: '2018-12-18', open: 168.90, high: 171.95, low: 168.50, close: 170.04 },
	{ time: '2018-12-19', open: 170.92, high: 174.95, low: 166.77, close: 167.56 },
	{ time: '2018-12-20', open: 166.28, high: 167.31, low: 162.23, close: 164.16 },
	{ time: '2018-12-21', open: 162.81, high: 167.96, low: 160.17, close: 160.48 },
	{ time: '2018-12-24', open: 160.16, high: 161.40, low: 158.09, close: 158.14 },
	{ time: '2018-12-26', open: 159.46, high: 168.28, low: 159.44, close: 168.28 },
	{ time: '2018-12-27', open: 166.44, high: 170.46, low: 163.36, close: 170.32 },
	{ time: '2018-12-28', open: 171.22, high: 173.12, low: 168.60, close: 170.22 },
	{ time: '2018-12-31', open: 171.47, high: 173.24, low: 170.65, close: 171.82 },
	{ time: '2019-01-02', open: 169.71, high: 173.18, low: 169.05, close: 172.41 },
	{ time: '2019-01-03', open: 171.84, high: 171.84, low: 168.21, close: 168.61 },
	{ time: '2019-01-04', open: 170.18, high: 174.74, low: 169.52, close: 173.62 },
	{ time: '2019-01-07', open: 173.83, high: 178.18, low: 173.83, close: 177.04 },
	{ time: '2019-01-08', open: 178.57, high: 179.59, low: 175.61, close: 177.89 },
	{ time: '2019-01-09', open: 177.87, high: 181.27, low: 177.10, close: 179.73 },
	{ time: '2019-01-10', open: 178.03, high: 179.24, low: 176.34, close: 179.06 },
	{ time: '2019-01-11', open: 177.93, high: 180.26, low: 177.12, close: 179.41 },
	{ time: '2019-01-14', open: 177.59, high: 179.23, low: 176.90, close: 178.81 },
	{ time: '2019-01-15', open: 176.08, high: 177.82, low: 175.20, close: 176.47 },
	{ time: '2019-01-16', open: 177.09, high: 177.93, low: 175.86, close: 177.04 },
	{ time: '2019-01-17', open: 174.01, high: 175.46, low: 172.00, close: 174.87 },
	{ time: '2019-01-18', open: 176.98, high: 180.04, low: 176.18, close: 179.58 },
	{ time: '2019-01-22', open: 177.49, high: 178.60, low: 175.36, close: 177.11 },
	{ time: '2019-01-23', open: 176.59, high: 178.06, low: 174.53, close: 176.89 },
	{ time: '2019-01-24', open: 177.00, high: 177.53, low: 175.30, close: 177.29 },
	{ time: '2019-01-25', open: 179.78, high: 180.87, low: 178.61, close: 180.40 },
	{ time: '2019-01-28', open: 178.97, high: 179.99, low: 177.41, close: 179.83 },
	{ time: '2019-01-29', open: 178.96, high: 180.15, low: 178.09, close: 179.69 },
	{ time: '2019-01-30', open: 180.47, high: 184.20, low: 179.78, close: 182.18 },
	{ time: '2019-01-31', open: 181.50, high: 184.67, low: 181.06, close: 183.53 },
	{ time: '2019-02-01', open: 184.03, high: 185.15, low: 182.83, close: 184.37 },
	{ time: '2019-02-04', open: 184.30, high: 186.43, low: 183.84, close: 186.43 },
	{ time: '2019-02-05', open: 186.89, high: 186.99, low: 184.69, close: 186.39 },
	{ time: '2019-02-06', open: 186.69, high: 186.69, low: 184.06, close: 184.72 },
	{ time: '2019-02-07', open: 183.74, high: 184.92, low: 182.45, close: 184.07 },
	{ time: '2019-02-08', open: 183.05, high: 184.58, low: 182.72, close: 184.54 },
	{ time: '2019-02-11', open: 185.00, high: 185.42, low: 182.75, close: 182.92 },
	{ time: '2019-02-12', open: 183.84, high: 186.40, low: 183.52, close: 185.52 },
	{ time: '2019-02-13', open: 186.30, high: 188.68, low: 185.92, close: 188.41 },
	{ time: '2019-02-14', open: 187.50, high: 188.93, low: 186.00, close: 187.71 },
	{ time: '2019-02-15', open: 189.87, high: 192.62, low: 189.05, close: 192.39 },
	{ time: '2019-02-19', open: 191.71, high: 193.19, low: 191.28, close: 192.33 },
	{ time: '2019-02-20', open: 192.39, high: 192.40, low: 191.11, close: 191.85 },
	{ time: '2019-02-21', open: 191.85, high: 192.37, low: 190.61, close: 191.82 },
	{ time: '2019-02-22', open: 191.69, high: 192.54, low: 191.62, close: 192.39 },
	{ time: '2019-02-25', open: 192.75, high: 193.42, low: 189.96, close: 189.98 },
	{ time: '2019-02-26', open: 185.59, high: 188.47, low: 182.80, close: 188.30 },
	{ time: '2019-02-27', open: 187.90, high: 188.50, low: 183.21, close: 183.67 },
	{ time: '2019-02-28', open: 183.60, high: 185.19, low: 183.11, close: 185.14 },
	{ time: '2019-03-01', open: 185.82, high: 186.56, low: 182.86, close: 185.17 },
	{ time: '2019-03-04', open: 186.20, high: 186.24, low: 182.10, close: 183.81 },
	{ time: '2019-03-05', open: 184.24, high: 185.12, low: 183.25, close: 184.00 },
	{ time: '2019-03-06', open: 184.53, high: 184.97, low: 183.84, close: 184.45 },
	{ time: '2019-03-07', open: 184.39, high: 184.62, low: 181.58, close: 182.51 },
	{ time: '2019-03-08', open: 181.49, high: 181.91, low: 179.52, close: 181.23 },
	{ time: '2019-03-11', open: 182.00, high: 183.20, low: 181.20, close: 182.44 },
	{ time: '2019-03-12', open: 183.43, high: 184.27, low: 182.33, close: 184.00 },
	{ time: '2019-03-13', open: 183.24, high: 183.78, low: 181.08, close: 181.14 },
	{ time: '2019-03-14', open: 181.28, high: 181.74, low: 180.50, close: 181.61 },
	{ time: '2019-03-15', open: 182.30, high: 182.49, low: 179.57, close: 182.23 },
	{ time: '2019-03-18', open: 182.53, high: 183.48, low: 182.33, close: 183.42 },
	{ time: '2019-03-19', open: 184.19, high: 185.82, low: 183.48, close: 184.13 },
	{ time: '2019-03-20', open: 184.30, high: 187.12, low: 183.43, close: 186.10 },
	{ time: '2019-03-21', open: 185.50, high: 190.00, low: 185.50, close: 189.97 },
	{ time: '2019-03-22', open: 189.31, high: 192.05, low: 188.67, close: 188.75 },
	{ time: '2019-03-25', open: 188.75, high: 191.71, low: 188.51, close: 189.68 },
	{ time: '2019-03-26', open: 190.69, high: 192.19, low: 188.74, close: 189.34 },
	{ time: '2019-03-27', open: 189.65, high: 191.61, low: 188.39, close: 189.25 },
	{ time: '2019-03-28', open: 189.91, high: 191.40, low: 189.16, close: 190.06 },
	{ time: '2019-03-29', open: 190.85, high: 192.04, low: 190.14, close: 191.89 },
	{ time: '2019-04-01', open: 192.99, high: 195.90, low: 192.85, close: 195.64 },
	{ time: '2019-04-02', open: 195.50, high: 195.50, low: 194.01, close: 194.31 },
	{ time: '2019-04-03', open: 194.98, high: 198.78, low: 194.11, close: 198.61 },
	{ time: '2019-04-04', open: 199.00, high: 200.49, low: 198.02, close: 200.45 },
	{ time: '2019-04-05', open: 200.86, high: 203.13, low: 200.61, close: 202.06 },
	{ time: '2019-04-08', open: 201.37, high: 203.79, low: 201.24, close: 203.55 },
	{ time: '2019-04-09', open: 202.26, high: 202.71, low: 200.46, close: 200.90 },
	{ time: '2019-04-10', open: 201.26, high: 201.60, low: 198.02, close: 199.43 },
	{ time: '2019-04-11', open: 199.90, high: 201.50, low: 199.03, close: 201.48 },
	{ time: '2019-04-12', open: 202.13, high: 204.26, low: 202.13, close: 203.85 },
	{ time: '2019-04-15', open: 204.16, high: 205.14, low: 203.40, close: 204.86 },
	{ time: '2019-04-16', open: 205.25, high: 205.99, low: 204.29, close: 204.47 },
	{ time: '2019-04-17', open: 205.34, high: 206.84, low: 205.32, close: 206.55 },
	{ time: '2019-04-18', open: 206.02, high: 207.78, low: 205.10, close: 205.66 },
	{ time: '2019-04-22', open: 204.11, high: 206.25, low: 204.00, close: 204.78 },
	{ time: '2019-04-23', open: 205.14, high: 207.33, low: 203.43, close: 206.05 },
	{ time: '2019-04-24', open: 206.16, high: 208.29, low: 205.54, close: 206.72 },
	{ time: '2019-04-25', open: 206.01, high: 207.72, low: 205.06, close: 206.50 },
	{ time: '2019-04-26', open: 205.88, high: 206.14, low: 203.34, close: 203.61 },
	{ time: '2019-04-29', open: 203.31, high: 203.80, low: 200.34, close: 202.16 },
	{ time: '2019-04-30', open: 201.55, high: 203.75, low: 200.79, close: 203.70 },
	{ time: '2019-05-01', open: 203.20, high: 203.52, low: 198.66, close: 198.80 },
	{ time: '2019-05-02', open: 199.30, high: 201.06, low: 198.80, close: 201.01 },
	{ time: '2019-05-03', open: 202.00, high: 202.31, low: 200.32, close: 200.56 },
	{ time: '2019-05-06', open: 198.74, high: 199.93, low: 198.31, close: 199.63 },
	{ time: '2019-05-07', open: 196.75, high: 197.65, low: 192.96, close: 194.77 },
	{ time: '2019-05-08', open: 194.49, high: 196.61, low: 193.68, close: 195.17 },
	{ time: '2019-05-09', open: 193.31, high: 195.08, low: 191.59, close: 194.58 },
	{ time: '2019-05-10', open: 193.21, high: 195.49, low: 190.01, close: 194.58 },
	{ time: '2019-05-13', open: 191.00, high: 191.66, low: 189.14, close: 190.34 },
	{ time: '2019-05-14', open: 190.50, high: 192.76, low: 190.01, close: 191.62 },
	{ time: '2019-05-15', open: 190.81, high: 192.81, low: 190.27, close: 191.76 },
	{ time: '2019-05-16', open: 192.47, high: 194.96, low: 192.20, close: 192.38 },
	{ time: '2019-05-17', open: 190.86, high: 194.50, low: 190.75, close: 192.58 },
	{ time: '2019-05-20', open: 191.13, high: 192.86, low: 190.61, close: 190.95 },
	{ time: '2019-05-21', open: 187.13, high: 192.52, low: 186.34, close: 191.45 },
	{ time: '2019-05-22', open: 190.49, high: 192.22, low: 188.05, close: 188.91 },
	{ time: '2019-05-23', open: 188.45, high: 192.54, low: 186.27, close: 192.00 },
	{ time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 },
]);

const lineSeries = chart.addLineSeries({
	color: 'rgba(4, 111, 232, 1)',
	lineWidth: 2,
  pane: 1
})

lineSeries.setData([{ time: {year: 2018, month: 9, day: 22}, value: 25.531816900940186 },
{ time: {year: 2018, month: 9, day: 23}, value: 26.350850429478125 },
{ time: {year: 2018, month: 9, day: 24}, value: 25.05218443850655 },
{ time: {year: 2018, month: 9, day: 25}, value: 25.41022485894306 },
{ time: {year: 2018, month: 9, day: 26}, value: 25.134847363259958 },
{ time: {year: 2018, month: 9, day: 27}, value: 24.239250761300525 },
{ time: {year: 2018, month: 9, day: 28}, value: 28.8673009313941 },
{ time: {year: 2018, month: 9, day: 29}, value: 27.028082380884264 },
{ time: {year: 2018, month: 9, day: 30}, value: 27.181577793470662 },
{ time: {year: 2018, month: 10, day: 1}, value: 28.658957209998505 },
{ time: {year: 2018, month: 10, day: 2}, value: 30.418392247817536 },
{ time: {year: 2018, month: 10, day: 3}, value: 26.41825183552505 },
{ time: {year: 2018, month: 10, day: 4}, value: 30.0951233353539 },
{ time: {year: 2018, month: 10, day: 5}, value: 30.30985059775389 },
{ time: {year: 2018, month: 10, day: 6}, value: 30.71612555943148 },
{ time: {year: 2018, month: 10, day: 7}, value: 28.222424591003268 },
{ time: {year: 2018, month: 10, day: 8}, value: 31.01149570947896 },
{ time: {year: 2018, month: 10, day: 9}, value: 30.390225881550307 },
{ time: {year: 2018, month: 10, day: 10}, value: 29.451733557312163 },
{ time: {year: 2018, month: 10, day: 11}, value: 34.14376900459634 },
{ time: {year: 2018, month: 10, day: 12}, value: 30.223333215683407 },
{ time: {year: 2018, month: 10, day: 13}, value: 35.1548736041708 },
{ time: {year: 2018, month: 10, day: 14}, value: 37.795223779011096 },
{ time: {year: 2018, month: 10, day: 15}, value: 38.95966228546306 },
{ time: {year: 2018, month: 10, day: 16}, value: 35.59132526195566 },
{ time: {year: 2018, month: 10, day: 17}, value: 38.42249768195307 },
{ time: {year: 2018, month: 10, day: 18}, value: 40.82520015585623 },
{ time: {year: 2018, month: 10, day: 19}, value: 37.401446370157814 },
{ time: {year: 2018, month: 10, day: 20}, value: 44.14728329801845 },
{ time: {year: 2018, month: 10, day: 21}, value: 43.908512951087765 },
{ time: {year: 2018, month: 10, day: 22}, value: 47.139711966410914 },
{ time: {year: 2018, month: 10, day: 23}, value: 43.78495537329606 },
{ time: {year: 2018, month: 10, day: 24}, value: 46.37910782721347 },
{ time: {year: 2018, month: 10, day: 25}, value: 48.280192310089234 },
{ time: {year: 2018, month: 10, day: 26}, value: 49.63767420501933 },
{ time: {year: 2018, month: 10, day: 27}, value: 43.05752682224708 },
{ time: {year: 2018, month: 10, day: 28}, value: 48.32708061157758 },
{ time: {year: 2018, month: 10, day: 29}, value: 53.39600337663517 },
{ time: {year: 2018, month: 10, day: 30}, value: 46.711006266435355 },
{ time: {year: 2018, month: 10, day: 31}, value: 54.13809826985657 },
{ time: {year: 2018, month: 11, day: 1}, value: 55.79021790616995 },
{ time: {year: 2018, month: 11, day: 2}, value: 49.2873885580548 },
{ time: {year: 2018, month: 11, day: 3}, value: 56.97009522871737 },
{ time: {year: 2018, month: 11, day: 4}, value: 50.823930530973975 },
{ time: {year: 2018, month: 11, day: 5}, value: 54.960060077375076 },
{ time: {year: 2018, month: 11, day: 6}, value: 62.0222568413422 },
{ time: {year: 2018, month: 11, day: 7}, value: 58.20081640960216 },
{ time: {year: 2018, month: 11, day: 8}, value: 65.13004590769961 },
{ time: {year: 2018, month: 11, day: 9}, value: 57.78891076252559 },
{ time: {year: 2018, month: 11, day: 10}, value: 58.792896124952186 },
{ time: {year: 2018, month: 11, day: 11}, value: 61.87890147945707 },
{ time: {year: 2018, month: 11, day: 12}, value: 60.93156560716248 },
{ time: {year: 2018, month: 11, day: 13}, value: 57.85928164082374 },
{ time: {year: 2018, month: 11, day: 14}, value: 70.95139577968187 },
{ time: {year: 2018, month: 11, day: 15}, value: 71.59735270974251 },
{ time: {year: 2018, month: 11, day: 16}, value: 68.6730845432055 },
{ time: {year: 2018, month: 11, day: 17}, value: 70.1298800651962 },
{ time: {year: 2018, month: 11, day: 18}, value: 68.82963709012753 },
{ time: {year: 2018, month: 11, day: 19}, value: 70.66316240517193 },
{ time: {year: 2018, month: 11, day: 20}, value: 67.83320577283186 },
{ time: {year: 2018, month: 11, day: 21}, value: 75.08486799785067 },
{ time: {year: 2018, month: 11, day: 22}, value: 72.87979342888752 },
{ time: {year: 2018, month: 11, day: 23}, value: 78.84973566116827 },
{ time: {year: 2018, month: 11, day: 24}, value: 77.59573370643601 },
{ time: {year: 2018, month: 11, day: 25}, value: 74.74726921909757 },
{ time: {year: 2018, month: 11, day: 26}, value: 69.68128245039887 },
{ time: {year: 2018, month: 11, day: 27}, value: 84.2489916330028 },
{ time: {year: 2018, month: 11, day: 28}, value: 85.49947753269504 },
{ time: {year: 2018, month: 11, day: 29}, value: 79.8486264148003 },
{ time: {year: 2018, month: 11, day: 30}, value: 87.69287202402485 },
{ time: {year: 2018, month: 12, day: 1}, value: 78.01690218289475 },
{ time: {year: 2018, month: 12, day: 2}, value: 90.03789034980372 },
{ time: {year: 2018, month: 12, day: 3}, value: 80.8840602849401 },
{ time: {year: 2018, month: 12, day: 4}, value: 76.88131503723805 },
{ time: {year: 2018, month: 12, day: 5}, value: 80.31060219295262 },
{ time: {year: 2018, month: 12, day: 6}, value: 93.94619117220051 },
{ time: {year: 2018, month: 12, day: 7}, value: 94.87133202008548 },
{ time: {year: 2018, month: 12, day: 8}, value: 82.60328626838404 },
{ time: {year: 2018, month: 12, day: 9}, value: 97.16768398118845 },
{ time: {year: 2018, month: 12, day: 10}, value: 86.28219316727935 },
{ time: {year: 2018, month: 12, day: 11}, value: 88.98768390749808 },
{ time: {year: 2018, month: 12, day: 12}, value: 86.9799632094888 },
{ time: {year: 2018, month: 12, day: 13}, value: 94.84612878449812 },
{ time: {year: 2018, month: 12, day: 14}, value: 102.1160216124386 },
{ time: {year: 2018, month: 12, day: 15}, value: 87.0646295567293 },
{ time: {year: 2018, month: 12, day: 16}, value: 88.48802912330535 },
{ time: {year: 2018, month: 12, day: 17}, value: 89.68490260440238 },
{ time: {year: 2018, month: 12, day: 18}, value: 86.66224375818467 },
{ time: {year: 2018, month: 12, day: 19}, value: 88.05916917094234 },
{ time: {year: 2018, month: 12, day: 20}, value: 78.96513176162487 },
{ time: {year: 2018, month: 12, day: 21}, value: 90.54239307317953 },
{ time: {year: 2018, month: 12, day: 22}, value: 92.40550159209458 },
{ time: {year: 2018, month: 12, day: 23}, value: 82.47365747958841 },
{ time: {year: 2018, month: 12, day: 24}, value: 91.55327647717618 },
{ time: {year: 2018, month: 12, day: 25}, value: 89.34790162747024 },
{ time: {year: 2018, month: 12, day: 26}, value: 85.68927849920716 },
{ time: {year: 2018, month: 12, day: 27}, value: 85.86795553966918 },
{ time: {year: 2018, month: 12, day: 28}, value: 90.55358282944198 },
{ time: {year: 2018, month: 12, day: 29}, value: 91.28939932554621 },
{ time: {year: 2018, month: 12, day: 30}, value: 100.90495261248472 },
{ time: {year: 2018, month: 12, day: 31}, value: 98.99348823473713 }]);


/*

const priceSeries = chart.addLineSeries({
	priceScaleId: 'right',
  color: '#2862FF',
	lineWidth: 3,
  name: "Last Traded Price",
  pane: 0
})

const bestBidSeries = chart.addLineSeries({
	priceScaleId: 'right',
  color: 'rgba(0, 255, 0, 1)',
	lineWidth: 2,
  pane: 0
})

const bestAskSeries = chart.addLineSeries({
	priceScaleId: 'right',
  color: 'rgba(255, 0, 0, 1)',
	lineWidth: 2,
  pane: 0
})

const midPriceSeries = chart.addLineSeries({
	priceScaleId: 'right',
  color: '#C3C2D5',
	lineWidth: 1,
  lineStyle: LightweightCharts.LineStyle.Dotted,
  pane: 0
})

const macdSeries = chart.addLineSeries({
  priceScaleId: 'left',
	color: '#2196F3',
	lineWidth: 1,
  priceLineVisible: false,
  name: "MACD",
  pane: 1
})

const signalSeries = chart.addLineSeries({
  priceScaleId: 'left',
	color: '#FC6C02',
	lineWidth: 1,
  priceLineVisible: false,
  name: "Signal",
  pane: 1
})
	
var markers = []
priceSeries.setMarkers(markers);

const strategyId = "MACDStrategy"
const strategyParamString = "BTC-USD/12/26/12"
const strategyParamTitle = strategyParamString.replace(new RegExp("/", 'g'), ", ")
const strategyURL = strategyId + "/" + strategyParamString

// set the heading
const title = document.querySelector('#title');
title.textContent = strategyId;
const subtitle = document.querySelector('#subtitle');
subtitle.textContent = strategyParamTitle;

const socket = new WebSocket("ws://localhost:8081/" + strategyURL);

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened');
});

// socket.addEventListener('message', (event) => {
//   console.log(`Received message: ${event.data}`);
// });

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
      
      log(item);
      candleSeries.update({time: item.timestamp, open: item.open, high: item.high, low: item.low, close: item.close})
      // priceSeries.update({time: item.timeStamp, value: item.marketData.price});
      // bestBidSeries.update({time: item.timeStamp, value: item.marketData.bestBid})
      // bestAskSeries.update({time: item.timeStamp, value: item.marketData.bestAsk})
      // midPriceSeries.update({time: item.timeStamp, value: item.marketData.midPrice})
      // macdSeries.update({time: item.timeStamp, value: item.marketData.macd});
      // signalSeries.update({time: item.timeStamp, value: item.marketData.signal});

      // const subtitle = document.querySelector('#subtitle');
      // subtitle.textContent = item.marketData.bestAsk - item.marketData.bestBid;

      // // TODO what if multiple order?
      // if(item.orders.length > 0) {
      //   const order = item.orders[0];
      //   log("Adding marker at " + item.timeStamp + " for order " + order)

      //   if(order.side == "BUY") {
      //     markers.push({ time: item.timeStamp, position: 'belowBar', color: customTheme.buyMarkerColor, shape: 'arrowUp', text: 'Buy @ ' + order.price });
      //   } else {
      //     markers.push({ time: item.timeStamp, position: 'aboveBar', color: customTheme.sellMarkerColor, shape: 'arrowDown', text: 'Sell @ ' + order.price });
      //   }
        
      //   midPriceSeries.setMarkers(markers);
      // }
    }
  };
}

*/