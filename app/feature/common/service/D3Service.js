myVirtualStoryBookApp.service("D3Service", [
    function(){
        
        var service = {};
        
        service.nodes = {};
        service.width = "500";
        service.height = "500";
        service.links = [];
    
        service.clearLinks = function(){
            service.links = [];
        }
    
        service.addLink = function(source, target, type){
            service.links.push({
                source : source,
                target : target,
                type : "goingTo"
            })
        }
    
        service.init = function(selector, width, height){
            
            service.width = width;
            service.height = height;
            
            // Compute the distinct nodes from the links.
            service.links.forEach(function(link) {
              link.source = service.nodes[link.source] || (service.nodes[link.source] = {name: link.source});
              link.target = service.nodes[link.target] || (service.nodes[link.target] = {name: link.target});
            });
            
            service.force = d3.layout.force()
                            .nodes(d3.values(service.nodes))
                            .links(service.links)
                            .size([service.width, service.height])
                            .linkDistance(60)
                            .charge(-300)
                            .on("tick", service.tick)
                            .start();
                            
            service.svg = d3.select(selector).append("svg")
                            .attr("width", service.width)
                            .attr("height", service.height);
                            
            // Per-type markers, as they don't inherit styles.
            service.svg.append("defs").selectAll("marker")
                        .data(["goingTo"])
                        .enter().append("marker")
                        .attr("id", function(d) { return d; })
                        .attr("viewBox", "0 -5 10 10")
                        .attr("refX", 15)
                        .attr("refY", -1.5)
                        .attr("markerWidth", 6)
                        .attr("markerHeight", 6)
                        .attr("orient", "auto")
                        .append("path")
                        .attr("d", "M0,-5L10,0L0,5");
                        
                        service.path = service.svg.append("g").selectAll("path")
                        .data(service.force.links())
                        .enter().append("path")
                        .attr("class", function(d) { return "link " + d.type; })
                        .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });
                        
                        service.circle = service.svg.append("g").selectAll("circle")
                                                .data(service.force.nodes())
                                                .enter().append("circle")
                                                .attr("r", 6)
                                                .call(service.force.drag);
                                                
                        service.text = service.svg.append("g").selectAll("text")
                                                .data(service.force.nodes())
                                                .enter().append("text")
                                                .attr("x", 8)
                                                .attr("y", ".31em")
                                                .text(function(d) { return d.name; });
                        
        }
    
        // Use elliptical arc path segments to doubly-encode directionality.
        service.tick = function() {
          service.path.attr("d", service.linkArc);
          service.circle.attr("transform", service.transform);
          service.text.attr("transform", service.transform);
        }
        
        service.clear = function(){
            service.clearLinks();
            service.nodes = {};
            if(angular.isDefined(service.svg)) service.svg.remove();
            if(angular.isDefined(service.circle)) service.circle.remove();
            service.force = {};
            if(angular.isDefined(service.path)) service.path.remove();
            if(angular.isDefined(service.text)) service.text.remove();
        }
        
        service.linkArc = function(d) {
          var dx = d.target.x - d.source.x,
              dy = d.target.y - d.source.y,
              dr = Math.sqrt(dx * dx + dy * dy);
          return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
        }
        
        service.transform = function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        }
        
        service.buildLinkFromBookPages = function(pages){
            angular.forEach(pages,function(page) {
                page.transitions.forEach(function(transition){
                   var pageId = transition.to_page;
                   service.addLink(page.title,pages[pageId].title); 
                });
                
                if(page.transitions.length === 0){
                    service.addLink(page.title,page.title);
                }
            });
        }
        
        return service;
    }
]);