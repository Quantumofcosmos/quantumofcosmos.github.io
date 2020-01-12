---
layout: post
title: Visualizing origins of Indian cricket worldcup squads

---
This is an endeavor to visualize origins of Indian worldcup squads across years.

## Genesis
This idea struck me during a discussion about representation of south India in the worldcup squads.
I then thought why not see which states regularly contributed the squad representing India as a visualization.

## Decisions made & Data gathered:

1. **Decision on framework:**
Since the case-in-point is representation from different states, visualization has to be a geographical chart. The language choice was pretty clear with only javascript on the list, but I was spoiled for choice when it came to the JS framework that I was going to use. The choices were:

    * Google Geo charts
    * Leaflet JS
    * D3.JS

    D3.JS made the cut as it is not a specialized mapping framework like Leaflet and also D3 is the most robust framework among the three whose basic knowledge might be useful in future projects as well.

2. **Data gathered:**

* Squad info was gathered from wikipedia followed by their state from their personal page.

    * If the player played for a city team(Hyderabad) at national level, "state in which the city currently is" is selected.
    * If the team is unconventional(Railways), players' birth stated is selected.

* Geo-json was obtained from another source. This file has co-ordinates of state borders.

## Functionalities:

1. Page when loaded for the first time show the 2019 worldcup squad currently representing India. 

2. Year can be changed from drop-down above map. The map and the contents of the table update accordingly.

3. If you are on desktop, Hover on states to see the info in table at mouse-tip.

## Squad composition:

<script type="text/javascript">
function resizeIframe(iframe) {
  iframe.height = iframe.contentWindow.document.body.scrollHeight+400 + "px";
}
</script>
<iframe src="/notebooks/d3test2.html" id="iframeid" onload="resizeIframe(this)" style="border:none;width:100%;overflow-x:hidden;"> </iframe>
