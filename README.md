# GOV.UK Prototype Modal Component

Example of a component (sass, JavasScript) to turn a link into a modal

## Getting started

```
npm i https://github.com/htmlandbacon/govuk-prototype-modal-plugin
```

## Examples

Adding data-prototype-module="prototype-modal" to a link or button turns it into a modal.

The following can be configured by adding data-*="value" (see coded example)

- heading - sets the heading of the modal (required)
- text - main body of the modal
- url - place where you want the action to go (required)
- button - text of the button, defaults to confirm
- button-classes - allows you to add addtional classes to the [GOV.UK button](https://design-system.service.gov.uk/components/button/)


## HTML - Delete example

```html
    <a href="/delete-link" 
      data-prototype-module="prototype-modal" 
      data-modal-heading="Are you sure you want to delete this item?"
      data-modal-url="/delete-link-1"
      >
        Delete example
      </a>
```

## HTML - Delete Red button example

```html
    <a href="/delete-link" 
        data-prototype-module="prototype-modal" 
        data-modal-heading="Are you sure you want to delete this item?"
        data-modal-url="/delete-link-1"
        data-modal-text="You will not be able to recover this item."
        data-modal-button="Delete"
        data-modal-button-classes="govuk-button--warning"
      >
        Delete Red button example
      </a>
```

## NUNJUCKS - button

```twig
{{ 
    govukButton({
        text: "Save and continue",
        attributes: {
        "data-prototype-module": "prototype-modal",
        "data-modal-heading": "Are you sure you want to save?",
        "data-modal-url": "/save-url",
        "data-modal-button": "Save all data"
        }
    })
}}
```
