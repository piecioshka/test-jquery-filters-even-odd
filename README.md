# test-filters-even-odd

> Test project explains difference in filters even/odd in jQuery Sizzle selectors and CSS selectors.

![](./app/images/list.png)

## Mistake

jQuery starts counting form 0 in each lists, so first item on list is 0.

This number is divided by 0, so **first element is even**.<br/>
Second item has index equal 1. It is not divided by 2, so **second element is odd**.

CSS starts counting from 1, so first item on list has index equals 1.

Number 1 is not divided by 2, so **first element is odd**.<br/>
Second element has index euqals 2. Of course is divided by 2, so **second element is even**.

## Demo

Please display simple demo available in directory app, or [here](http://piecioshka.github.io/test-filters-even-odd/).

