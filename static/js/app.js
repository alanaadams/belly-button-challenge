// Get the bellybutton biodiversity data
const bellyButtons = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(bellybuttons).then(function(data) {
  console.log(data);
});

//******************** DEFINE DROPDOWN SELECTION ********************//

selection = bellyButtons.samples[i]

// Slice the first 10 objects for plotting
slicedData = selection.sample_values.slice(0, 10);

// Reverse the array to accommodate Plotly's horizontal bar chart defaults
reversedData = slicedData.reverse();


// Trace1 for the dropdown selection
let trace1 = {
    x: reversedData.map(object => object.selection.sample_values),
    y: reversedData.map(object => object.selection.otu_ids),
    text: reversedData.map(object => object.selection.otu_labels),
    name: selection.id,
    type: "bar",
    orientation: "h"
  };
  
  // Data array
  let traceData = [trace1];
  
  // Apply a title to the layout
  let layout = {
    title: "Top 10 OTUs found in that individual",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  // Render the plot to the div tag with id "plot"
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("plot", traceData, layout);
  
