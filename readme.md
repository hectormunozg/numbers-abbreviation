# Numbers abbreviation jQuery plugin
Fully customizable plugin, you can change every number you want from your DOM and convert it to an abbreviated expression (1234 would be 12.34K, for example).

## How it works
This plugins targets every number with the selector chosen and convert it to the format you want to. For example:
```html
<div class="test">
	<ul>
		<li>
			<a dataconvert href="#">1250</a>
		</li>
	</ul>
</div>
```
In this example, 1250 will be converted to 12.50K or the format you customize.

## How to use it
Let's have a look at the variables you can modify:

```javascript
// variables
	var customSelector 	 = "dataconvert"; // custom selector to target numbers
	var kFactor 		 = "K"; 
	var mFactor 		 = "M";
	var decNumK 		 = 2; // choose number of decimals positions
	var decNumM 		 = 2; // choose number of decimals positions
	var separator 		 = '.'; // choose custom separator
```

You have available a minified version!

## NOTE!
This plugin requires jQuery!

## License
This plugin is under *license Creative Commons 3.0 BY* 

