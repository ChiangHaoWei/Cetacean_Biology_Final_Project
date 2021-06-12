// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom

// append the svg object to the body of the page
var svg = d3
  .select('#my_dataviz')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

//Read the data
d3.csv(
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_IC.csv',
  function (data) {
    // Add X axis --> it is a date format
    var x = d3.scaleLinear().domain([1, 100]).range([0, width])
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 13]).range([height, 0])
    svg.append('g').call(d3.axisLeft(y))

    // This allows to find the closest X index of the mouse:
    var bisect = d3.bisector(function (d) {
      return d.x
    }).left

    // Create the circle that travels along the curve of chart
    var focus = svg
      .append('g')
      .append('circle')
      .style('fill', 'none')
      .attr('stroke', 'black')
      .attr('r', 8.5)
      .style('opacity', 0)

    // Create the text that travels along the curve of chart
    var focusText = svg
      .append('g')
      .append('text')
      .style('opacity', 0)
      .attr('text-anchor', 'left')
      .attr('alignment-baseline', 'middle')

    // Add the line
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .line()
          .x(function (d) {
            return x(d.x)
          })
          .y(function (d) {
            return y(d.y)
          })
      )

    // Create a rect on top of the svg area: this rectangle recovers mouse position
    svg
      .append('rect')
      .style('fill', 'none')
      .style('pointer-events', 'all')
      .attr('width', width)
      .attr('height', height)
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseout', mouseout)

    // What happens when the mouse move -> show the annotations at the right positions.
    function mouseover() {
      focus.style('opacity', 1)
      focusText.style('opacity', 1)
    }

    function mousemove() {
      // recover coordinate we need
      var x0 = x.invert(d3.mouse(this)[0])
      var i = bisect(data, x0, 1)
      selectedData = data[i]
      focus.attr('cx', x(selectedData.x)).attr('cy', y(selectedData.y))
      focusText
        .html('x:' + selectedData.x + '  -  ' + 'y:' + selectedData.y)
        .attr('x', x(selectedData.x) + 15)
        .attr('y', y(selectedData.y))
    }
    function mouseout() {
      focus.style('opacity', 0)
      focusText.style('opacity', 0)
    }
  }
)
