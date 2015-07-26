$(function() {
  $("#what-about-the-progress").on("click", function() {
    $("#progress").empty();

    var wordMax     = 4;
    var wordCount   = 0;
    var sortedCount = 0;
    var words       = ["進捗", "どう", "です", "か"];
    var lastNum     = wordMax;
    while (sortedCount != wordMax - 1) {
        var rand = Math.floor(Math.random() * 4);
        $("#progress").append("<span class='h1'>" + words[rand] + "</span>");
        wordCount += words[rand].length;
        sortedCount = rand > lastNum ? sortedCount + 1 : 0;
        lastNum = rand;
    }
    $("#progress").append("<span class='h2'>???<br>" + (wordCount + 3) + "文字で煽られました。</span>");
  });
});
