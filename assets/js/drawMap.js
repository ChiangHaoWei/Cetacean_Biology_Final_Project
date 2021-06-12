var width = 800,
  height = 600

var svg = d3
  .select('svg')
  // .attr("class", "svgback")
  .attr('width', width)
  .attr('height', height)

var projection = d3.geo.mercator().center([121, 24]).scale(6000)

var path = d3.geo.path().projection(projection)

d3.json('assets/js/taiwan_map.json', function (error, topology) {
  if (error) console.log(error)
  var g = svg.append('g')

  // 縣市/行政區界線
  d3.select('svg')
    .append('path')
    .datum(
      topojson.mesh(
        topology,
        topology.objects['COUNTY_MOI_1090820'],
        function (a, b) {
          return a !== b
        }
      )
    )
    .attr('d', path)
    .attr('class', 'subunit-boundary')

  d3.select('g')
    .selectAll('path')
    .data(
      topojson.feature(topology, topology.objects.COUNTY_MOI_1090820).features
    )
    .enter()
    .append('path')
    .attr('d', path)
    .attr({
      d: path,
      name: function (d) {
        return d.properties['C_Name']
      },
      fill: 'rgb(136, 164, 188)',
      stroke: '#fff',
      strokeDasharray: '5, 0',
      strokeLinejoin: 'round',
    })
})
