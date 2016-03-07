var models = {
  "4_4": {
    name: "Full Sized (4/4)",
    printers: [
      {
        name: "Official CAD files",
        url: "http://a360.co/21RxGCo"
      },
      {
        name: "Just give me the .STL files",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/stl/4_4_v2_1_0.zip"
      },
      {
        name: ".STL files for smaller printers",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/stl_smaller/4_4_v2_1_0_smaller.zip"
      },
      {
        name: "Ultimaker 2",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/ultimaker/4_4_v2_1_0_ultimaker.zip"
      },
      {
        name: "Printrbot Plus",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/printrbot_plus/4_4_v2_1_0_printrbot.zip"
      },
      {
        name: "Dremel Idea Builder",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/dremel_idea_builder/4_4_v2_1_0_dremel.zip"
      },
      {
        name: "Makerbot Replicator 2",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/rep2/4_4_v2_1_0_rep2.zip"
      },
      {
        name: "Type A Series 1",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/4_4/type_a/4_4_v2_1_0_typea.zip"
      }
    ]
  },
  "1_2": {
    name: "Half Sized (1/2)",
    printers: [
      {
        name: "Official CAD files",
        url: "http://a360.co/1TDmyo7"
      },
      {
        name: "Just give me the .STL files",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/stl/1_2_v2_1_0.zip"
      },
      {
        name: "Ultimaker 2",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/ultimaker/1_2_v2_1_0_ultimaker.zip"
      },
      {
        name: "Printrbot Plus",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/printrbot_plus/1_2_v2_1_0_printrbot.zip"
      },
      {
        name: "Dremel Idea Builder",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/dremel_idea_builder/1_2_v2_1_0_dremel.zip"
      },
      {
        name: "Makerbot Replicator 2",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/rep2/1_2_v2_1_0_rep2.zip"
      },
      {
        name: "Type A Series 1",
        url: "https://s3-us-west-2.amazonaws.com/hovalin/V2.1.0/1_2/type_a/1_2_v2_1_0_typea.zip"
      }
    ]
  }
};

$(document).ready(function(){
  var $violin_size = $("#violin_size");
  var $printer_type = $("#printer_type");
  var selectedSize = $("#violin_size").val();

  function refreshDownloadOptions(){
    selectedSize = $("#violin_size").val();
    $printer_type.empty();
    for(var i = 0; i < models[selectedSize].printers.length; i++) {
      var model = '<option>' + models[selectedSize].printers[i].name + '</option>';
      $printer_type.append(model);
    }
  }
  
  function updateDownloadLink(){
    for(var i = 0; i < models[selectedSize].printers.length; i++) {
      if (models[selectedSize].printers[i].name === $printer_type.val()) {
        var url = models[selectedSize].printers[i].url;
        $("#download-link").attr("href", url);
        break;
      }
    }
  }

  // When the selected violin size is changed
  // Load that model's availble printer options
  $violin_size.change(function(e){
    console.log(e);
    refreshDownloadOptions();
  });

  $printer_type.change(function(e){
    updateDownloadLink();
  });

  // Initialize the form options when the page loads
  refreshDownloadOptions();
  updateDownloadLink();
  
  // Start the download of a file when clicked
});
