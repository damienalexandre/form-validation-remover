# HTML5 Form validation remover

Simple extension to **remove HTML5 Form constraints**, allowing you to submit any form in webpages even if there is a `required` attribute or other custom HTML5 input type.

![](meta/demo.gif)

This extension add a `novalidate` attribute on all the forms of the current page, even the ones loaded via AJAX.

The public of this extension is mainly developers wishing to test their backend form validation from a modern browser.

## Download and install from the Chrome Web Store

[![](meta/chrome.png)](https://chrome.google.com/webstore/detail/html5-form-validation-rem/dcpagcgkpeflhhampddilklcnjdjlmlb)

## Changelog

### Version 2: July 2017

- No more permissions needed! Using `activeTab` instead of `all_urls`
- Button is now a toggle specific to the current page, fix #3
- Forms added asynchronously are also handled

### Version 1: April 2013

- Initial release

## Todo (help welcome!)

- Better icons (we need someone with Paint to create new assets for the Chrome Web Store)

## How to release

- `git archive -o latest.zip HEAD`
- https://chrome.google.com/webstore/developer/dashboard
