import '@polymer/polymer/lib/elements/custom-style.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `
<custom-style>
  <style is="custom-style">
  /* mixin definitions */
  html {
    --paper-date-picker-dialog: {
      margin: 0;
      max-height: 520px !important;
      overflow: hidden;
    };
    --paper-date-picker-dialog-picker: {
      margin-top: 0 !important;
      padding: 0;
    };
    --paper-date-picker-dialog-calendar: {
      padding-bottom: 0;
    };
    --paper-date-picker-dialog-heading: {
      margin-bottom: -62px;
    };
  }
  </style>
</custom-style>

<dom-module id="paper-date-picker-dialog-style">
  <template>
    <style>
      /* Application of mixins to local .paper-date-picker-dialog elements */     
      .paper-date-picker-dialog {
        @apply --paper-date-picker-dialog;
      }
      .paper-date-picker-dialog > paper-date-picker {
        --paper-calendar: {s
          @apply --paper-date-picker-dialog-calendar;
        };
        @apply --paper-date-picker-dialog-picker;
      }
      .paper-date-picker-dialog > paper-date-picker:not([narrow]) {
        --paper-date-picker-heading: {
          @apply --paper-date-picker-dialog-heading;
        };
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);