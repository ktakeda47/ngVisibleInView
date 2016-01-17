# ngVisibleInView

This is an Angular.js custom directive which emit an event when an element is visible.
(This custom directive depends on [jquery-visible](https://github.com/customd/jquery-visible).)

## Installation

- `$ bower install ngVisibleInView`

## Usage

0. Load [jquery-visible](https://github.com/customd/jquery-visible) : `<script src="/bower_components/df-visible/jquery.visible.min.js"></script>`
0. Load **ngVisibleInView** : `<script src="/bower_components/ngVisibleInView/ng-visible-in-view.js"></script>`
0. Inject **ngVisibleInView** to your angular app : `angular.module("yourApp", ["ngVisibleInView"]);`
0. Add `visible-in-view` attribute to target element. : `<div visible-in-view>hoge</div>`
0. Listen `onVisibleInView` event in parent scope :
```
// When a target element is visible, this function receive onVisibleInView event.
$scope.$on("onVisibleInView", function(event, args) {
	// do something...
});
```

### Detail

- See `sample` directory.

## Demo

- [visit](http://ng-visible-in-view.maiware.net/)