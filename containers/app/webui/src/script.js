/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

var data = {
  name: "LIS4VCP",
  description: "Some long description",  
  score: 0,
  status: "In Progress",
  type: "Initiative",
  children: [
    {
      name: "REQ.2",
	  description: "Some long description",
	  reference: "OASIS-123456",
	  score: 0,
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  description: "Some long description",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
        },
        {
          name: "OASIS-123456",
		  description: "Some long description",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",	  
          children: [
            {
              name: "OASIS-123456",
			  description: "Some long description",
              reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
              reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
         	  reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.1",
	  description: "Some long description",
	  reference: "OASIS-123456",
	  score: 0.67,
	  status: "In Progress",
	  type: "Feature",
	  linkWith: ["REQ.4"],
      children: [
        {
          name: "OASIS-123456",
		  description: "Some long description",
		  reference: "OASIS-123456",
		  status: "In Progress",
	      type: "Story",	  
          children: [
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  description: "Some long description",
		  reference: "OASIS-123456",
		  status: "In Progress",
	      type: "Task",
          children: [
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  description: "Some long description",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Story",  
          children: [
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
			  description: "Some long description",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Story",  		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.3",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.09,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Story",  		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Story",  		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.4",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.25,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Task"  
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Story",		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
          type: "Task"
        }
      ]
    },
    {
      name: "REQ.5",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.13,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story", 
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
			  type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.6",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.45,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.7",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.07,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.8",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.54,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        }
      ]
    },
    {
      name: "REQ.9",
	  description: "Some long description",
	  reference: "OASIS-123456",
      score: 0.26,	  
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",		  
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        }
      ]
    },
    {
      name: "REQ.10",
	  description: "Some long description",
	  reference: "OASIS-123456",
	  score: 0.36,
	  status: "In Progress",
	  type: "Feature",
      children: [
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Story",
          children: [
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            },
            {
              name: "OASIS-123456",
		      reference: "OASIS-123456",
		      status: "In Progress",
		      type: "Sub-task"
            }
          ]
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        },
        {
          name: "OASIS-123456",
		  reference: "OASIS-123456",
		  status: "In Progress",
		  type: "Task"
        }
      ]
    }
  ]
};

// Create wrapper container
var container = root.container.children.push(am5.Container.new(root, {
  width: am5.percent(100),
  height: am5.percent(100),
  layout: root.verticalLayout
}));

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
  singleBranchOnly: false,
  downDepth: 2,
  topDepth: 1,
  initialDepth: 1,
  valueField: "score",
  categoryField: "name",
  childDataField: "children",
  idField: "name",
  linkWithField: "linkWith",
  manyBodyStrength: -10,
  centerStrength: 0.8
}));

series.get("colors").setAll({
  step: 2
});

series.outerCircles.template.setAll({
  strokeWidth: 2
});

series.outerCircles.template.states.create("disabled", {
  fillOpacity: 0.5,
  strokeOpacity: 0,
  strokeDasharray: 0
});

series.outerCircles.template.states.create("hoverDisabled", {
  fillOpacity: 0.5,
  strokeOpacity: 0,
  strokeDasharray: 0
});

// tooltips
series.nodes.template.set("tooltipText", "[bold]{reference}[/]: {description}");

series.links.template.set("strength", 0.5);

series.links.template.setAll({
	strokeWidth: 5,
	strokeOpacity: 0.5
});

series.set("selectedDataItem", series.dataItems[0]);

// Hide circles
series.circles.template.set("forceHidden", true);
series.outerCircles.template.set("forceHidden", true);

// Add an ellipsis to node
series.nodes.template.setup = function(target) {
  target.events.once("dataitemchanged", function(ev) {
    var target = ev.target;
    target.dataItem.on("circle", function(circle) {
      circle.on("radius", function(radius, circle) {
        var ellipsis = circle.getPrivate("customData");
        if (ellipsis) {
          ellipsis.setAll({
            radiusX: circle.get("radius"),
            radiusY: circle.get("radius") * 0.6
          })
        }
        else {
          ellipsis = target.children.unshift(am5.Ellipse.new(root, {
            radiusX: circle.get("radius"),
            radiusY: circle.get("radius") * 0.6,
            centerX: am5.percent(50),
            centerY: am5.percent(50),
            fill: circle.get("fill")
          }));
          circle.setPrivate("customData", ellipsis);
        }
      })
    })
  });
}

series.data.setAll([data]);

// Make stuff animate on load
series.appear(1000, 100);
