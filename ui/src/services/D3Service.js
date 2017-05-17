/* eslint-disable no-param-reassign */
import * as d3 from 'd3'
import HttpService from './HttpService'

class D3Service {
  constructor(selector, width, height, styles) {
    this.selector = selector
    this.width = width
    this.height = height
    this.styles = styles
  }

  getGraph(bookId) {
    HttpService.fetch(`/api/transition/links?bookId=${bookId}`)
      .then(response => response.json()
        .then(data => this.generateGraph(data)))
  }

  generateGraph(data) {
    if (d3.select('svg')) d3.select('svg').remove()

    const svg = d3.select(this.selector)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)

    svg.append('svg:defs').append('svg:marker')
      .attr('id', 'arrow')
      .attr('class', this.styles.arrow)
      .attr('refX', 14)
      .attr('refY', 0)
      .attr('markerWidth', 4)
      .attr('markerHeight', 4)
      .attr('orient', 'auto')
      .attr('viewBox', '0 -5 10 10')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('class', 'arrowHead')

    const gLinks = svg.append('g')
      .attr('class', this.styles.links)
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('path')
      .attr('marker-end', 'url(#arrow)')

    const gNodes = svg.append('g')
      .attr('class', this.styles.nodes)
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('g')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))

    gNodes
      .append('circle')
      .attr('class', this.styles.circle)
      .attr('r', 8)

    gNodes
      .append('text')
      .attr('class', this.styles.text)
      .attr('x', 15)
      .attr('dy', '.35em')
      .text(d => d.id)

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink().id(d => d.id).distance(100).strength(1))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .on('tick', ticked)

    simulation.force('link').links(data.links)

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    function ticked() {
      gLinks
        .attr('d', (d) => {
          const dx = d.target.x - d.source.x
          const dy = d.target.y - d.source.y
          const dr = Math.sqrt(dx * dx + dy * dy)
          return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`
        })

      gNodes
        .attr('transform', d => `translate(${d.x},${d.y})`)
    }
  }
}

export default D3Service
